var http = require('http'),
    fs = require('fs-extra'),
    url = require('url'),
    open = require('open')
    port=1010,
    server = http.createServer(function(req, res) {
        if(req.method==="GET"){
            var urlReq=url.parse(req.url, true).pathname,
                extension  = urlReq.substring((urlReq.lastIndexOf(".") + 1));
            if (urlReq === '/'){
                urlReq="app/index.html";
            }
            fs.readFile('./'+urlReq, function(error, data) {
                var mimeType="";
                switch(extension){
                    case"htm":
                    case"html":
                    default:
                        mimeType="text/html";
                        break;
                    case"css":
                        mimeType="text/css";
                        break;
                    case"js":
                        mimeType="text/javascript";
                        break;
                    case"png":
                        mimeType="image/png";
                        break;
                    case"jpg":
                    case"jpeg":
                        mimeType="image/jpeg";
                        break;
                    case"woff":
                        mimeType="application/x-font-woff";
                        break;
                    case"ttf":
                        mimeType="font/opentype";
                        break;
                    case"zip":
                        mimeType="application/zip";
                        break;
                }
                res.setHeader('Content-Type', mimeType);
                res.writeHead(200);
                res.end(data);
            });
        }
    });

server.listen(port, 'localhost', function(){
    console.log("Server started for generous at localhost:"+port);
    open('http://localhost:'+port+'/app/index.html');
});