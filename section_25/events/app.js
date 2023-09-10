const btn = document.querySelector('#btn');
btn.onclick = function(){
    console.log("button clicked");
}

function f(){
    console.log('mouse enter')
}
btn.onmouseenter = f;


const btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', () => console.log('clicked'))

