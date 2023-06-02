let buttonRestart = false;

document.querySelector('button').addEventListener('click', () => {
    if(!buttonRestart){
        let element = document.querySelector('.msg');
        element.innerHTML = `Terimine a palavra antes!`
        return;
    }else{
        restartGame();
        buttonRestart = false
    }
})
function restartGame(){
    document.querySelector('.container').innerHTML = '';
    document.querySelector('.tipText').innerHTML = '';
    clearDanger();
    startup();
    clearShowWordFound();
    attMoney()
    reponse = false;
    clickButton = true;
    verificationKey = '';
    campCheck = [];
    for(let i in wordSelect.split('')){
        campCheck.push('');
    };
}

