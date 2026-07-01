const realCriminal = "John Carter";

function solveCase(){

const suspect = document.getElementById("criminal").value;
const result = document.getElementById("result");

if(suspect === realCriminal){

result.innerHTML = `
<h2 style="color:lime;">🎉 CASE SOLVED</h2>
<p>You arrested the real criminal.</p>
`;

localStorage.setItem("game_result","Solved");

setTimeout(()=>{
window.location.href="ending.html";
},2000);

}else{

result.innerHTML = `
<h2 style="color:red;">❌ WRONG SUSPECT</h2>
<p>The criminal escaped.</p>
`;

localStorage.setItem("game_result","Failed");

setTimeout(()=>{
window.location.href="ending.html";
},2000);

}

}