async function askAI(){

const input=document.getElementById("question");

const chat=document.getElementById("chatBox");

const question=input.value;

if(question=="") return;

chat.innerHTML+="<p><b>You:</b> "+question+"</p>";

/*
এখানে পরে Gemini API কল করা হবে।
এখন ডেমো উত্তর দেখানো হচ্ছে।
*/

const reply="I don't remember everything about last night...";

chat.innerHTML+="<p><b>Suspect:</b> "+reply+"</p>";

input.value="";

}