// selecting

const images = document.getElementsByTagName('img');
for (let img of images){
    console.log(img.src);
}

const squares = document.getElementsByClassName('square');
for (let square of squares){
    console.log(square);
}

console.log(document.querySelector('a[title="Java"]'));

console.log(document.querySelectorAll('p a'));


// manipulating

const allLinks = document.querySelectorAll('a');
for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

const h2 = document.querySelector('h2');
h2.classList.toggle('purple');
h2.classList.toggle('border');

const new_h3 = document.createElement('h3');
new_h3.innerText = 'This is a new h3';
document.body.appendChild(new_h3);
//document.body.append(new_h3);