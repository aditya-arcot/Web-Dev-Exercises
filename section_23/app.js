// old way
function multiply(x,y){
    x = typeof x !== 'undefined' ? x : 1;
    y = typeof y !== 'undefined' ? y : 5;
    return x*y;
}

// new way
function multiply2(x=1, y=2){
    return x*y;
}

console.log(multiply())
console.log(multiply2())

function f2(a, b, ...nums){
    console.log(a);
    console.log(b);
    console.log(nums);
}
f2(5,1,123,124,124,125);