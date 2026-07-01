let interval;

function playCamera(){

const suspect=document.getElementById("suspect");

interval=setInterval(()=>{

suspect.style.left=Math.random()*700+"px";

suspect.style.top=Math.random()*250+"px";

},500);

}

function pauseCamera(){

clearInterval(interval);

}

function identifySuspect(){

const result=document.getElementById("cameraResult");

result.innerHTML=`
<h2 style="color:lime;">
✅ Suspect Identified
</h2>

<p>
Person Seen Leaving Crime Scene at 11:42 PM
</p>
`;

let evidence=JSON.parse(localStorage.getItem("evidence"))||[];

if(!evidence.includes("📹 CCTV Footage")){

evidence.push("📹 CCTV Footage");

localStorage.setItem("evidence",JSON.stringify(evidence));

}

}