const { ipcRenderer } = require('electron');

function corrige(){
    let data = {candidate: document.getElementById("candidate-input").value, 
                word: document.getElementById("word-input").value};
    ipcRenderer.send('corrige', data);
}

function word_bind(){
    let data = {candidate: document.getElementById("candidate-input").value, 
                word: document.getElementById("word-input").value};
    ipcRenderer.send('wordsync', data);
}

function reset(){
    ipcRenderer.send('reset', true);
    document.getElementById("candidate-input").value = "";
    document.getElementById("word-input").value = "";
}
