function analyzeDNA(){

const result=document.getElementById("dnaResult");

result.innerHTML="<h2>Analyzing DNA...</h2>";

setTimeout(()=>{

result.innerHTML=`
<h2 style="color:lime;">
DNA Match Found
</h2>

<p>
Owner : John Carter
</p>
`;

let evidence=JSON.parse(localStorage.getItem("evidence"))||[];

if(!evidence.includes("🧬 DNA Report")){

evidence.push("🧬 DNA Report");

localStorage.setItem("evidence",JSON.stringify(evidence));

}

},3000);

}