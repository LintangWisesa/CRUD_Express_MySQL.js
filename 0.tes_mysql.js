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

db.end(()=>{
    console.log('Database terputus!')
})