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

const userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const User = mongoose.model('User', userSchema)
const Tweet = mongoose.model('Tweet', tweetSchema)

const reset = async () => {
    await User.deleteMany({})
    await Tweet.deleteMany({})
}

const makeFirstUserTweet = async () => {
    const user = new User({ username: 'chickenfan99', age: 61 })
    const tweet1 = new Tweet({ text: 'I love my chicken family', likes: 0 })
    tweet1.user = user
    await user.save()
    await tweet1.save()
}

const makeSecondTweet = async () => {
    const user = await User.findOne({ username: 'chickenfan99' })
    const tweet2 = new Tweet({ text: 'my chickens make noises', likes: 10 })
    tweet2.user = user
    await tweet2.save()
}

const findTweet = async () => {
    const t = await Tweet.find({}).populate('user', 'username') // only username field
    console.log(t)
}

// reset()
// makeFirstUserTweet()
// makeSecondTweet()
findTweet()
