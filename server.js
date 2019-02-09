var app = require('express')();
var http = require('http').Server(app);
//required for server connection
var io = require('socket.io')(http);

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/socket.html');
});

http.listen(3000, function () {
    console.log('Started server');
});
