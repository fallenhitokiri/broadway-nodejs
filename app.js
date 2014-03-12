var http = require("http")
var express = require("express");
var app = express();
app.use(express.bodyParser())
var server = http.createServer(app);
var io = require("socket.io").listen(server);


var debug = process.env.NODE_ENV || true;
var office = false;  // office websocket
var xaxis = 0;  // last x-axis update
var yaxis = 0;  // last y-axis update
var lastUpdate = 0;  // timestamp for last update


server.listen(process.env.PORT || 8001);
io.sockets.on("connection", connection);
console.log("Server up and running!");


/*
 * websocket
 */
function connection(socket) {
    socket.on("register", register);
}

function register(data) {
    office = this;
    
    if (debug) {
        console.log(office);
    }
}


/*
 * HTTP
 */
app.post('/update', function(request, response) {
    updateLocation(request.body);
    response.end("");
});

app.get("/status", function(request, response) {
    var coordinates = {
        "xaxis": data.xaxis,
        "yaxis": data.yaxis,
        "update": lastUpdate
    }

    response.end(coordinates);
});


function updateLocation(data) {
    xaxis = data.xaxis;
    yaxis = data.yaxis;
    lastUpdate = new Date();

    var coordinates = {
        "xaxis": data.xaxis,
        "yaxis": data.yaxis
    }
    
    if (office != false) {
        office.emit("update", coordinates);
    }

    if (debug) {
        coordinates["update"] = lastUpdate;
        console.log(coordinates);
    }
}

