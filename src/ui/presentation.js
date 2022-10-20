const { ipcRenderer } = require('electron');

ipcRenderer.on('word_bind', (event, arg) => {
    document.getElementById("word-candidate").innerHTML = arg.candidate.toUpperCase();
});

ipcRenderer.on('spellingCheck', (_, arg) => {
        document.getElementById("correct-word").innerHTML = arg.correctWord.toUpperCase();
        document.getElementById("correct-word").style.backgroundColor = "#00ff00";
        switch(arg.result) {
            case "CORRECT":
                document.getElementById("word-candidate").style.backgroundColor = "#00ff00";
              break;
            case "WRONG":
                document.getElementById("word-candidate").style.backgroundColor = "#ff0000";
              break;
        }
    }
);

ipcRenderer.on('reset', (_, _) => {
document.getElementById("correct-word").innerHTML = "";
document.getElementById("word-candidate").innerHTML = "";
document.getElementById("word-candidate").style.backgroundColor = "";
document.getElementById("correct-word").style.backgroundColor = "";
});

function sound(){
var element = document.getElementById('sound');
element.parentNode.removeChild(element);
}
