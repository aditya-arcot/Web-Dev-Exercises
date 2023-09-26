const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/moviesDB')
    .then(() => console.log('connnected'))
    .catch((err) => {
        console.log('connection failed')
        console.log(err)
    })

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema)

// const amadeus = new Movie({
//     title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'
// })
// amadeus.save()

// Movie.insertMany([
//     { title: 'Amelie', year: 2001, score: 8.3, rating: 'R' },
//     { title: 'Alien', year: 1979, score: 8.1, rating: 'R' },
//     { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG' },
//     { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R' },
//     { title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13' }
// ]).then((data) => {
//     console.log('success')
//     console.log(data)
// }).catch((err) => {
//     console.log('errro')
//     console.log(err)
// })

// Movie.find()
//     .then((data) => console.log(data));
// Movie.find({ rating: 'PG-13' })
//     .then((data) => console.log(data));
// Movie.find({ year: { $gt: 2010 } })
//     .then((data) => console.log(data));

// Movie.updateOne({ title: 'Amadeus' }, { year: 1984 })
//     .then((res) => console.log(res))
// Movie.updateMany({ title: { $in: ['Amadeus', 'Stand By Me'] } }, { score: 10 })
//     .then((res) => console.log(res))

// Movie.findOneAndUpdate({ score: 7.5 }, { score: 7.8 })
//     .then(m => console.log(m))
// Movie.findOneAndUpdate({ score: 7 }, { score: 7.8 }, { new: true })
//     .then(m => console.log(m))

// Movie.deleteOne({ title: 'Amelie' })
//     .then(m => console.log(m))
// Movie.deleteMany({ year: { $gt: 1999 } })
//     .then(m => console.log(m))
// Movie.findOneAndDelete({ title: 'Alien' })
//     .then(m => console.log(m))