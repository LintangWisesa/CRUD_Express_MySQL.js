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
'select * from products where id = ? or price > ?'
db.query(dbStat, [4, 1500000], (error, output) => {
    if(error){
        console.log(error)
    } else {
        console.log(output)
    }
})

db.end(()=>{
    console.log('Database terputus!')
})