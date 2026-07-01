const witnessStatements = {
1: "I saw a man wearing a black jacket enter the house around 10:45 PM.",
2: "I heard a loud argument, but I couldn't see anyone.",
3: "A nervous customer bought gloves and left in a hurry.",
4: "The victim received a strange phone call before dinner.",
5: "I dropped someone near the mansion at exactly 10:30 PM."
};

function talkWitness(id){

const result=document.getElementById("witnessResult");

result.innerHTML="<h3>Statement</h3><p>"+witnessStatements[id]+"</p>";

let evidence=JSON.parse(localStorage.getItem("evidence")) || [];

if(!evidence.includes("🎤 Witness Statement "+id)){

evidence.push("🎤 Witness Statement "+id);

localStorage.setItem("evidence",JSON.stringify(evidence));

}

}