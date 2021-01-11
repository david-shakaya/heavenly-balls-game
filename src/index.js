import './styles.css'

const refs = {
    controls: document.querySelector('#tabs-1 [data-controls]'),
    panes: document.querySelector('[data-panes]'),
}
refs.controls.addEventListener('click', onControlsClick)


function onControlsClick(e) {
    if (e.target.nodeName !== 'A') {
        return
    }
    const itemActiveControl = document.querySelector('.controls__item--active');
    if (itemActiveControl) {
        itemActiveControl.classList.remove('controls__item--active')
    }
    e.target.classList.add('controls__item--active')
    const nameActiveElement = e.target.getAttribute('href')
    const curentPanes = refs.panes.querySelector(`${nameActiveElement}`);

    
    const itemActivePane = document.querySelector('.pane--active');
    if (itemActivePane) {
        itemActivePane.classList.remove('pane--active')
    }
    curentPanes.classList.add('pane--active')
}



// МАГАЗИН

const listFruts = document.querySelector('.list-item-fruts');
const basket = document.querySelector('.basket-js');
const shoppingList = document.querySelector('.shopping-list');
let count = 1

listFruts.addEventListener('click', onFrutsClick)

let frutArr = []
function onFrutsClick(e) {
    if (e.target.nodeName !== 'P') {
        return
    }
    const curentFrut = e.path[1].childNodes[1]

    const isAdded = frutArr.includes(curentFrut.textContent)
    frutArr.push(curentFrut.textContent)

    
    if (!isAdded) {
        shoppingList.insertAdjacentHTML('beforeend', `<li class="shopping-list-item"><span>${curentFrut.textContent}
         - Количество ${count} </span></li>`)
    }
    count+=1
    //  shoppingList.insertAdjacentHTML('beforeend', `<li class="shopping-list-item"><span>${curentFrut.textContent}
    //      - Количество ${count} </span></li>`)
    // const addedFrut = document.querySelector('.shopping-list-item'); 
    // addedFrut.insertAdjacentHTML('beforeend', `<p class="text-caunt"></p>`)
    
}
