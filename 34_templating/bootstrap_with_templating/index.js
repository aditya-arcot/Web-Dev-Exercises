const express = require('express')
const path = require('path')
const redditData = require('./data.json')

const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'resources')))

app.get('/', (req, res) => {
    res.render('home', {title:'Home'})
})

app.get('/cats', (req, res) => {
    const cats = ['Blue', 'Rocket', 'Monty']
    res.render('cats', {cats, title:'Cats'})
})

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    res.render('random', {rand:num, title:'Random'})
})

app.get('/r/:subreddit', (req, res) => {
    const {subreddit} = req.params
    const data = redditData[subreddit]
    if (data) res.render('subreddit', {...data, title:data.name})
    else res.render('notfound', {subreddit, title:'Not Found'})
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})