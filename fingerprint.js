function scanFingerprint(){

const print=document.getElementById("fingerprint");
const result=document.getElementById("scanResult");

print.style.transform="scale(1.2)";
print.style.opacity="0.5";

setTimeout(()=>{

print.style.transform="scale(1)";
print.style.opacity="1";

const match=Math.random()>0.5;

if(match){

result.innerHTML="<h2 style='color:lime;'>✅ Match Found</h2>";

let evidence=JSON.parse(localStorage.getItem("evidence")) || [];

if(!evidence.includes("🖐 Fingerprint Match")){

evidence.push("🖐 Fingerprint Match");

localStorage.setItem("evidence",JSON.stringify(evidence));

}

}else{

result.innerHTML="<h2 style='color:red;'>❌ No Match Found</h2>";

}

},2000);

}