let score = JSON.parse(localStorage.getItem('score'))||
{
  wins:0,
  Losses:0,
  Ties:0
};

updateScoreElement();

function playerGame(playerMove){
const computerMove = pickComputerMove();
let result = '';
    if (playerMove ==='Rock'){
      if(computerMove === 'Rock')
      {
        result = 'Tie';
      }else if (computerMove === 'Paper')
      {
        result = 'you Lose';
      }else if (computerMove === 'Scissors')
      {
        result = 'you Win';
      }
    }else if(playerMove==='Paper'){
            if(computerMove === 'Rock')
        {
          result = 'you Win';
        }else if (computerMove === 'Paper')
        {
          result = 'Tie';
        }else if (computerMove === 'Scissors')
        {
          result = 'you Lose';
        }
    }else if(playerMove === 'Scissors'){
            if(computerMove === 'Rock')
        {
          result = 'you Lose';
        }else if (computerMove === 'Paper')
        {
          result = 'you Win';
        }else if (computerMove === 'Scissors')
        {
          result = 'Tie';
        }
    }
   
  if(result === 'you Win'){
    score.wins += 1;

  }else if(result === 'you Lose'){
    score.Losses +=1;
  }else if (result === 'Tie'){
    score.Ties +=1;
  }

  localStorage.setItem('score',JSON.stringify(score));

  updateScoreElement();
   
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-move').innerHTML = `You
      <img class="move-icon" src="images/${playerMove}-emoji.png">
      <img  class="move-icon" src="images/${computerMove}-emoji.png">
      Computer`;


   
}
  function updateScoreElement(){
    document.querySelector('.js-score')
    .innerHTML = `Wins:${score.wins},Losses:${score.Losses},Ties:${score.Ties}`;
  }
  function pickComputerMove(){

      const randomNumber=Math.random();
      let computerMove='';

      if(randomNumber >= 0 && randomNumber <1/3)
      {
        computerMove = 'Rock';
      }else if(randomNumber >=1/3 && randomNumber <2/3)
      {
      computerMove = 'Paper';
      }else if (randomNumber >=2/3 && randomNumber <1) 
      {
        computerMove = 'Scissors';
      }
      return computerMove;
 

}
