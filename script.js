function startGame(){
window.location="office.html";
}
// Evidence System

let evidence = JSON.parse(localStorage.getItem("evidence")) || [];

function collect(item){

if(!evidence.includes(item)){

evidence.push(item);

localStorage.setItem("evidence",JSON.stringify(evidence));

alert(item+" Collected!");

}

}

function loadEvidence(){

const board=document.getElementById("evidenceBoard");

if(!board) return;

board.innerHTML="";

if(evidence.length===0){

board.innerHTML="<h3>No Evidence Found</h3>";

return;

}

evidence.forEach(item=>{

board.innerHTML+=`
<div class="card">
${item}
</div>
`;

});

}

window.onload=loadEvidence;
function talk(name){

let message="";

switch(name){

case "John Carter":

message="I was at home last night.";

break;

case "Emma Wilson":

message="I was working in the hospital.";

break;

case "David Brown":

message="I don't know anything about the murder.";

break;

}

alert(name+"\n\n"+message);

}// Inventory System

function loadInventory(){

    const inventory=document.getElementById("inventoryList");

    if(!inventory) return;

    inventory.innerHTML="";

    const items=JSON.parse(localStorage.getItem("evidence")) || [];

    if(items.length===0){

        inventory.innerHTML="<h2>Inventory Empty</h2>";
        return;

    }

    items.forEach(item=>{

        inventory.innerHTML+=`
        <div class="card">
            ${item}
        </div>
        `;

    });

}

// আগের window.onload ওভাররাইট না করে নতুন listener ব্যবহার করা ভালো
window.addEventListener("load", () => {
    loadEvidence();
    loadInventory();
});
window.addEventListener("load",()=>{

const welcome=document.getElementById("welcome");

if(welcome){

const name=localStorage.getItem("detective_name");

if(name){

welcome.innerHTML="Welcome Detective "+name;

}

}

});