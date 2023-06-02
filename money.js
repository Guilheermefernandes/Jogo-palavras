attMoney();
function attMoney(){
    let valueStorage = localStorage.getItem('money');
    document.querySelector('.money span').innerHTML = `${ valueStorage !== null ? valueStorage : '0'}`;
}

function shoppingInTheMarket(n, value){

    let elementMsg = document.querySelector('.msg');
    let getValueStorage = parseInt(localStorage.getItem('money'));
    if(getValueStorage >= n){
        let calc = getValueStorage - n;
        localStorage.setItem('money', calc);
        life += parseInt(value);
        attMoney();
        playerRespect(10);
    }else{
        elementMsg.innerHTML = `Você não possui cents o suficiente! Tem apenas ${getValueStorage} cents.`;
        setTimeout(() => {
            elementMsg.innerHTML = '';
        }, 4000)
        
    }

}

document.querySelectorAll('.life').forEach((item) => {
    item.addEventListener('click', (e) => {
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
                break
        }
    })
});
