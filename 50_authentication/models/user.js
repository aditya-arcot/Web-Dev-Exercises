const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.findAndValidate = async function (username, password) {
    const user = await this.findOne({ username })
    if (!user || !user.password) return false
    return await bcrypt.compare(password, user.password) ? user : false
}

const hashPassword =
    async (pw, saltRounds = 10) =>
        await bcrypt.hash(pw, saltRounds)

userSchema.pre('save', async function(next){
    if (this.isModified('password'))
        this.password = await hashPassword(this.password)
    next()
})

module.exports = mongoose.model('User', userSchema)