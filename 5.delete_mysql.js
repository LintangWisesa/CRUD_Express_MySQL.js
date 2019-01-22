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

var dbStat = 'delete from products where id = ?'
var id = 6
db.query(dbStat, id, (error, output) => {
    if(error){
        console.log(error)
    } else {
        console.log(output)
    }
})

db.end(()=>{
    console.log('Database terputus!')
})