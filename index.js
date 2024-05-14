const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors());

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


/*
app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})
*/

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

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})