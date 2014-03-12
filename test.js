var socket = require('socket.io-client').connect('http://localhost:8001');

socket.on('update', function(data){
    console.log(data);
});

socket.emit("register", {});

console.log("Test client running");

