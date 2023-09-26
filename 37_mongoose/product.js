const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/shopsDB')
    .then(() => console.log('connnected'))
    .catch((err) => {
        console.log('connection failed')
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    price: {
        type: Number,
        min: [0, 'price must be positive']
    },
    isOnSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
})

productSchema.methods.info = function () {
    console.log(`${this.name}`)
    console.log(`${this.price}`)
}
productSchema.methods.toggleOnSale = function () {
    this.isOnSale = !this.isOnSale
    return this.save()
}
productSchema.statics.fireSale = function () {
    return this.updateMany({}, { isOnSale: true })
}

const Product = mongoose.model('Product', productSchema)

const bike = new Product({
    name: 'Bike', price: 599, categories: ['Cycling', 'Safety']
})
// bike.save()
//     .then(data => console.log('success', data))
//     .catch(err => console.log('error', err))

const findBike = async () => {
    const p = await Product.findOne({ name: 'Bike' }).exec()
    p.info()
    await p.toggleOnSale()
    console.log(p)
}
findBike()

Product.fireSale().then(res => console.log(res))
