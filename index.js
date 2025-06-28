const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
app.use(cors());

var request = require('request');
var url = 'https://www.google.com'
// use a timeout value of 10 seconds
var timeoutInMilliseconds = 10*1000
var opts = {
  url: url,
  timeout: timeoutInMilliseconds
}
//npm install request

//const axios = require('axios');
//const { JSDOM } = require('jsdom');
//npm install axios jsdom

//How is an HTTP POST request made in node.js?
//https://stackoverflow.com/questions/6158933/how-is-an-http-post-request-made-in-node-js
//Node.js request web page
//https://stackoverflow.com/questions/15838623/node-js-request-web-page

const envObject = {
  port: process.env.PORT,
  uri: process.env.URI
}

console.log('envObject', envObject)

let notes = [
  {
    id: 1,
    content: "HTML is easy biisi",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

app.get('/', (_req, res) => {
  res.send('<h1>Hello from the root application URL</h1>');
});

app.get('/api/ping', (req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.get('/api/notes', (req, res) => {
  res.json(notes)
})


function runperiodFunction2(){
  console.log("Period Function2 executed");

  request(opts, function (err, res, body) {
    if (err) {
      console.dir(err)
      return
    }

    var statusCode = res.statusCode
    var statusMsg = res.statusMessage


    console.log('status code: ' + statusCode)
    console.log('status msg: ' + statusMsg)
  })
}

function runperiodFunction() {
  console.log("Period Function executed");
  setTimeout(runperiodFunction, 10000);
}

const PORT = 3001
app.listen(PORT, () => {
  //runperiodFunction();

  runperiodFunction2();
  setInterval(runperiodFunction2,10000);
  console.log(`Server running on port ${PORT}`)
})