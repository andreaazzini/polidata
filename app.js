var server = require('http').createServer()
  , url = require('url')
  , express = require('express')
  , app = express()
  , port = 8080;

app.use(express.static(__dirname + '/public'));

server.on('request', app);
server.listen(port, function () { console.log('Listening on ' + server.address().port) });
