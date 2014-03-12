# vIH

Remote control Jolvoy. vIH = "to move"

## Server

To register with the service open a socket.io connection.
Listing to the `update` event.

Payload will be `xaxis` and `yaxis` representing the movements made on the client.

## Client

Send an update to the server endpoint `/update`. It expects `xaxis` and `yaxis` in the request body representing the movements made.

## Testing

You can use curl to send a movmement command to Jolvoy

     curl -X POST -d xaxis=123 -d yaxis=4 http://localhost:8001/update
