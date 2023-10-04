const express = require('express')
const app = express()
const session = require('express-session')

app.use(session({
    secret: 'secretgoeshere',
    resave: false,
    saveUninitialized: true
}))

app.get('/viewcount', (req, res) => {
    if (!req.session.count) {
        console.log('new viewer')
        req.session.count = 0
    }
    req.session.count += 1
    res.send(`viewed this page ${req.session.count} times`)
})

app.get('/register', (req, res) => {
    const { username = 'ANONYMOUS' } = req.query
    req.session.username = username
    res.redirect('/greet')
})

app.get('/greet', (req, res) => {
    const { username } = req.session
    res.send(`welcome back ${username}`)
})

app.listen(3000, () => {
    console.log('listening')
})