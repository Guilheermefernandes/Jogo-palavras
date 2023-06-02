function qs(e){
    return document.querySelector(e);
}
function all(e){
    return document.querySelectorAll(e);
}

let words = [
    {
        title: ' DE COMER',
        word: [
            'ARROZ', 'MANDIOCA', 'BACON', 'FEIJOADA', 'BATATA', 'CARNE', 'MILHO', 'AZEITONA', 'ALFACE', 'BANANA',
        ]
    },
    {
        title: 'ANIMAL',
        word: [
            'CAPIVARA', 'TATU', 'GALINHA', 'PERU', 'BODE', 'CARNEIRO', 'OVELHA', 'VACA', 'BOI', 'TOURO', 'CACHORRO', 'GATO', 'COBRA', 'ABELHA', 'ANACONDA', 'ANTA', 'ARANHA', 'ALCE', 'ANDORINHA', 'AVESTRUZ', 'BODE',
        ]
    },
    {
        title: 'PROFISSÃO',
        word: [
            'PROGRAMADOR', 'ECONOMIA', 'CIENTISTA', 'PROFESSOR', 'AGRONOMIA', 'BIOTECNOLOGIA', 'ECOLOGIA', 'GEOLOGIA', 'OCEANOGRAFIA', 'ZOOTECNIA', 'METEOROLOGIA', 'MEDICINA', 'QUIROPRAXIA', 'RADIOLOGIA', 'ODONTOLOGIA', 'ASTRONOMIA', 'ANTROPOLOGIA', 'ARQUEOLOGIA', 'FILOSOFIA', 'GEOGRAFIA', 'SOCIOLOGIA', 'TEOLOGIA', 'JORNALISMO'
        ]
    },
    {
        title: 'MARCA DE CARRO',
        word: [
            'FIAT', 'FORD', 'CHEVROLET', 'AUDI', 'BMW', 'ASTONMARTIN', 'BYD', 'CHRYSLER', 'DODGE', 'FERRARI', 'HONDA', 'HYUNDAI', 'JAGUAR', 'JEEP', 'KIA', 'LAMBORGHINI', 'LEXUS', 'MCLAREN', 'LIFAN', 'MASERATI', 'MINI', 'MITSUBISHI', 'NISSAN', 'PEUGEOT', 'PORSCHE', 'RAM', 'RENAULT', 'SUBARU', 'SUZUKI', 'TOYOTA', 'TRIUMPH', 'VOLVO', 'YAMAHA', 'VOLKSWAGEN', 'MERCEDES', 'SMART', 'ROLLSROYCE', 'JAC', 'BMWMOTORRAD'
        ]
    },
    {
        title: 'MARCA DE MOTO',
        word: [
            'HONDA', 'DUCATI', 'BMW', 'BULL', 'MOTORINO', 'KAWASAKI', 'KTM', 'TRIUMPH', 'YAMAHA', 'SUZUKI', 'TRAXX', 'WATTS', 'SHINERAY', 'MOTOCAR', 'MOTTU', 'BRP', 'AVELLOZ', 'BAJAJ', 'DAFRA', 'KYMCO'
        ]
    }
]

let wordsObjects = words.length;
let wordSelect = '';
let verificationKey = '';
let life = 0;
let campCheck = [];
let reponse = false;

document.querySelector('body').addEventListener('keyup', (e) => {

    let key = e.key;
    verificationKey += key;
    if(life > 0){
        verification(key.toLocaleUpperCase());
    }else{
        showDanger('Suas tentativas acabaram!');
        playerRespect(5);
        buttonRestart = true;
    }

});

startup();
for(let i in wordSelect.split('')){
    campCheck.push('');
}

function startup(){

    let randomLetter = generateWordToApply(wordsObjects);
    insertGraphics(randomLetter.word);
    insertTitle(randomLetter.title);
    
    wordSelect = randomLetter.word;
    lifePlayer(randomLetter.word);

}

function verification(key){

    let wordVerificarion = wordSelect.split('');

    let result = wordVerificarion.some((item) => {
        return item == key;
    }) 


    if(!reponse){
        if(result){
            for(let i in wordVerificarion){
                if(wordVerificarion[i] == key){
                    insertElement(i, key);
                }
            }
        }else{
            erroKey();
        }
    }
}
function insertTitle(title){
    document.querySelector('.title').innerHTML = title;
}
function insertElement(index, key){

    let elementCamp = document.querySelectorAll('.checkCamp');
    clearShowWordFound();
    let indexItem = elementCamp.item(index);
    
    if(indexItem.getAttribute('value') == key){
        showWordFound(`Essa letra já existe: ${key.toLocaleUpperCase()}`);
    }else{
        indexItem.setAttribute('value', key);
        campCheck[index] = key;
        indexItem.innerHTML = key;
        reponse = fieldCheck(); 
    }

    if(reponse){
        showWordFound(`Parabens você conseguiu!<br/> Palavra: <strong>" ${campCheck.join('')} "</strong>`);
        storageMoney(2);
        buttonRestart = true;
        increaseRespect(5);
    }

}

function fieldCheck(){

    let word = wordSelect.split('')
    let wordStr = word.join('');
    let wordAddedByUser = campCheck.join('');
    
    if(wordStr ===  wordAddedByUser){
        return true;
    }

    return false;

}

function insertGraphics(renderWord){

    let renderSlitWord = renderWord;
    let elementContainer = document.querySelector('.container');

    for(let i in renderSlitWord){
        let creatElement = document.createElement('div');
        creatElement.classList.add('square');
        creatElement.classList.add('checkCamp');
        elementContainer.appendChild(creatElement);
    }

}   

function generateWordToApply(numberObjects){

    let objectRandom = Math.floor(Math.random() * numberObjects);
    let objectSelect = words[objectRandom];

    let wordRandom = Math.floor(Math.random() * objectSelect.word.length);

    return {
        title: objectSelect.title,
        word: objectSelect.word[wordRandom]
    };

}
function storageMoney(n){
    let money = 0;
    let valueStorage = localStorage.getItem('money');
    if(valueStorage == null){
        localStorage.setItem('money', n);
    }else{
        let storage = localStorage.getItem('money')
        money = n + parseInt(storage);
        localStorage.setItem('money', money);
    }
}
function lifePlayer(wordLetter){
    let word = wordLetter.split('');
    life = Math.round(word.length * 1.2);
} 
function erroKey(){
    life = life -1;
}
function showWordFound(msg){

    let element = document.querySelector('.msg');
    element.innerHTML = msg;

}   
function clearShowWordFound(){

    document.querySelector('.msg').innerHTML = '';
    document.querySelector('.tipText').innerHTML = '';

}
function showDanger(msg){

    document.querySelector('.danger').innerHTML = msg;

    let dangerElement = document.querySelector('.danger');
    dangerElement.style.display = 'block';
    setInterval(() => {
        dangerElement.style.opacity = '1';
    }, 500);

}
function clearDanger(){

    let dangerElement = document.querySelector('.danger');
    dangerElement.style.display = 'none';
    
}
