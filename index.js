
var express = require('express');
var proxy = require('http-proxy-middleware');

var options = {
    target: 'host_default', //put here default host to redirect
    changeOrigin: true,               
    ws: true,                        
    logLevel: 'debug',
    router: {
        '/v2': 'new_host' // router match example: it means that all request that contains "v2" in its path will be redirect to new_host
    },
};

var newProxy = proxy(options);
var app = express();
app.use('/', newProxy).listen(8081);