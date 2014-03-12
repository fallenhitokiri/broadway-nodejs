# vIH

Remote control Jolvoy.

## Server

To register with the service open a socket.io connection.
Listing to the `update` event.

Payload will be `xaxis` and `yaxis` representing the movements made on the client.

## Client

Send an update to the server endpoint `/update`. It expects `xaxis` and `yaxis` in the request body representing the movements made.

