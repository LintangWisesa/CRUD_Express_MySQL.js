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

var dbStat = 'select * from products'
db.query(dbStat, (error, output) => {
    if(error){
        console.log(error)
    } else {
        console.log(output)   // array
        // console.log(output[0])
    }
})

db.end(()=>{
    console.log('Database terputus!')
})