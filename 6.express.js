var express = require('express')
var cors = require('cors')
var route_mysql = require('./router/route_mysql')

var app = express()
app.use(route_mysql)
app.use(cors())

app.get('/', (req, res)=>{
    res.send('<h1>Tes Express ♥ MySQL</h1>')
})

app.listen(1234, ()=>{
    console.log('Server aktif di port 1234')
})