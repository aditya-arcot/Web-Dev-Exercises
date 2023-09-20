const express = require('express')

const app = express()
const port = 3000

// matches all requests
// app.use((req, res) => {
//     console.log('request received')
//     res.send('base route')
// })

app.get('/', (req, res) => {
    console.log('root request (get)')
    res.send('home page')
})

app.get('/cats', (req, res) => {
    console.log('cat request (get)')
    res.send('meow')
})

app.get('/dogs', (req, res) => {
    console.log('dog request (get)')
    res.send('woof')
})

app.get('/q/:var1', (req, res) => {
    const {var1} = req.params;
    console.log(`variable request (get) (${var1})`)
    res.send(`${var1} variable received`)
})

app.get('/search', (req, res) => {
    const {q} = req.query;
    console.log(`search request (get) - query value - ${q}`)
    res.send(`query value - ${q}`)
})

app.get('/*', (req, res) => {
    console.log('unknown request (get)')
    res.send('unknown route')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
