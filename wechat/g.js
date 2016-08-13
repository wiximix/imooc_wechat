'use strict'
//中间件
var sha1 = require('sha1')
var Wechat = require('./wechat'); //处理票据逻辑以及回复信息
var getRawBody = require('raw-body')
var util = require('./util')


module.exports = function(opts, handler) { //实例Wechat处理票据检查，票据更新，opts是appjs传入的config
    var wechat = new Wechat(opts)

    return function*(next) {
        //console.log(this.query)

        var that = this
        var token = opts.token
        var signature = this.query.signature
        var nonce = this.query.nonce
        var timestamp = this.query.timestamp
        var echostr = this.query.echostr
            //给字典排序
        var str = [token, timestamp, nonce].sort().join('')
            //sha1加密
        var sha = sha1(str)
            //判断微信是验证还是请求数据
        if (this.method === 'GET') {
            if (sha === signature) { //微信请求
                this.body = echostr + ''
            } else { //非微信请求
                this.body = 'wrong'
            }
        } else if (this.method === 'POST') {
            if (sha !== signature) { //非微信请求
                this.body = 'wrong'

                return false
            }
            var data = yield getRawBody(this.req, { //Get and validate the raw body of a readable stream
                length: this.length,
                limit: '1mb',
                encoding: this.charset
            })

            //console.log(data.toString())
            var content = yield util.parseXMLAsync(data)

            console.log(content)

            var message = util.formatMessage(content.xml)
            console.log(message)

            this.weixin = message

            yield handler.call(this, next)

            wechat.reply.call(this)
        }
    }
}