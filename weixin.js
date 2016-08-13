'use strict'

exports.reply = function*(next) { //next向下传递流程，中间中的yield暂停代码的执行，上下文通过call改变
    var message = this.weixin

    if (message.MsgType === 'event') {
        if (message.Event === 'subscribe') {
            if (message.Event) {
                console.log('扫二维码进来：' + message.EventKey + '' + message.Ticket)
            }
            this.body = '哈哈，你订阅了我的号'
        } else if (message.Event === 'unsubscribe') {
            console.log('无情取关')
            this.body = ''
        }
    } else {

    }

    yield next
}














//console.log("winxinjs:6,微信的Messge : " + message)
//console.log("客户端发来的Messge.content : " + message.Content)
//console.log("客户端发来的Messge.EventKey : " + message.EventKey)
//console.log("客户端发来的Messge.ticket : " + message.ticket)
//console.log("客户端发来的Messge.MsgType : " + message.MsgType)
//console.log("客户端发来的Messge.Event : " + message.Event)
// if (message.MsgType === 'event') {
//     if (message.Event === 'subscribe') {
//         if (message.EventKey) { //事件KEY值，qrscene_为前缀，后面为二维码的参数值
//             console.log('扫二维码进来：' + message.EventKey + '' + message.Ticket)
//         }
//         this.body = '哈哈，你订阅了我的号'
//     } else if (message.Event === 'unsubscribe') {
//         console.log('无情取关')
//         this.body = ''
//             } else if (message.Event === 'LOCATION') {
//                 this.body = '您上报的位置是：' + message.Latitude + '/' + message.Longitude + '-' + message.Precision
//             } else if (message.Event === 'CLICK') {
//                 this.body = '您点击了菜单：' + message.EventKey
//             } else if (message.Event === 'SCAN') {
//                 console.log = '关注后扫二维码' + message.EventKey + '' + message.Ticket
//                 this.body = '看到你扫了我们的二维码'
//             } else if (message.Event === 'VIEW') {
//                 this.body = '您点击了菜单中的链接：' + message.EventKey
//             } else if (message.MsgType === 'text') {
//                 var content = message.Content
//                 var reply = '额，你说的是' + message.Content + '吗？'

//             if (content === '1') {
//                 reply = 'diyi'
//             } else if (content === '2') {
//                 reply = 'dier'
//             } else if (content === '3') {
//                 reply = 'disan'
//             } else if (content === '4') {
//                 reply = [{
//                     title: 'node',
//                     description: 'leicai',
//                     picUrl: 'http://www.liecainet.com/img/logo.png',
//                     url: 'http://www.liecainet.com/'
//                 }, {
//                     title: 'node1',
//                     description: 'leicai2',
//                     picUrl: 'http://www.liecainet.com/img/logo.png',
//                     url: 'http://www.liecainet.com/'
//                 }]
//             }
//             this.body = reply
//     } else if (message.Event === 'unsubscribe') {}
// } else {

// }

// yield next