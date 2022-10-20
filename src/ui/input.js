const { ipcRenderer } = require('electron');

function checkSpelling (correctWord, candidateInput) {
    return correctWord === candidateInput;
}

function onCheckSpelling() {
    let correctWord = document.getElementById("word-input").value.toLowerCase().trim();
    let candidateInput = document.getElementById("candidate-input").value.toLowerCase().trim();
    let result;
    if (checkSpelling(correctWord, candidateInput)){
        (new Audio("../../assets/correct.mp3")).play();
        result = "CORRECT";
    } else {
        (new Audio("../../assets/wrong.mp3")).play();
        result = "WRONG";
    }
    ipcRenderer.send('spellingCheck', {result: result,
                                       correctWord: correctWord});
}

function word_bind(){
    let data = {candidate: document.getElementById("candidate-input").value, 
                word: document.getElementById("word-input").value};
    ipcRenderer.send('wordsync', data);
}

function reset(){
    document.getElementById("candidate-input").value = "";
    document.getElementById("word-input").value = "";
    ipcRenderer.send('reset');
}
