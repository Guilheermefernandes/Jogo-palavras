// Standard value
let clickButton = true;

let button = document.querySelector('.tip');
button.addEventListener('click', tip);

function quantityReturn(element){

    let word = element.split('');
    let wordLetters = word.length;

    return wordLetters;
}

function calcWord(word){

    let lengthWord = word.length;
    let result = (70 * lengthWord) / 100;
    let convert = Math.round(result);
    return convert;

}

function tip(){

    if(!clickButton){
        return;
    }

    let divideLetters = wordSelect.split('');
    let calc = parseInt(calcWord(divideLetters));

    letters = quantityReturn(verificationKey);

    if(letters >= calc){
        clickButton = false;

        let array = [];
        let result = campCheck.filter((item, index) => {
            if(item == ''){
                array.push(index);
                return;
            }
        })

        let wordRandom = Math.floor(Math.random() * array.length);
        let chooseIndex = array[wordRandom];

        printTip(wordSelect[chooseIndex], chooseIndex)
        playerRespect(5);


    }else{
        hintError(`Você digitou apenas ${letters} ${ letters > 1 ? 'letras' : 'letra' }, precisa de ${calc} no mínimo!`);
    }

}

function printTip(letter, position){

    let elemenTip = document.querySelector('.tipText');
    if(position !== NaN && letter !== undefined){
        elemenTip.innerHTML = `Dica: A letra de posição ${position + 1} é: <strong style="text-decoration: underline;">" ${letter} "</strong>`;
    }else{
        elemenTip.innerHTML = `Você já finalizou a palavra! Não precisa de dica.`
    }

}

function hintError(msg){

    let elemenTip = document.querySelector('.tipText');
    elemenTip.innerHTML = msg;

}
