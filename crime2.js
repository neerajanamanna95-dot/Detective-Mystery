let found=[];

function findClue(item){

if(found.includes(item)){

alert("Already Checked");

return;

}

found.push(item);

let evidence=JSON.parse(localStorage.getItem("evidence"))||[];

if(!evidence.includes(item)){

evidence.push(item);

localStorage.setItem("evidence",JSON.stringify(evidence));

}

alert(item+" Found!");

}

function toggleLight(){

document.body.classList.toggle("light");

}