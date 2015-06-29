/**
 * Created by PhanDuy on 6/28/2015.
 */
var http = require ('http');
var querystring = require ('qs');
var fs = require('fs');



var postData = querystring.stringify({
    'lstClass' : '816'
});

var options = {
    hostname: 'www.coltech.vnu.edu.vn',
    port: 80,
    path: '/news4st/kqdh.php',
    method: 'POST',
    keepAlive: true,
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en,en-US;q=0.8,vi;q=0.6',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': postData.length,
        'Connection':'keep-alive'
    }
};
function myRequest() {
    var req = http.request(options, function(res) {
        console.log('STATUS: ' + res.statusCode);
        console.log('HEADERS: ' + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', function (chunk) {

            console.log('BODY: ' + chunk);
        });
    });

    req.on('error', function(e) {
        console.log('problem with request: ' + e.message);
    });

    // write data to request body
    req.write(postData);
    req.end();
}

setInterval(myRequest, 60000);