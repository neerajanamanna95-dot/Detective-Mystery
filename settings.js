function saveSettings(){

const name=document.getElementById("playerName").value;

localStorage.setItem("detective_name",name);

document.getElementById("message").innerHTML=
"<h2>Settings Saved!</h2>";

}

function loadSettings(){

const name=localStorage.getItem("detective_name");

document.getElementById("playerName").value=name || "";

}

window.onload=loadSettings;