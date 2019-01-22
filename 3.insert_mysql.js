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

var dbStat = 
'insert into products set ?'
var data = {
    product_name: 'Jas Hujan',
    price: 80000,
    info: 'Jas hujan anti air',
    quantity: 32
}
db.query(dbStat, data, (error, output) => {
    if(error){
        console.log(error)
    } else {
        console.log(output)
    }
})

db.end(()=>{
    console.log('Database terputus!')
})