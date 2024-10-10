let userScore=0;
let compScore=0;


const boxes=document.querySelectorAll(".box");
const msg=document.querySelector("#msg");
const userScoregame=document.querySelector("#user-score");
const compScoregame=document.querySelector("#comp-score")

boxes.forEach((box) => {
    box.addEventListener("click",() =>
    {
        const userchoice=box.getAttribute("id");    
        playgame(userchoice);
    });
});

const drawgame= () =>{
   
    msg.innerText="It's a draw";
    msg.style.backgroundColor="grey";
}

const showUserwin = (userWin,userchoice,compchoice) =>{

    if(userWin){
   
    msg.innerText=`You won, Your ${userchoice} beats ${compchoice}`
    msg.style.backgroundColor="green";
    userScore++;
    userScoregame.innerText=userScore;

    }
    else{
       
        msg.innerText=`You lost,comp's ${compchoice} beats your ${userchoice}`
        msg.style.backgroundColor="red";
        compScore++;
        compScoregame.innerText=compScore;
    }


}


const gencompchoice= () => {
    const options=["stone","paper","scissors"];
    const randIndx=Math.floor(Math.random()*3);
  
    return options[randIndx];
}

const playgame=(userchoice)=>{

    const compchoice=gencompchoice();
    
    

    if(userchoice===compchoice){
        //draw game
        drawgame();
    }
    else{
        let userWin = true;

        if (userchoice === "stone"){
           userWin= compchoice === "scissors" ? true : false;
        }
        else if(userchoice === "paper"){
            userWin= compchoice === "scissors" ? false : true;
        }
        else if(userchoice === "scissors"){
            userWin= compchoice === "stone" ? false : true;
        }
        showUserwin(userWin,userchoice,compchoice);
    }
   

}