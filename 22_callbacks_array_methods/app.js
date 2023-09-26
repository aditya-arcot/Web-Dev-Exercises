let arr1 = [712,100,60,200,350];


console.log('** forEach **');
arr1.forEach(console.log);


console.log('** map **');
const arr2 = arr1.map(function(n){
    return n*2;
})
console.log(arr2);


console.log('** map with 1-line arrow function **');
console.log(arr1.map(n => n * 2));


console.log('** filter **')
console.log(arr1.filter(n => n < 300));


console.log('** some **')
console.log(arr1.some(n => n > 100));
console.log(arr1.some(n => n > 1000));


console.log('** every **')
console.log(arr1.every(n => 0));
console.log(arr1.every(n => 100));


console.log('** reduce **')
console.log(arr1.reduce((prev, curr) => prev + curr, -1000))
console.log(arr1.reduce((prev, curr) => Math.min(prev, curr)))


console.log('** setTimeout **')
console.log("before");
setTimeout((n) => console.log(`callback - arg ${n}`), 50, "hello");
console.log("after");


console.log('** setInterval **')
/*const intervalId = setInterval(n => {
    console.log(Math.random());
    counter++;
    if (counter >= n){
        clearInterval(intervalId);
    }
}, 50, 5);*/
const intervalId = setInterval(() => console.log(Math.random()), 50);
setTimeout(clearInterval, 50*5, intervalId);