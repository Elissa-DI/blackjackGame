var http = require('http');
var url = require('url');
http.createServer(function (req, res){
    res.writeHead(200, {'Type-Content': 'text/html'});
    var q = url.parse(req.url, true).query;
    var text = q.year + " " + q.month;   
    res.write(txt);
}).listen(8020); 