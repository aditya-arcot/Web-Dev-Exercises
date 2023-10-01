const express = require('express')
const app = express()
const AppError = require('./AppError')

// valid query string - ?password=root
const verifyPassword = (req, res, next) => {
    const { password } = req.query
    if (!password || password !== 'root') {
        // throw new Error('Password required')
        throw new AppError('password required', 401)
    }
    else next()
}

app.use('/dogs', verifyPassword)

app.get('/dogs', (req, res) => {
    console.log(req.requestTime())
    res.send('woof')
})

app.get('/admin', (req, res) => {
    throw new AppError('not admin', 403)
})

app.use((req, res) => {
    throw new AppError('not found', 404)
})

// app.use((err, req, res, next) => {
//     console.log('ERROR')
//     next(err) // calls default error handler 
// })

app.use((err, req, res, next) => {
    const { status = 500, message } = err;
    console.log(status, message);
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log('app running on port 3000')
})