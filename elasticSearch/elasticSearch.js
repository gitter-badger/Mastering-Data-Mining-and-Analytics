"use strict";

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host: '192.168.56.102:9200'
});

//client.ping({
//    // ping usually has a 3000ms timeout
//    requestTimeout: Infinity,
//
//    // undocumented params are appended to the query string
//    hello: "elasticsearch!"
//}, function (error) {
//    if (error) {
//        console.trace('elasticsearch cluster is down!');
//    } else {
//        console.log('All is well');
//    }
//});
//
//client.create({
//    index: 'twitter',
//    type: 'tweet',
//    // id: '1',
//    body: {
//        title: "md",
//        tags: "tags",
//        blabla: ""
//    }
//}, function (error, response) {
//    if (error) {
//        console.trace('elasticsearch cluster is down! '  + error);
//    } else {
//        console.log('All is well' + JSON.stringify(response) );
//    }
//});

//var req = client.search({
//    index: 'twitter',
//    type: 'tweet',
//    body: {
//        query: {
//            match: {
//                content: 'photo'
//            }
//        },
//        fields:['content','author','lang']
//    },
//    "size" : 1000
//
//});
//




module.exports = {
    client : client
};
//client.count(function (error, response, status) {
//    // check for and handle error
//    var count = response.count;
//    //debugger;
//});