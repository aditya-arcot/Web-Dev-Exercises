const math = require('./math')
console.log(math.square(2))

const cats = require('./shelter')
console.log(cats)

const jokes = require('./jokes')
jokes.getJoke()
    .then((joke) => console.log(joke))
    .catch((error) => console.error(error));
