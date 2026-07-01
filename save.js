function saveGame(){

const gameData={

currentPage:window.location.pathname.split("/").pop(),

evidence:JSON.parse(localStorage.getItem("evidence")) || [],

notes:localStorage.getItem("detective_notes") || "",

result:localStorage.getItem("game_result") || "",

time:new Date().toLocaleString()

};

localStorage.setItem("detective_save",JSON.stringify(gameData));

alert("Game Saved Successfully!");

}

function continueGame(){

const save=JSON.parse(localStorage.getItem("detective_save"));

if(!save){

alert("No Saved Game Found");

return;

}

window.location.href=save.currentPage;

}