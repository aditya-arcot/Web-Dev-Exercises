const franc = require('franc')
const langs = require('langs')
const colors = require('colors')

const input = process.argv[2]
const langCode = franc(input)

if (langCode === 'und') {
    console.log(colors.red("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!"));
} else {
    const lang = langs.where("3", langCode);
    if (lang) {
        console.log(colors.green(`Our best guess is: ${lang.name}`));
    } else {
        console.log(colors.red(`SORRY, COULDN'T FIND A LANGUAGE FOR CODE: ${langCode}`));
    }
}