const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const Product = require('./models/product')

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

app.get(baseUrl, async (req, res) => {
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
})

app.get(path.join(baseUrl, 'new'), (req, res) => {
    res.render(path.join(viewsPath, 'new'),
        { title: 'New Product', baseUrl, categories })
})

app.post(baseUrl, async (req, res) => {
    const { name, price, category } = req.body
    const p = new Product({
        name: name,
        price: price,
        category: category
    })
    await p.save()
    res.redirect(path.join(baseUrl, p._id.toString()))
})

app.get(path.join(baseUrl, ':id'), async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render(path.join(viewsPath, 'details'),
        { title: 'Product Details', baseUrl, product })
})

app.get(path.join(baseUrl, ':id', 'edit'), async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render(path.join(viewsPath, 'edit'),
        { title: 'Edit Product', baseUrl, product, categories })
})

app.put(path.join(baseUrl, ':id'), async (req, res) => {
    const { id } = req.params
    const { name, price, category } = req.body
    await Product.findByIdAndUpdate(id,
        { name: name, price: price, category: category },
        { runValidators: true })
    res.redirect(path.join(baseUrl, id.toString()))
})

app.delete(path.join(baseUrl, ':id'), async (req, res) => {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    res.redirect(baseUrl)
})

app.listen(webPort, () => {
    console.log(`app listening on port ${webPort}`)
}) 