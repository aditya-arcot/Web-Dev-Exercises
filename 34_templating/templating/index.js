const express = require('express')
const path = require('path')
const redditData = require('./data.json')

const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'resources')))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/cats', (req, res) => {
    const cats = ['Blue', 'Rocket', 'Monty']
    res.render('cats', {cats})
})

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', {rand:num})
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params
    const data = redditData[subreddit]
    if (data) res.render('subreddit', {...data})
    else res.render('notfound', {subreddit})
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})