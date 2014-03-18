# Broadway - a cheap telepresence device.

See http://blog.printf.net/articles/2014/03/18/a-robot-for-timo/ for more info.

<img src="http://chris.printf.net/jolvoy.gif"/>

This repository is for the code that acts as a websocket proxy between
broadway-ios-remote and broadway-ios-office.

Licensed under Apache 2.0.

## Server

To register with the service open a socket.io connection and listen to the
`update` event.

Payload will be `xaxis` and `yaxis` representing the movements made on the
client.

## Client

Send an update to the server endpoint `/update`. It expects `xaxis` and `yaxis` in the request body representing the movements made.

## Testing

You can use curl to send a movement command to the server.

     curl -X POST -d xaxis=123 -d yaxis=4 http://localhost:8001/update
