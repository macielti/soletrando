const { ipcRenderer } = require('electron');

ipcRenderer.on('word_bind', (event, arg) => {
document.getElementById("word-candidate").innerHTML = arg.candidate.toUpperCase();
});

ipcRenderer.on('corrige', (event, arg) => {
document.getElementById("correct-word").innerHTML = arg.word.toUpperCase();
document.getElementById("correct-word").style.backgroundColor = "#00ff00";
if(arg.candidate.toLowerCase().trim() === arg.word.toLowerCase().trim()){
    document.getElementById("word-candidate").style.backgroundColor = "#00ff00";
    (new Audio("../../assets/correct.mp3")).play();
}
else{
    document.getElementById("word-candidate").style.backgroundColor = "#ff0000";
    (new Audio("../../assets/wrong.mp3")).play();
}
});

ipcRenderer.on('reset', (event, arg) => {
document.getElementById("correct-word").innerHTML = "";
document.getElementById("word-candidate").innerHTML = "";
document.getElementById("word-candidate").style.backgroundColor = "";
document.getElementById("correct-word").style.backgroundColor = "";
});

function sound(){
var element = document.getElementById('sound');
element.parentNode.removeChild(element);
}
