attMoney();
function attMoney(){
    let valueStorage = localStorage.getItem('money');
    document.querySelector('.money span').innerHTML = `${ valueStorage !== null ? valueStorage : '0'}`;
}

function shoppingInTheMarket(n, value){

    let elementMsg = document.querySelector('.msg');
    let getValueStorage = localStorage.getItem('money');

    if(parseInt(getValueStorage) >= n && life === 1){
        let calc = getValueStorage - n;
        localStorage.setItem('money', calc);
        life += parseInt(value);
        attMoney();
        playerRespect(10);
    }else{
        console.log(getValueStorage);
        elementMsg.innerHTML = `Vcoê precisa estar com 1 de life: ${life} life | Você precisa de ${n} coins: ${getValueStorage === null ? '0' : getValueStorage} coins. `;
        setTimeout(() => {
            elementMsg.innerHTML = '';
        }, 4000);
    }

}


document.querySelectorAll('.life').forEach((item) => {
    item.addEventListener('click', (e) => {
        let element = document.querySelector('.unexpectedError');
        let elementClick = e.target
        let valueElement = elementClick.getAttribute('value');
        switch (valueElement){
            case '1':
                shoppingInTheMarket(4, valueElement);
                break
            case '2':
                shoppingInTheMarket(8, valueElement);
                break
            case '3':
                shoppingInTheMarket(12, valueElement);
                break
            case '4':
                shoppingInTheMarket(16, valueElement);
                break
            default:
                element.innerHTML = `Ocorreu um error Inesperado!`;
                break
        }
    })
});
