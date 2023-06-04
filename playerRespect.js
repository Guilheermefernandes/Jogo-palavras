let value = 0;
getStorage();
function playerRespect(n){
    let storage = parseInt(localStorage.getItem('respect'));
    if(storage !== NaN){
        storage += n;
    }
    localStorage.setItem('respect', storage);
    playerVantage(storage);
    let element = document.querySelector('.ponteiro');
    element.style.left = `${storage >= 160 ? 160 : storage}px`;
}
function getStorage(){
    let element = document.querySelector('.ponteiro');  
    let storage = localStorage.getItem('respect');
    if(storage === null){
        localStorage.setItem('respect', value);
        element.style.left = `${storage >= 160 ? 160 : storage}px`; 
    }else{
        playerVantage(parseInt(storage));
        element.style.left = `${storage >= 160 ? 160 : storage}px`; 
    }
}
function showDataOnScreen(text){
    document.querySelector('.playerRespect').innerHTML = text;
}
function increaseRespect(n){
    let element = document.querySelector('.ponteiro');
    let storage = parseInt(localStorage.getItem('respect'));
    if(storage !== NaN && storage >= 5){
        if(storage >= 160){
            storage = 160;
        }
        storage -= n;
    }else{
        storage = 0;
    }
    localStorage.setItem('respect', storage);
    playerVantage(storage)
    element.style.left = `${storage}px`; 
}
function playerVantage(n){

    let element = document.querySelector('.unexpectedError');
    let verification = '';

    if( n < 55){
        verification = '1';
    }else if(n >= 55 && n < 110){
        verification = '2';
    }else if(n > 110){
        verification = '3';
    }

    switch (verification){
        case '1':
            showDataOnScreen(`Muito Bom!`);
            break
        case '2':
            showDataOnScreen(`Mediano!`);
            break
        case '3':
            showDataOnScreen(`Precisa Melhorar!`);
            break
            default:
                element.innerHTML = 'Ocorreu um error inesperado!';
    }

}
