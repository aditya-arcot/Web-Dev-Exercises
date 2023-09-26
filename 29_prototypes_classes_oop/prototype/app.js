String.prototype.yell = function () {
    return this.toUpperCase()
}

const str = 'abc'
console.log(str)
console.log(str.yell())

Array.prototype.pop = function() {
    return 'overridden'
}
console.log([0,1,2].pop())