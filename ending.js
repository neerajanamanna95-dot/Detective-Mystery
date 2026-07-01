window.onload=function(){

const status=document.getElementById("gameStatus");
const rank=document.getElementById("rank");
const summary=document.getElementById("summary");

const result=localStorage.getItem("game_result");

if(result==="Solved"){

status.innerHTML="🎉 Congratulations!";

rank.innerHTML="🏅 Detective Rank : MASTER";

summary.innerHTML="You solved the mystery and arrested the real criminal.";

}

else{

status.innerHTML="❌ Case Failed";

rank.innerHTML="🏅 Detective Rank : BEGINNER";

summary.innerHTML="The criminal escaped. Try again.";

}

}

function restartGame(){

localStorage.clear();

window.location.href="index.html";

}