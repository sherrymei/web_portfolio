// console.log("asdf")
// var x = 3
// console.log(x)
const express = require('express')
const app = express()

app.use(express.static('webpage'))

app.get('/', function (req, res) {
  res.send()
})

 app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %s!', app.address().port)
})

// var a = `
// <html>
// 	<title>my first Node.js</title>
// 	<body> 
// 	i am awesome by sherry.<strong>false</strong></body>
// </html>`