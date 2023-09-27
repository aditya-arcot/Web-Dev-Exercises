const express = require('express')
const morgan = require('morgan')
const app = express()

const requestTime = (req, res, next) => {
    req.requestTime = Date.now()
    next()
}

// valid query string - ?password=root
const verifyPassword = (req, res, next) => {
    const { password } = req.query
    if (!password || password !== 'root'){
        res.status(404).send('not found')
    }
    else next()
}

app.use(morgan('dev'))
app.use(requestTime)
app.use('/dogs', verifyPassword)

// app.use((req, res, next) => {
//     console.log('middleware 1')
//     next()
//     // will be executed after pipeline is complete
//     // after route handler
//     console.log('middleware 1 - 2')
// })
// app.use((req, res, next) => {
//     console.log('middleware 2')
//     next() // prevent return to next line
//     console.log('middleware 2 - 2')
// })
// app.use((req, res, next) => {
//     console.log('middleware 3')
//     next()
// })

app.get('/', (req, res) => {
    console.log(req.requestTime)
    res.send('home')
})

app.get('/dogs', (req, res) => {
    console.log(req.requestTime)
    res.send('woof')
})

app.use((req, res) => {
    res.status(404).send('not found')
})

app.listen(3000, () => {
    console.log('app running on port 3000')
})