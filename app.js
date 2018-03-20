const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})
app.get('/random/:numeroInicial/:numeroFinal', (req, res) => {
  const num1 = parseInt(req.params.numeroInicial)
  const num2 = parseInt(req.params.numeroFinal)
  let resultado
  if (num1 < num2) {
    resultado = Math.floor(Math.random() * (num2 - num1) + num1)
  } else if (num1 > num2) {
    resultado = Math.floor(Math.random() * (num1 - num2) + num2)
  }
  res.set('Content-Type', 'text/html')
  res.send(
    new Buffer(
      `<div style="text-align: center" >
        <p style="margin: 20px">Tu numero es: ${resultado}</p>
        <a href="/">Regresar</a>
      </div>`
    )
  )
})

app.listen(3000, () => {
  console.log('Sirviendo en el puerto 3000.')
})
