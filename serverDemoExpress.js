var http = require('http');
var express = require('express');
var app = express();
var server = http.createServer(app);
app.get('/',function(request, response){ //我們要處理URL為 "/" 的HTTP GET請求
    response.end('你好！'); //作出回應
});
server.listen(8080,'127.0.0.1',function(){
    console.log('HTTP伺服器在 http://127.0.0.1:8080/ 上運行');
});