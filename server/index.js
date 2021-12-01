const express = require('express')
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')

const app = express()
const port = 4444

app.use(urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(__dirname + "../"))
app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('/form', (req, res) => {
  return res.render('form')
})

app.post('/business', (req, res) => {
  console.log(req.body)
  res.render('business')
})

app.listen(port, () => {
  console.log("server listen in http://localhost:4444..")
})