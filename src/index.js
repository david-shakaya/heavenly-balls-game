
import '../src/styles.css'


const divGameAreaRef = document.querySelector('.wrapper-game-area');
const btnStartRef = document.querySelector('.menu-btn-start');
const btnStopRef =document.querySelector('.menu-btn-stop');
const spanPoints = document.querySelector('.header-text-points');
const spanTaimerRef = document.querySelector('.timer');
const spanRemainingTimeRef =document.querySelector('.header-text-time');
const ilListPlayersRef = document.querySelector('.list-players');
const bodyRef = document.querySelector('body');
const closeBatton = document.querySelector('.close-btn');
const formRef =()=> document.querySelector('.form-action');
const inputRef = () => document.querySelector('.input-js');



divGameAreaRef.insertAdjacentHTML('beforebegin', '<div class="box-red-js " ></div>');
divGameAreaRef.insertAdjacentHTML('beforebegin', '<div class="box-green-js " ></div>');
divGameAreaRef.insertAdjacentHTML('beforebegin', '<div class="box-blue-js " ></div>');
divGameAreaRef.insertAdjacentHTML('beforebegin', '<div class="box-purple-js " ></div>');
// const createTextPoints = ()=> divGameAreaRef.insertAdjacentHTML('beforebegin', '<span class="text-animation-js" >+2</span>');

const box = document.querySelector('.box-red-js');
const boxGreen = document.querySelector('.box-green-js');
const boxBlue = document.querySelector('.box-blue-js');
const boxPurple = document.querySelector('.box-purple-js');
const textAnimationRef = () => document.querySelector('.span-js'); //ищет класс

//Добавля в локал хран при повторном захлде
const nameUser = localStorage.getItem('nameUser');
const pointUser = localStorage.getItem('points');

ilListPlayersRef.insertAdjacentHTML('beforeend', `<li class="list-item-players">${nameUser}: ${pointUser} очков</li>`)


const randomNumber = () => Math.floor(Math.random() * 655);
/* padStart()
  * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
   */
function pad(value) {
    return String(value).padStart('2',0)
}

let delta = 0
let beta = 0
let zeta = 0
let kappa= 0
let timer = 0
let points = 0;
let remainingTime = 5
let idInterval = null

let startIsActive = null
let stopIsActive =null
// Рандомное местоположение
const defBox = () => box.style.transform = `translate(${delta = randomNumber()}px, ${402}px)`;
const defBoxGren = () => boxGreen.style.transform = `translate(${beta = randomNumber()}px, ${402}px)`;
const defBoxBlue = () => boxBlue.style.transform = `translate(${zeta = randomNumber()}px, ${402}px)`;
const defboxPurple = () => boxPurple.style.transform = `translate(${kappa = randomNumber()}px, ${402}px)`;
// const defBoxPurple


defBox()
defBoxGren()
defBoxBlue()
defboxPurple()




btnStartRef.addEventListener('click', startGame)
btnStopRef.addEventListener('click',stopGame)

function stopGame() {
    if (stopIsActive) {
        return
    }
    onOpenModal()
         defBox()
         box.classList.remove('move')
          defBoxGren()
        boxGreen.classList.remove('move-green') 
        defBoxBlue()
         boxBlue.classList.remove('move-blue') 
          defboxPurple()
         boxPurple.classList.remove('move-purple') 
    onCloseModal()
    remainingTime = 5
    spanRemainingTimeRef.textContent = pad(remainingTime)
    stopIsActive = true
}

function showSpan(e) {
      if (e) {
        textAnimationRef().classList.add('text-animation-js')
          let Y = e.clientY
          let X =e.clientX
          textAnimationRef().style.top = Y + 'px'
          textAnimationRef().style.left = X +'px' 
          textAnimationRef().textContent ='+1'
    }
    setTimeout(() => {
        textAnimationRef().classList.remove('text-animation-js')
        textAnimationRef().textContent =''
    }, 500);
    
}

function startGame(e) {

    if (startIsActive) {
        return
    }
    startIsActive = true
    stopIsActive = null
    remainingTime = 5
    spanRemainingTimeRef.textContent = pad(remainingTime)
    startTimer()
  
}

function removeClass(e) {
    showSpan(e)
    if (e) {
        console.log(e);
        countsPoints()
    }
    defBox() // Местоположение перед выездом
    

    box.classList.remove('move') 
    

}
function removeClassGreen(e) {
    showSpan(e)
    if (e) {
        console.log(e);
        countsPoints()
    }
    defBoxGren()
    boxGreen.classList.remove('move-green') 

}

function removeClassBlue(e) {
    showSpan(e)
    if (e) {
        console.log(e);
        countsPoints()
    }
    defBoxBlue()
    boxBlue.classList.remove('move-blue') 
}
// boxPurple
function removeClassPurple(e) {
    showSpan(e)
    if (e) {
        console.log(e);
        countsPoints()
    }
    defboxPurple()
    boxPurple.classList.remove('move-purple') 
}



function startTimer() {
         idInterval = setInterval(() => {
     if (remainingTime === 0) {
         onOpenModal()
         defBox()
         box.classList.remove('move')
          defBoxGren()
        boxGreen.classList.remove('move-green') 
        defBoxBlue()
         boxBlue.classList.remove('move-blue') 
          defboxPurple()
         boxPurple.classList.remove('move-purple') 
        return
    }
    timer +=1
    spanTaimerRef.textContent = pad(timer)

    remainingTime -=1 // оставшееся время
    spanRemainingTimeRef.textContent = pad(remainingTime)
             if (remainingTime <= 2) {
                //  spanRemainingTimeRef.classList.add('safely') 
                 spanRemainingTimeRef.classList.add('danger')       
                } else {
                    spanRemainingTimeRef.classList.remove('danger')
      }
             createAndRemyveBox()
             createAndRemyveGreenBox()
             createAndRemyveBlueBox()
             createAndRemyvePurpleBox()
   
    
}, 1000);
}

