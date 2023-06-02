document.querySelector('.tipMoney').addEventListener('click', () => {
    let elementMsg = document.querySelector('.msg');
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

});

function tipReset(){
    if(!clickButton){
        clickButton = true
    }
}
