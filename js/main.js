let player1 = ''
let player2 = ''
const allImages = document.querySelectorAll('img');

// returns rock, paper, or scissors as randomly as possible
const shoot = () => {
    let random = Math.random()
    let result = ''
    if(random <= .33){
        result = 'rock'
    }else if(random <= .67){
        result = 'paper'
    }else{
        result = 'scissors'
    }
    document.getElementById('opp').innerText = result
    return result;
};

// clears variables and display 
const reset = () =>{
    player2 = ''
    allImages.forEach(img => {
        img.classList.remove('selected')
    });
    player1 = ''
    document.getElementById('you').innerText = ''
    document.getElementById('opp').innerText = ''
    document.getElementById('result').innerText = ''
    document.getElementById('shoot').classList.remove('hidden');
    document.getElementById('reload').classList.add('hidden');
}

// display the result
const announce = () => {
    if(player1 === player2){
        document.getElementById('result').innerText = 'Tie. Play again?'
    }else if(player1 === 'rock' && player2 === 'scissors' || player1 === 'scissors' && player2 === 'paper' || player1 === 'paper' && player2 === 'rock'){
        document.getElementById('result').innerText = 'Let\'s goooo! You win.'
    }else{
        document.getElementById('result').innerText = 'Well, you can\'t win them all.'
    }
}

// calls for opponent's shot if selection 
const game = () => {
    if (player1) {
        player2 = shoot();
        console.log(player1, player2)
        document.getElementById('opp').innerText = player2

        //compare player1 to player 2 - who won?
        announce();
        //changes button from 'shoot' to 'reload'
        document.getElementById('shoot').classList.add('hidden');
        document.getElementById('reload').classList.remove('hidden');
    }else{
        alert(`You're firing blanks. Reload and choose rock, paper, or scissors..`)
    }
  };

// Click event to select RPS
document.addEventListener('click', (e) => {
    // clear previous selection
    if(e.target.tagName === 'IMG'){
        allImages.forEach(img => {
            img.classList.remove('selected')
    });
    // set player's choice by adding selection indicator
    e.target.classList.add('selected');
    player1 = e.target.id
    document.getElementById('you').innerText = player1
    }
});


