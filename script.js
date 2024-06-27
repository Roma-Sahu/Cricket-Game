let scoreStr = localStorage.getItem('Score');
let score;
resetScore(scoreStr);
function resetScore(scoreStr) {
    score=scoreStr ? JSON.parse(scoreStr):{
        win:0,
        lost:0,
        tie:0,
    }
score.displayScore=function () {
    return `Score: won: ${score.win}, lost:${score.lost} ,tie:${score.tie}`;
}
showResult();
}
   
function generateComputerChoice() {
    let randomnumber=Math.random()*3;
    if(randomnumber>0 && randomnumber<=1){
      return 'Bat';
    }else if(randomnumber>1 && randomnumber<=2){
       return 'Ball';
    }else{
       return 'Stump'
    }
}
function getResult(Usermove,computermove) {
    let resultMsg;
if(Usermove==='Bat'){
    if(computermove==='Ball'){
        score.win++;
        return `You won`;
    }else if(computermove==='Bat'){
        score.tie++;
        return `it's a tie`;
    }else if(computermove==='Stump'){
        score.lost++;
        return `computer has won`;
    }
}else if(Usermove==='Ball'){
    if(computermove==='Ball'){
        score.tie++;
        return `it's a tie`;
        
    }else if(computermove==='Bat'){
        score.lost++;
        return `computer has won`;
    }else if(computermove==='Stump'){
        score.win++;
        return `You won`;
    }
}else{
    if(computermove==='Ball'){
        score.lost++;
        return `computer has won`;
    }else if(computermove==='Bat'){
        score.win++;
        return `You won`;
    }else if(computermove==='Stump'){
        score.tie++;
        return `it's a tie`;
    }

}
    }
function showResult(Usermove,computermove,result) {
    localStorage.setItem('Score', JSON.stringify(score));
    document.querySelector('#user-move').innerText=
      Usermove?`you have choosen ${Usermove}`:'';
    document.querySelector('#computer-move').innerText=
      computermove?`computer choice is  ${computermove}`:'';
   
    document.querySelector('#result').innerText=
       result ?result:'';
   
    document.querySelector('#score').innerText=score.displayScore();
    };
