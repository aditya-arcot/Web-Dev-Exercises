const randInt = (max) => Math.floor(Math.random() * max);
const getRandColor = () => {
    const r = randInt(256);
    const g = randInt(256);
    const b = randInt(256);
    return `rgb(${r},${g},${b})`
}

function colorize(){
    this.backgroundColor = getRandColor();
    this.button.style.color = getRandColor();
}

const buttons = document.querySelectorAll('button');
for (let button of buttons){
    button.addEventListener('click', colorize)
}

const h1s = document.querySelectorAll('h1');
for (let h1 of h1s){
    h1.addEventListener('click', colorize)
}