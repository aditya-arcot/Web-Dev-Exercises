const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Product = require('./models/product')
const AppError = require('./AppError')

const mongoPort = 27017
const mongoDB = 'farmStand'

mongoose.connect(`mongodb://127.0.0.1:${mongoPort}/${mongoDB}`)
    .then(() => console.log('connected to mongo'))
    .catch((err) => {
        console.log('connection to mongo failed')
        console.log(err)
    })

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

const webPort = 3000
const baseUrl = '/products'
const viewsPath = 'products/'

const categories = ['fruit', 'vegetable', 'dairy']

// function wrapAsync(fn) {
//     return function (req, res, next) {
//         fn(req, res, next).catch(next)
//     }
// }

const wrapAsync = (fn) =>
    ((req, res, next) => 
        fn(req, res, next).catch(next))

app.get(baseUrl, wrapAsync(async (req, res, next) => {
    const { category } = req.query
    var products, headingStart
    // undefined is falsy
    if (category && categories.indexOf(category) > -1) {
        products = await Product.find({ category })
        headingStart = `${category.charAt(0).toUpperCase()}${category.slice(1)}`
    }
    else {
        products = await Product.find({})
        headingStart = 'All'
    }
    res.render(path.join(viewsPath, 'index'),
        { title: 'Products Index', headingStart, baseUrl, products })
}))

app.get(path.join(baseUrl, 'new'), (req, res, next) => {
    try {
        res.render(path.join(viewsPath, 'new'),
            { title: 'New Product', baseUrl, categories })
    } catch (e) {
        next(e)
    }
})

app.post(baseUrl, wrapAsync(async (req, res, next) => {
    try {
        const { name, price, category } = req.body
        const p = new Product({ name, price, category })
        await p.save()
        res.redirect(path.join(baseUrl, p._id.toString()))
    } catch (e) {
        next(e)
    }
}))

// const getProduct = async (id, handler) => {
//     try {
//         const product = await Product.findById(id)
//         if (!product) {
//             return handler(new AppError('product not found', 404))
//         }
//         return product
//     } catch (err) {
//         handler(new AppError(`${err.message}`, 400))
//     }
// }

app.get(path.join(baseUrl, ':id'), wrapAsync(async (req, res, next) => {
    const { id } = req.params
    const product = await Product.findById(id)
    if (!product) {
        throw new AppError('product not found', 404)
    }
    res.render(path.join(viewsPath, 'details'),
        { title: 'Product Details', baseUrl, product })
}))

app.get(path.join(baseUrl, ':id', 'edit'), wrapAsync(async (req, res, next) => {
    const { id } = req.params
    const product = await Product.findById(id)
    if (!product) {
        throw new AppError('product not found', 404)
    }
    res.render(path.join(viewsPath, 'edit'),
        { title: 'Edit Product', baseUrl, product, categories })
}))

app.put(path.join(baseUrl, ':id'), wrapAsync(async (req, res, next) => {
    const { id } = req.params
    const { name, price, category } = req.body
    await Product.findByIdAndUpdate(id,
        { name, price, category },
        { runValidators: true })
    res.redirect(path.join(baseUrl, id.toString()))
}))

app.delete(path.join(baseUrl, ':id'), wrapAsync(async (req, res) => {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    res.redirect(baseUrl)
}))

const handleValidationErr = err => {
    console.dir(err)
    return new AppError(`validation failed - ${err.message}`, 400)
}

app.use((err, req, res, next) => {
    console.log(err.name)
    // if (err.name === 'CastError')
    if (err.name === 'ValidationError')
        err = handleValidationErr(err)
    next(err)
})

app.use((err, req, res, next) => {
    const { status = 500, message } = err
    console.log(status, message)
    res.status(status).send(message)
})

app.listen(webPort, () => {
    console.log(`app listening on port ${webPort}`)
}) 