function countsPoints() {
    points += 1
    remainingTime += 1

    spanRemainingTimeRef.textContent = pad(remainingTime)
    spanPoints.textContent = points
}

function createAndRemyveBox() {


 if (timer === 1||timer === 4 || timer === 7 || timer === 10 || timer === 13||timer===16 || timer ===19 || timer===22 || timer===25 || timer===28) {
    box.classList.add('move')
     box.addEventListener('mousedown', removeClass)
     box.style.transform = `translate(${delta}px, ${-25}px)`;
    }
     if (timer ===3|| timer === 6 || timer === 9 || timer === 12||timer===15 || timer ===18 || timer===21 || timer===24 || timer===27 ||timer===30) {
         removeClass()   
         box.addEventListener('mousedown', removeClass)
         
        }
}
function createAndRemyveGreenBox() {
if (timer === 2||timer === 5 || timer === 8 || timer === 11 || timer === 14||timer===17 || timer ===20 || timer===23 || timer===26 ) {
    boxGreen.classList.add('move-green')
     boxGreen.addEventListener('mousedown', removeClassGreen)
    boxGreen.style.transform = `translate(${beta}px, ${-25}px)`; //Двигает зеленый бокс вверх

    }
     if ( timer ===4|| timer === 7|| timer === 10 || timer === 13||timer===16 || timer ===19 || timer===22 || timer===25 || timer===28) {
         removeClassGreen()   
    boxGreen.removeEventListener('mousedown', removeClassGreen)     
        }
}


function createAndRemyveBlueBox() {
if (timer === 3||timer === 5 || timer === 7 || timer === 9 || timer === 11||timer===13 || timer ===15 || timer===17 || timer===19||timer===21 || timer ===23 || timer===25 || timer===27|| timer===29 ) {
    boxBlue.classList.add('move-blue')
    boxBlue.addEventListener('mousedown', removeClassBlue)
    boxBlue.style.transform = `translate(${zeta}px, ${-25}px)`; //Двигает зеленый бокс вверх
    }
     if (timer === 4 || timer === 6|| timer === 8 || timer === 10||timer===12 || timer ===14 || timer===16 || timer===18 || timer===20 || timer ===22 || timer===24 || timer===26 || timer===28|| timer ===30) {
         removeClassBlue()   
         boxBlue.removeEventListener('mousedown', removeClassBlue)
        }
}

// ____________________________
function createAndRemyvePurpleBox() {
if (timer === 1||timer ===4 || timer === 7 || timer === 10 || timer === 13||timer===16 || timer ===19 || timer===22 || timer===25 || timer===28 ) {
    boxPurple.classList.add('move-purple')
    boxPurple.addEventListener('mousedown', removeClassPurple)
    boxPurple.style.transform = `translate(${kappa}px, ${-25}px)`; //Двигает зеленый бокс вверх
    }
     if (timer ===3|| timer === 6 || timer === 9 || timer === 12||timer===15 || timer ===18 || timer===21 || timer===24 || timer===27 ||timer===30) {
         removeClassPurple()   
         boxPurple.removeEventListener('mousedown', removeClassPurple)
        }
}


// Модалка 

// /*  ФУНКЦИИ */
// //Закрывает модалку при нажатии esc. На window вешаем слушатель keydown.
// // На место колбека передаем функцию onPressEscape которая и закрівает модалку.
function onOpenModal() {
    window.addEventListener('keydown', onPressEscape)
    closeBatton.addEventListener('click', onCloseModal)
    console.log(closeBatton);
    btnStartRef.removeEventListener('click', startGame)
    startIsActive = null
    bodyRef.classList.add('show-modal')
    clearInterval(idInterval);
    spanRemainingTimeRef.classList.remove('danger')
    
    console.log(spanPoints.textContent);
    findForm()
    
// Находит форму в Дом и добавляет слушатель 
  
}

function onCloseModal(e) {
    if (e) {
    closeBatton.removeEventListener('click', onPressEscape)
    }
   window.removeEventListener('keydown', onPressEscape)
   btnStartRef.addEventListener('click', startGame)
   bodyRef.classList.remove('show-modal')

   timer = 0
   spanTaimerRef.textContent = timer
   points =0
   spanPoints.textContent = points
}

function onPressEscape (event) {
    if (event.code === 'Escape') {  
        onCloseModal()
        console.log('df');
    }
}
  
function findForm() {
    formRef().addEventListener('submit', handleSubmit)
     
}
  

        function handleSubmit(e) {
            e.preventDefault();
            const inputName = inputRef().value
            const points = (spanPoints.textContent)
            if (inputName === '') {
                console.log('Неправильно!');
            } else {
            formRef().removeEventListener('submit', handleSubmit)
             formRef().reset()
               onCloseModal()
                console.log(`Спасибо ${inputName}`);
                saveLocalStorage(inputName,points)
                
    
            }
}

    function saveLocalStorage(inputName, points) { //сохраня в локал стораж
        localStorage.setItem('nameUser', inputName)
        localStorage.setItem('points', points)
        
    if (localStorage.getItem('nameUser')) {
        const nameUser = localStorage.getItem('nameUser');
        const pointUser = localStorage.getItem('points');
        addNameInTable(nameUser, pointUser)
        console.log(pointUser);
        console.log(nameUser);
    }
}

function addNameInTable(nameUser,points ) {
     
    ilListPlayersRef.insertAdjacentHTML('beforeend', `<li class="list-item-players">${nameUser}: ${points} очков</li>`)
}
