// install using NPM
const jokes = require('give-me-a-joke')
const colors = require('colors')

const getJoke = () => {
    return new Promise((resolve, reject) => {
        jokes.getRandomDadJoke((joke) => {
            if (joke) resolve(joke.rainbow);
            else reject(new Error('Failed to retrieve a joke.'));
        });
    });
};
module.exports.getJoke = getJoke
