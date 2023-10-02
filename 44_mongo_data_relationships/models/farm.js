const mongoose = require('mongoose')
const { Schema } = mongoose

const mongoPort = 27017
const mongoDB = 'relationships'

mongoose.connect(`mongodb://127.0.0.1:${mongoPort}/${mongoDB}`)
    .then(() => console.log('connected to mongo'))
    .catch((err) => {
        console.log('connection to mongo failed')
        console.log(err)
    })

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['spring', 'summer', 'fall', 'winter']
    }
})

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }]
})

const Product = mongoose.model('Product', productSchema)
const Farm = mongoose.model('Farm', farmSchema)

const reset = async () => {
    await Product.deleteMany({})
    await Farm.deleteMany({})
}

const createProducts = async () => {
    await Product.insertMany([
        { name: 'Melon', price: 4.99, season: 'summer' },
        { name: 'Orange', price: 5.99, season: 'summer' },
        { name: 'Lettuce', price: 3.99, season: 'spring' }
    ])
}

const createFarm = async () => {
    const farm = new Farm({ name: 'Full Belly Farms', city: 'Houston, TX' })
    const melon = await Product.findOne({ name: 'Melon' })
    farm.products.push(melon)
    await farm.save()
    console.log(farm)
}

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Full Belly Farms' })
    const orange = await Product.findOne({ name: 'Orange' })
    farm.products.push(orange)
    await farm.save()
    console.log(farm)
}

// reset()
// createProducts()
// createFarm()
// addProduct()

Farm.findOne({ name: 'Full Belly Farms' })
    .populate('products') // field to populate
    .then(console.log)