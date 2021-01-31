const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
const path = require('path')

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'))

app.get('/docs/:name', (req, res, next) => { 
    let html = ''
    fs.readFile(__dirname + '/public/template/head.html',  (err, data) => {
        html += data
        fs.readFile(__dirname + req.path,  (err, data) => {
            if(err) next(err)
            html += data
            fs.readFile(__dirname + '/public/template/foot.html',  (err, data) => {
                html += data
                res.end(html)
            })
        })
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))