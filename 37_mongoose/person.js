const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/shopsDB')
    .then(() => console.log('connnected'))
    .catch((err) => {
        console.log('connection failed')
        console.log(err)
    })

const personSchema = mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName')
    .get(function () {
        return `${this.first} ${this.last}`
    })
    .set(function (name) {
        this.first = name.substr(0, name.indexOf(' '))
        this.last = name.substr(name.indexOf(' ') + 1)
    })

personSchema
    .pre('save', async function() {
        console.log('about to save to db') 
    })
    .post('save', async function() {
        console.log('saved to db') 
    })

const Person = mongoose.model('Person', personSchema)

const p1 = new Person({ first: 'Bob', last: 'Smith' })

p1.save()
console.log(p1.fullName)

p1.fullName = 'Bob Ross'
console.log(p1.fullName)