/*const express = require('express')

const PORT = process.env.PORT || 3000

const app = express()

async function start() {
    try {
        await mongoose.connect('', {
            useNewUrlParser: true,
            useFindAndModify: false
        })
        app.listen(PORT,() => {
            console.log('Server started')
        })
    }
    catch(e) {
        console.log(e)
    }
}

start()*/
var express = require("express"),
http = require("http"),
app = express(),
todos =
[
    {
        "description" : "CD Production",
        "tags" : [ "номер", "игра" ]
        },
        {
        "description" : "EA",
        "tags" : [ "номер", "игра" ]
        },
        {
        "description" : "Valve",
        "tags" : [ "номер", "игра" ]
        },
        {
        "description" : "metarankings",
        "tags" : [ "партнеры", "компании" ]
        },
        {
        "description" : "stopgames",
        "tags" : [ "партнеры", "компании" ]
        },
        {
        "description" : "egamersworld",
        "tags" : [ "партнеры", "компании" ]
        }
];

app.use(express.static(__dirname + "/"));
http.createServer(app).listen(3000);

app.get("/todos.json", function (req, res) {
	res.json(todos);
});


app.use(express.static(__dirname + "/"));

app.use(express.urlencoded({ extended: true }));
app.post("/todos", function (req, res) { 
	var newTodos = req.body;
	console.log(newTodos);
	medicine.push(newTodos);

	res.json(todos); 
});


/*const http = require('http');

const server = http.createServer();
server.on('request',(req,res) =>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('br');


});

server.listen(3000,() => console.log("rabotaet"));*/