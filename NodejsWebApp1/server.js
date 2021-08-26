'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var fs = require('fs');
var url = require('url');

http.createServer(function(req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 not found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(port);
