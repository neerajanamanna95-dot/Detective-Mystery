function sendMessage(){

const input=document.getElementById("userMessage");

const chat=document.getElementById("chatBox");

const message=input.value.trim();

if(message==="") return;

chat.innerHTML += "<p><b>You:</b> "+message+"</p>";

let reply="";

if(message.toLowerCase().includes("clue")){

reply="You should inspect the knife and the fingerprint carefully.";

}

else if(message.toLowerCase().includes("john")){

reply="John Carter has an unusual alibi. Verify it.";

}

else if(message.toLowerCase().includes("help")){

reply="Collect every evidence before accusing anyone.";

}

else{

reply="I am still analyzing the case.";

}

chat.innerHTML += "<p><b>AI:</b> "+reply+"</p>";

input.value="";

chat.scrollTop=chat.scrollHeight;

}