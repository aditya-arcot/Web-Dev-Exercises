const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const Product = require('./models/product')
const Farm = require('./models/farm')

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

// FARM ROUTES
app.get('/farms', async (req, res) => {
    const farms = await Farm.find()
    res.render('farms/index', { title: 'Farms Index', farms })
})

app.get('/farms/new', (req, res) => {
    res.render('farms/new', { title: 'New Farm' })
})

app.get('/farms/:id', async (req, res) => {
    const farm = await Farm.findById(req.params.id)
        .populate('products')
    res.render('farms/details', { title: 'Farm Details', farm })
})

app.delete('/farms/:id', async (req, res) => {
    const { id } = req.params
    console.log('deleting')
    await Farm.findByIdAndDelete(id) // deleting products handled by middleware
    res.redirect('/farms')
})

app.post('/farms', async (req, res) => {
    const { name, city, email } = req.body
    const farm = new Farm({ name, city, email })
    await farm.save()
    res.redirect('/farms')
})

app.get('/farms/:id/products/new', async (req, res) => {
    const { id } = req.params
    const farm = await Farm.findById(id)
    res.render('products/new', { title: 'New Linked Product', categories, farm })
})

app.post('/farms/:id/products', async (req, res) => {
    const { id } = req.params
    const farm = await Farm.findById(id)

    const { name, price, category } = req.body
    const p = new Product({
        name: name,
        price: price,
        category: category
    })

    p.farm = farm
    farm.products.push(p)

    await p.save()
    await farm.save()

    res.redirect(`/farms/${id}`)
})


// PRODUCT ROUTES
const categories = ['fruit', 'vegetable', 'dairy']

app.get('/products', async (req, res) => {
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
    res.render('products/index',
        { title: 'Products Index', headingStart, products })
})

app.get('/products/new', (req, res) => {
    res.render('products/new',
        { title: 'New Product', categories })
})

app.post('/products', async (req, res) => {
    const { name, price, category } = req.body
    const p = new Product({
        name: name,
        price: price,
        category: category
    })
    await p.save()
    res.redirect(`/products/${p._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
        .populate('farm', 'name')
    res.render('products/details',
        { title: 'Product Details', product })
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id)
    res.render('products/edit',
        { title: 'Edit Product', product, categories })
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params
    const { name, price, category } = req.body
    await Product.findByIdAndUpdate(id,
        { name: name, price: price, category: category },
        { runValidators: true })
    res.redirect(`/products/${id}`)
})

app.delete('/products/:id', async (req, res) => {
    const { id } = req.params
    await Product.findByIdAndDelete(id)
    res.redirect('/products')
})

app.listen(webPort, () => {
    console.log(`app listening on port ${webPort}`)
}) 