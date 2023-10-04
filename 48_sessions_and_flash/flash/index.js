const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const session = require('express-session')
const flash = require('connect-flash')
const Farm = require('./models/farm')

mongoose.connect('mongodb://localhost:27017/flash')
    .then(() => console.log('connected to mongo'))
    .catch((err) => {
        console.log('connection to mongo failed')
        console.log(err)
    })

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(session({
    secret: 'thisisnotagoodsecret',
    resave: false,
    saveUninitialized: false
}))
app.use(flash())
app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.locals.messages = req.flash('success')
    next()
})

app.get('/farms', async (req, res) => {
    const farms = await Farm.find({})
    res.render('farms/index', { farms }) //, messages: req.flash('success') })
})
app.get('/farms/new', (req, res) => {
    res.render('farms/new')
})
app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id)
    res.render('farms/show', { farm })
})
app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body)
    await farm.save()
    req.flash('success', 'Successfully made a new farm')
    res.redirect('/farms')
})

app.listen(3000, () => {
    console.log(`app listening`)
})
