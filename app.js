'use strict'

var Koa = require('koa')
var wechat = require('./wechat/g')

var config = {
  wechat : {
    appID:'wx76db6fb41494b6e6',
    appSecret:'ad00af6eeafdbe59ca02bcdab1b46234 ',
    token:'liecainet2016'
  }
}

var app = new Koa()
app.use(wechat(config.wechat))

app.listen(8080)
console.log('listening 8080')
