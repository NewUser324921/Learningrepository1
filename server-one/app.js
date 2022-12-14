const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log()
})
'use strict';
app.use(express.static('public'));
app.get('/catinfo', (req, res) => {
  const cat = {
    name: 'Frank',
    birthdate: '2010-12-25',
    weight: 5,
  };
  res.json(cat);
});


app.post('/cat', (req, res) => {
  res.send('With this endpoint you can add cats.')
})

app.put('/cat', (req, res) => {
  res.send('With this endpoint you can edit cats.')
})

app.delete('/cat', (req, res) => {
  res.send('With this endpoint you can delete cats.')
})

console.log(`server run at http://localhost:3000`)
