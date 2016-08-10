'use stric'

var path = require('path')
var util = require('./libs/util')
var wechat_file = path.join(__dirname,'./config/wechat.txt')

var config = {
  wechat : {
    appID:'wx76db6fb41494b6e6',
    appSecret:'ad00af6eeafdbe59ca02bcdab1b46234',
    token:'liecainet2016',
    getAccessToken: function() {
        return util.readFileAsync(wechat_file)
    },
    saveAccessToken: function(data) {
        data = JSON.stringify(data)
        //console.log(data)
        return util.writeFileAsync(wechat_file,data)
    }
  }
}

module.exports = config