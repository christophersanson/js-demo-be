var express = require('express')
var app = express()

app.get('/', require('./routes/index'))

app.listen(3000, () => {
  console.log('Sample app listening on port 3000!')
})

module.exports = app
