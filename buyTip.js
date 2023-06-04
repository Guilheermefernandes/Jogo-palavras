document.querySelector('.tipMoney').addEventListener('click', () => {
    let elementMsg = document.querySelector('.msg');
    if(clickButton !== true && withoutAttempts !== true){
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
        if(withoutAttempts){
            elementMsg.innerHTML = `Você não conseguiu completar a palavra!`;
        }else if(clickButton === true){
            elementMsg.innerHTML = `Você tem uma dica disponivel para usar! Use ela antes de comprar outra.`
        }
    }
});

function tipReset(){
    if(!clickButton){
        clickButton = true
    }
}
