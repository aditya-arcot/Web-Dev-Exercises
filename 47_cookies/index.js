const express = require('express')
const app = express()

const cookieParser = require('cookie-parser')
app.use(cookieParser('secretvalue'))

app.get('/greet', (req, res) => {
    const { name = 'Anonymous' } = req.cookies
    res.send(`name - ${name}`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'Steve')
    res.send('cookie sent')
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send('signed cookie')
})

app.get('/verifyfruit', (req, res) => {
    res.send(req.signedCookies)
})

app.listen(3000, () => {
    console.log('listening')
})