// Write your JS here.

window.addEventListener('DOMContentLoaded', () => {
    const moleHeads = document.querySelectorAll(".wgs__mole-head");
    let scoreBoard = document.querySelector(".header__score");
    let scoreNum = scoreBoard.innerHTML;
    moleHeads.forEach(moleHead =>{
        moleHead.addEventListener('click', hitMole);
    });
    const playGame = setInterval(()=>{
     const gameMove = popUpRandomMole();
     if(!gameMove || scoreNum === 8){
       clearInterval(playGame);
       moleHeads.forEach(moleHead =>{
           moleHead.removeEventListener('click',hitMole);
       });
     }
    }, 1000);

  });



  let scoreNum;
  function hitMole(e){
    let scoreBoard = document.querySelector(".header__score");
    let message = document.querySelector(".header__message");
    let moleCount = document.querySelector(".header__moles");
    moleNum = Number(moleCount.innerHTML);
    scoreNum = Number(scoreBoard.innerHTML);
    scoreNum += 1
    scoreBoard.innerHTML = scoreNum
    if(scoreNum === 8 && moleNum > 0){
      message.innerHTML = "YOU WIN!!";
      return false;
    }
    const moleHead = e.target;
    moleHead.classList.add("wgs__mole-head--hit");
  }

  let moleNum = 15;
  function popUpRandomMole(){
    let moleCount = document.querySelector(".header__moles");
    let message = document.querySelector(".header__message")
    let scoreBoard = document.querySelector(".header__score");
    scoreNum = Number(scoreBoard.innerHTML);
    moleNum = Number(moleCount.innerHTML);
    moleNum -= 1
    moleCount.innerHTML = moleNum;
    if(moleNum === 0 && scoreNum < 8){
      message.innerHTML = "GAME OVER";
      return false;
    }

    if (scoreNum === 8){
      message.innerHTML = "YOU WIN!!";
      return false;
    }
    const moleHeads = document.querySelectorAll('.wgs__mole-head:not(.wgs__mole-head--hit)');
    if(moleHeads.length === 0)return false;

    for (let moleHead of moleHeads) {
        moleHead.classList.add('wgs__mole-head--hidden');
    }
    const randomMole = Math.floor(Math.random() * moleHeads.length);
    moleHeads[randomMole].classList.remove('wgs__mole-head--hidden');
    return true;
  }


//   select all of the mole head elements on the page (there should be eight)
    // by maybe using document.querySelectorAll()
    // or document.getElementsByClassName() (those return lists of elements)
// calculate a random number between zero and seven, inclusive
// use that random number as the index of the list that you got for the mole head elements
// remove the --hidden Modifier CSS class from the mole head element
// set a timeout for one second to call another function named hideMole
    // with the mole head element that you already selected
