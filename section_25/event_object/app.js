window.addEventListener('click', (event) => 
    console.log(event)
)

window.addEventListener('keydown', (evt) => {
    switch (evt.code){
        case 'ArrowUp':
            console.log('up');
            break;
        case 'ArrowDown':
            console.log('down');
            break;
        case 'ArrowRight':
            console.log('right');
            break;
        case 'ArrowLeft':
            console.log('left');
            break;
        default:
            console.log('ignored')
    }    
})
