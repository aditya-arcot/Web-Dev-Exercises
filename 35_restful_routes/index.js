const express = require('express')
const path = require('path')
const { v4:uuid } = require('uuid')
const methodOverride = require('method-override')

const app = express()
const port = 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

// fake database implementation
let comments = [
    {
        id: uuid(),
        username: 'Todd',
        text: 'lol that is so funny!'
    },
    {
        id: uuid(),
        username: 'Skyler',
        text: 'I like to go birdwatching with my dog'
    },
    {
        id: uuid(),
        username: 'Sk8erBoi',
        text: 'Plz delete your account, Todd'
    },
    {
        id: uuid(),
        username: 'onlysayswoof',
        text: 'woof woof woof'
    }
]

/*
Routes

Index   GET     /comments           Display comments
New     GET     /comments/new       Form to create new comment
Create  POST    /comments           Creates new comment
Show    GET     /comments/:id       Details for a comment
Edit    GET     /comments/:id/edit  Form to edit specific comment
Update  PATCH   /comments/:id       Updates a comment
Delete  DELETE  /comments/:id       Deletes a comment
*/

const baseUrl = '/comments'

app.get(baseUrl, (req, res) => {
    res.render('index', {name:'Comments Index', comments, baseUrl})
})

app.get(path.join(baseUrl, 'new'), (req, res) => {
    res.render('new', {name:'New Comment Form', baseUrl})
})

app.post(baseUrl, (req, res) => {
    const { username, text}  = req.body
    if (username && text)
    {
        comments.push({id:uuid(), username, text})
        res.redirect(baseUrl)
    }
})

app.get(path.join(baseUrl, ':id'), (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    if (comment) res.render('show', {name:`Comment ${id}`, comment, baseUrl})
})

app.get(path.join(baseUrl, ':id', 'edit'), (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    if (comment) res.render('edit', {name:`Comment ${id}`, comment, baseUrl})
})

app.patch(path.join(baseUrl, ':id'), (req, res) => {
    const { id } = req.params
    const comment = comments.find(c => c.id === id)
    const newText = req.body.text
    if (comment && newText) {
        comment.text = newText
        res.redirect(baseUrl)
    }
})

app.delete(path.join(baseUrl, ':id'), (req, res) => {
    const { id } = req.params
    comments = comments.filter(c => c.id !== id)
    res.redirect(baseUrl)
})

app.listen(port, () => console.log(`server started on port ${port}`))