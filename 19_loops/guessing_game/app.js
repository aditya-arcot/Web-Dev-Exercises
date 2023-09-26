let maximum = 0;
while (true){
    maximum = parseInt(prompt('Enter a positive number'));
    if (maximum && maximum > 0)
    {
        console.log(`max: ${maximum}`);
        break;
    }
}

const target = Math.floor(Math.random() * maximum) + 1;
console.log(`target: ${target}`);

let guess = 0;
let attempts = 0;
while (true){
    attempts++;
    guess = prompt('Enter a guess');
    if (guess === 'q')
    {
        alert('Game Quit!');
        break;
    }
    guess = parseInt(guess);
    console.log(`guess ${attempts}: ${guess}`);
    if (guess)
    {
        if (guess == target)
        {
            alert(`Correct! ${attempts} guesses`);
            break;
        }
        else if (guess < target) alert('Too low!');
        else alert('Too high!');
    }
    else alert('Invalid input!')
}