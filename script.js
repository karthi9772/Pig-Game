'use strict';
//This is the Total Score of each player
const Player0=document.querySelector('.player--0')
const Player1=document.querySelector('.player--1')

const Score0El=document.querySelector('#score--0')
const Score1El=document.querySelector('#score--1')
// const TotalScore1=document.querySelector('#score--0')
// const TotalScore2=document.querySelector('#score--1')

const NewGameBtn=document.querySelector('.btn--new')
const RollDiceBtn=document.querySelector('.btn--roll')
const HoldBtn=document.querySelector('.btn--hold')
const DiceImg=document.querySelector('.dice')

const CurrentScore0=document.querySelector('#current--0')
const CurrentScore1=document.querySelector('#current--1')

let totalScore=[0,0];

// CurrentScore0.textContent=0;
// CurrentScore1.textContent=0;
let CurrentScore=0;

let playing=true;

//Starting State
    Score0El.textContent="0"
    Score1El.textContent='0'
    DiceImg.classList.add('hidden')

   let active=0

//Switch PLayer Function 
const SwitchPlayer=function(){
    active=active===0 ? 1 : 0 ;
     document.getElementById(`current--0`).textContent=0
     document.getElementById(`current--1`).textContent=0
    // document.getElementById(`current--${active}`).textContent=0

     CurrentScore=0

     Player0.classList.toggle('player--active')
     Player1.classList.toggle('player--active')
}


    //If Roll DIce Button Clicked
RollDiceBtn.addEventListener('click',function(){
  
    if(playing){
    //display Dice
    let roll=Math.floor(Math.random()*6)+1
    DiceImg.classList.remove('hidden')
    DiceImg.src=(`dice-${roll}.png`)

    if(roll!==1){
    CurrentScore+=roll;
        // Current1El.textContent=CurrentScore;
    document.querySelector(`#current--${active}`).textContent=CurrentScore
    }else{
     console.log("Switching Player")
     
        SwitchPlayer();

    }}
})

HoldBtn.addEventListener('click',function(){
    if(playing){

    totalScore[active]+=CurrentScore;
    document.querySelector(`#score--${active}`).textContent=totalScore[active]
    if(totalScore[active]>=100){
        console.log(`player${active} won!`)
        document.querySelector(`.player--${active}`).classList.add('player--winner')
        // document.querySelector(`.player--${active}`).classList.remove('player--active')
        playing=false;
    }else{
        SwitchPlayer();
    }
    
} 

})

NewGameBtn.addEventListener('click',function(){
    console.log('BTN NEW CLICKED')
   
    playing=true;
    Score0El.textContent="0"
    Score1El.textContent='0'
    DiceImg.classList.add('hidden')
    totalScore=[0,0];
    DiceImg.classList.add('hidden')

    CurrentScore0.textContent=0;
    CurrentScore1.textContent=0;
    CurrentScore=0;
    document.querySelector(`.player--${active}`).classList.remove('player--winner')
    document.querySelector(`.player--0`).classList.add('player--active')
    document.querySelector(`.player--1`).classList.remove('player--active')
    
})
