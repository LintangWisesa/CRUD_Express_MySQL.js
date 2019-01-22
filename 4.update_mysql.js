var mysql = require('mysql')

var db = mysql.createConnection({
    host: 'localhost',
    user: 'lintang',
    password: '12345',
    database: 'tokoku'
})

db.connect(()=>{
    console.log('Database terhubung!')
})

var dbStat = 'update products set ? where id = ?'
var data = {
    product_name: 'Bala-bala',
    price: 2000,
    info: 'Bala-bala anget',
    quantity: 2000
}
var id = 6
db.query(dbStat, [data, id], (error, output) => {
    if(error){
        console.log(error)
    } else {
        console.log(output)
    }
})

db.end(()=>{
    console.log('Database terputus!')
})