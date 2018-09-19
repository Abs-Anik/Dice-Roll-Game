var scores,roundScore,activePlayer,dice,gamePlaying,lastDice1,lastDice2;
inIt();
//dice = Math.floor(Math.random() * 6) + 1;
//document.querySelector('#current-'+activePlayer).textContent = dice;
//document.querySelector('#current-'+activePlayer).innerHTML ='<em>'+dice+'</em>';
//var x = document.querySelector('#score-'+activePlayer).textContent;
//console.log(x);
//Roll Dice
document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gamePlaying){
       //Random Number
        var dice1  = Math.floor(Math.random() * 6) + 1;
        var dice2  = Math.floor(Math.random() * 6) + 1;
       //Display Dice
       // var diceDom =  document.querySelector('.dice');
        //document.querySelector('.dice-1').style.display = 'block';
        //document.querySelector('.dice-2').style.display = 'block';
        displayBlock();
        document.querySelector('#dice-1').src = 'dice-'+dice1+'.png';
        document.querySelector('#dice-2').src = 'dice-'+dice2+'.png';
        
        //Update the round score IF the rolled number was not a 1
        /*
         if(dice1 !== 1 && dice2 !== 1){
            roundScore += dice1 + dice2;
            //roundScore = roundScore + dice;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
            }else{
       
            nextPlayer();
            }
            */
        
        if((dice1 === 6 && lastDice1 === 6) && (dice2 === 6 && lastDice2 === 6)) {
            scores[activePlayer] = 0;
            document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }else {
            if(dice1 !== 1 && dice2 !==1){
            roundScore += dice1 + dice2;
            //roundScore = roundScore + dice;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
            }else{
       
            nextPlayer();
            }
           }
        lastDice1 = dice1;
        lastDice2 = dice2;
       
     
    }
    
});
//Hold Button
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        //Add Current Score to Global Score
        scores[activePlayer] += roundScore;
        //scores[activePlayer] = scores[activePlayer] + roundScore;
   
        //Update The UI
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
        //Cheak if the player won the game
        var input,winningScore;
        input = document.querySelector('.final-score').value;
        if(input){
            winningScore = input;
        }else{
            winningScore = 25;
        }
        if(scores[activePlayer] >= winningScore){
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!!';
        //document.querySelector('.dice').style.display = 'none';
        //document.querySelector('#dice-1').style.display = 'none';
        //document.querySelector('#dice-2').style.display = 'none';
        displayNone();
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
        }else{
        //Next player
        nextPlayer();
        }
    
     
    }
  
});
//DRY function dont repeat yorself
function nextPlayer(){
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0'; 
        document.getElementById('current-1').textContent = '0';
        
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        //document.querySelector('.dice').style.display = 'none';
       //document.querySelector('#dice-1').style.display = 'none';
       //document.querySelector('#dice-2').style.display = 'none';
       displayNone();
}

document.querySelector('.btn-new').addEventListener('click',inIt);

function inIt(){
scores = [0,0];
roundScore = 0;
activePlayer = 0;
gamePlaying = true;
//document.querySelector('.dice').style.display = 'none';
//document.querySelector('#dice-1').style.display = 'none';
//document.querySelector('#dice-2').style.display = 'none';
displayNone();
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}
function displayBlock(){
    document.querySelector('#dice-1').style.display = 'block';
    document.querySelector('#dice-2').style.display = 'block';
}
function displayNone(){
    document.querySelector('#dice-1').style.display = 'none';
    document.querySelector('#dice-2').style.display = 'none';
}


