const secretCode="1947";

function checkCode(){

const code=document.getElementById("code").value;

const result=document.getElementById("result");

if(code===secretCode){

result.innerHTML=`
<h2 style="color:lime;">
✅ Safe Opened
</h2>

<p>
Secret File Collected
</p>
`;

let evidence=JSON.parse(localStorage.getItem("evidence"))||[];

if(!evidence.includes("📄 Secret File")){

evidence.push("📄 Secret File");

localStorage.setItem("evidence",JSON.stringify(evidence));

}

}

else{

result.innerHTML=`
<h2 style="color:red;">
❌ Wrong Code
</h2>

`;

}

}