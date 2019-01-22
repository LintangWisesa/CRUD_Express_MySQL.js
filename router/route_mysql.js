var router = require('express').Router()

router.get('/data', (req, res) => {
    res.send('<h1>Ini data</h1>')
})

module.exports = router