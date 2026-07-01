function saveNotes(){

const notes=document.getElementById("notes").value;

localStorage.setItem("detective_notes",notes);

alert("Notes Saved!");

}

function loadNotes(){

const notes=localStorage.getItem("detective_notes");

document.getElementById("notes").value=notes || "";

}

window.onload=loadNotes; 