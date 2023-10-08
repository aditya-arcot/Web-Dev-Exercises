const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const User = require('./models/user')
const session = require('express-session')

mongoose.connect('mongodb://localhost:27017/auth')
    .then(() => console.log('connected to mongo'))
    .catch((err) => {
        console.log('connection to mongo failed')
        console.log(err)
    })

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: 'secretgoeshere',
    resave: false,
    saveUninitialized: true
}))

const requireLogin = (req, res, next) => {
    if (!req.session.user_id) return res.redirect('/login')
    next()
}

app.get('/', (req, res) => {
    res.send('home')
})
app.get('/register', (req, res) => {
    res.render('register')
})
app.post('/register', async (req, res) => {
    const { username, password } = req.body
    const user = new User({ username, password })
    await user.save()

    req.session.user_id = user._id
    res.redirect('/secret')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login', async (req, res) => {
    const { username, password } = req.body

    const user = await User.findAndValidate(username, password)
    if (!user) return res.redirect('/login')

    req.session.user_id = user._id
    res.redirect('/secret')
})
app.post('/logout', (req, res) => {
    // req.session.user_id = null
    req.session.destroy()
    res.redirect('/login')
})
app.get('/secret', requireLogin, (req, res) => {
    res.render('secret')
})
app.get('/topsecret', requireLogin, (req, res) => {
    res.send('top secret')
})


app.listen(3000, () => {
    console.log('listening')
})