document.querySelector('.tipMoney').addEventListener('click', () => {
    let elementMsg = document.querySelector('.msg');
    if(clickButton !== true){
        let moneyStorage = parseInt(localStorage.getItem('money'));
        if(moneyStorage >= 20){
            let calc = moneyStorage - 20;
            localStorage.setItem('money', calc);
            attMoney();
            tipReset();
            playerRespect(15);
        }else{
            elementMsg.innerHTML = `Você não possui cents o suficiente: Possui apenas ${moneyStorage} cents.`
        }
    }else{
        elementMsg.innerHTML = `Você já possui uma dica, use ela antes de comprar outra!`
    }
});

function tipReset(){
    if(!clickButton){
        clickButton = true
    }
}
