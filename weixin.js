'use strict'

exports.reply = function* (next) {
    var message = this.weixin

    if (message.MsgType === 'event') {
        if (message.Event === 'subscribe') {
            if (message.EventKey) {
                console.log('扫二维码进来：' + message.EventKey + '' + message.ticket)
            }

            this.body = 'hh, you subscribe the weixin\r\n' + 'THE Message ID:' + message.MsgId
            
        }
        else if (message.Event === 'unsubscribe') {
            console.log('i am so sad that u unsubscribe the wechat')
            this.body = ''
        }
    }
    else {
        
    }

    yield next
}