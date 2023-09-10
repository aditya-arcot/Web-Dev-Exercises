const randInt = (max) => Math.floor(Math.random() * max);
const getRandColor = () => {
    const r = randInt(256);
    const g = randInt(256);
    const b = randInt(256);
    return [`rgb(${r},${g},${b})`, r+b+g < 300]
}

const h1 = document.querySelector('h1');
document.querySelector('button').addEventListener('click', () => {
    const [colorStr, dark] = getRandColor();
    document.body.style.backgroundColor = colorStr;
    h1.innerText = colorStr;
    if (dark) h1.style.color = 'white';
    else h1.style.color = 'black';
});