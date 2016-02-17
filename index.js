var http = require('http');
var port = 3000;
var handler = require('./handler.js');

var server = http.createServer(handler).listen(port, function() {
    console.log('Listening on port ' + port);
});

var io = require('socket.io')(server);

io.on('connection', function(socket) {
    socket.on('chat message', function(msg) {
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    });

    socket.on('user typing', function() {
        io.emit('user typing');
    });

    socket.on('user not typing', function() {
        io.emit('user not typing');
    });

    console.log("A user connected");
    socket.on('disconnect', function() {
        console.log('user disconnect');
        io.emit('disconnect', 'user disconnected');
    });
});
