const mongoose = require('mongoose')

const mongoPort = 27017
const mongoDB = 'relationships'

mongoose.connect(`mongodb://127.0.0.1:${mongoPort}/${mongoDB}`)
    .then(() => console.log('connected to mongo'))
    .catch((err) => {
        console.log('connection to mongo failed')
        console.log(err)
    })

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            // don't create id automatically
            // _id: { _id: false }, 
            street: String,
            city: String,
            state: String,
            country: String
        }
    ]
})

const User = mongoose.model('User', userSchema)

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addresses.push({
        street: '123 Sesame St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    const res = await u.save()
    console.log(res)
}

const addAddress = async(id) => {
    const user = await User.findById(id)
    user.addresses.push({
        street: '99 3rd St.',
        city: 'New York',
        state: 'NY',
        country: 'USA'
    })
    const res = await user.save()
    console.log(res)
}

makeUser()