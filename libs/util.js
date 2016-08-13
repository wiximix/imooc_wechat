'use strict'

var fs = require('fs')
var Promise = require('bluebird')

exports.readFileAsync = function(fpath, encodning) {
    return new Promise(function(resolve, reject) {
        fs.readFile(fpath, encodning, function(err, content) {
            if (err) reject(err)
            else resolve(content)
        })
    })
}

exports.writeFileAsync = function(fpath, content) {
    return new Promise(function(resolve, reject) {
        fs.writeFile(fpath, content, function(err) {
            //console.log(content)
            if (err) reject(err)
            else resolve()
        })
    })
}