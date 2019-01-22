var router = require('express').Router()
var mysql = require('mysql')
var bodyParser = require('body-parser')
router.use(bodyParser.json())

var db = mysql.createConnection({
    host: 'localhost',
    user: 'lintang',
    password: '12345',
    database: 'tokoku'
})

db.connect(()=>{
    console.log('Database terhubung!')
})

// GET all data
router.get('/data', (req, res) => {
    var dbStat = 'select * from products'
    db.query(dbStat, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// GET data by id
router.get('/data/:id', (req, res) => {
    var dbStat = 'select * from products where id = ?'
    db.query(dbStat, req.params.id, (error, output) => {
        if(error){
            console.log(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

// POST data
router.post('/data', (req, res)=>{
    var dbStat = 'insert into products set ?'
    var data = {
        product_name: req.body.nama,
        price: req.body.harga,
        info: req.body.info,
        quantity: req.body.jumlah
    }
    db.query(dbStat, data, (error, output) => {
        if(error){
            console.log(error)
            res.send(error)
        } else {
            console.log(output)
            res.send(output)
        }
    })
})

module.exports = router