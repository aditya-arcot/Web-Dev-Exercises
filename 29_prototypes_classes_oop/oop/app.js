// factory function
// function makeColor(r, g, b) {
//     const color = {}
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function () {
//         const { r, g, b } = this
//         return `rgb(${r},${g},${b})`
//     }
//     color.hex = function () {
//         const { r, g, b } = this
//         return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//     }
//     return color
// }
// const firstColor = makeColor(35, 300, 100);
// console.log(firstColor.hex());



// constructor
// function Color(r, g, b) {
//     this.r = r
//     this.g = g
//     this.b = b
// }
// Color.prototype.rgb = function () {
//     const { r, g, b } = this
//     return `rgb(${r},${g},${b})`
// }
// Color.prototype.hex = function () {
//     const { r, g, b } = this
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
// }
// Color.prototype.rgba = function (a = 1.0) {
//     const { r, g, b } = this
//     return `rgba(${r},${g},${b},${a})`
// }

// const color1 = new Color(10, 20, 30);
// console.log(color1.rgb());
// console.log(color1.hex());
// console.log(color1.rgba(0.5));



// classes
class Color {
    constructor(r, g, b, name) {
        this.r = r
        this.g = g
        this.b = b
        this.name = name
        this.calcHSL()
    }
    innerRGB() {
        const { r, g, b } = this
        return `${r},${g},${b}`
    }
    rgb() {
        return `rgb(${this.innerRGB()})`
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()},${a})`
    }
    hex() {
        const { r, g, b } = this
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    }
    hsl() {
        const { h, s, l } = this
        return `hsl(${h},${s}%,${l}%)`
    }
    fullSaturation() {
        const { h, l } = this
        return `hsl(${h},100%,${l}%)`
    }
    opposite() {
        const { h, s, l } = this
        const newH = (h + 180) % 360
        return `hsl(${newH},${s}%,${l}%)`
    }
    calcHSL() {
        let { r, g, b } = this
        r /= 255
        g /= 255
        b /= 255
        let cmin = Math.min(r, g, b), cmax = Math.max(r, g, b), delta = cmax - cmin, h = 0, s = 0, l = 0
        if (delta == 0) h = 0
        else if (cmax == r) h = ((g - b) / delta) % 6
        else if (cmax == g) h = (b - r) / delta + 2
        else h = (r - g) / delta + 4
        h = Math.round(h * 60)
        if (h < 0) h += 360
        l = (cmax + cmin) / 2
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1))
        s = +(s * 100).toFixed(1)
        l = +(l * 100).toFixed(1)
        this.h = h
        this.s = s
        this.l = l
    }
}
const color = new Color(230, 126, 34, 'carrot')
console.log(color.rgb())
console.log(color.hex())
console.log(color.hsl())
console.log(color.opposite())
console.log(color.fullSaturation())


class Animal {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    eat(){
        console.log(`${this.name} is eating`)
    }
}
class Cat extends Animal {
    constructor(name, age, lives){
        super(name, age)
        this.lives = lives
    }
    meow(){
        console.log('meow')
    }
}
class Dog extends Animal {
    bark(){
        console.log('woof')
    }
    eat(){
        console.log(`${this.name} scarfs his food`)
    }
}

const dog = new Dog('dog', 1)
console.log(dog.name)
dog.eat()
const cat = new Cat('cat', 10, 9)
console.log(cat.lives)
console.log(cat.name)
cat.meow()