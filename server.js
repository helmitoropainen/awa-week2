const express = require('express')
const bp = require('body-parser')
const path = require('path')
const app = express()
const port = 3000

let list = [];

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/hello', (req, res) => {
  res.send({msg: 'Hello World!'})
})

app.get('/echo/:id', (req, res) => {
    res.send({id: req.params.id});
  })

app.post('/sum', (req, res) => {
    const numbers = req.body.numbers

    const sum = numbers.reduce((a, b) => {
        return a + b;
      }, 0);

    res.send({sum: sum});
}) 

app.post('/list', (req, res) => {
    const content = req.body.text
    list.push(content)
    res.send({list: list});
}) 
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
