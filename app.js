var scores, roundScore, actviePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {
        // 1. RANDOM NUMBER GENERATION
        var dice = Math.floor(Math.random() * 6) + 1;

        //2.DISPLAY RESULT 

        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';

        //3. update the round score IF the rolled number was NOT a 1
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + actviePlayer).textContent = roundScore;
        } else {

            //next player should come in to the picture
            nextPlayer();
        }


    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //adding the current scroe to global score
        scores[actviePlayer] += roundScore;

        // update the UI 
        document.querySelector('#score-' + actviePlayer).textContent = scores[actviePlayer];


        var input = document.querySelector('.final-score').nodeValue;
        var Winnerscore;

        // undefined, 0 ,"" or null are coerced to false
        // Anthing else is coereced to true 
        if (input) {
            Winnerscore = input;
        } else {
            Winnerscore = 100;
        }

        // CHECKING WHETHER THE PLAYER HAS WON THE GAME OR NOT.
        if (scores[actviePlayer] >= Winnerscore) {
            document.querySelector('#name-' + actviePlayer).textContent = 'Wow You are the Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + actviePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + actviePlayer + '-panel').classList.remove('active');
            gamePlaying = false;


        }


        else {
            //next player
            nextPlayer();

        }


    }
});

function nextPlayer() {


    actviePlayer === 0 ? actviePlayer = 1 : actviePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);



function init() {


    scores = [0, 0];
    roundScore = 0;
    actviePlayer = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 0';
    document.getElementById('name-1').textContent = 'PLayer 1';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.add('active');



}