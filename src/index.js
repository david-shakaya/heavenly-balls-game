import './styles.css'
import storage from './storage.js'
import store from './templates/store.hbs'
import cartTemplate from './templates/cart.hbs'


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


const count = (qwe) => {
  return qwe += 1;
  console.log(qwe);
}


// МАГАЗИН
// - 1) - Создаем обьект items: [] в котором пустой масив, туда будем пушить(добавлять товар).
const cart = {
  items: [],
  // - 2) - getItems() - Создаем метод(функцию) getItems(). Которая будет возвращать товары лежащие в масиве this.items
  getItems() {
    return this.items;
  },
  // - 3) - abb(product) - Создаем метод(функцию) abb(product). Которая при вызове будет добавлять(пушить) товар в this.items.
  abb(product) {
    for (const item of this.items) {
      if (product.name === item.name) {
        return (item.quantity += 1);
      }
    }

    product.quantity = 1;
    this.items.push(product);
  },
  // - 4) - remove(productName) - Создаем медот(функцию) которая удаляет продукт из корзины. Мы проверяем: productName === this.items[i].name(productName равно тому имени который уже есть в корзине товаров).
  // Если такое имя есть то удаляет его. this.items.splice(i, 1);
  remove(productName) {
    console.log(`Удаляем продукт ${productName}`);

    for (let i = 0; i < this.items.length; i += 1) {
      if (productName === this.items[i].name) {
        this.items.splice(i, 1);
      }
    }
  },
  // - 5) - clear() - Создаем медот(функцию) которая удаляет все товары с корзины. Тоесть перезаписываем this.items и удаляем все елементы масыва.
  clear() {
    this.items.splice(0); //либо  this.items = [] (Удаляем все элементы масива)
  },
  // - 6) - totalPrice()- Создаем медот(функцию) которая щитает общую сумму продуктов. На каждой итрации item.price умножаем на item.quantity
  //  и пльсуем к тоталу.
  totalPrice() {
    let totalPrice = 0;
    for (const item of this.items) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  },
};

const listFruts = document.querySelector('.list-item-fruts');
// const basket = document.querySelector('.basket-js');
// const shoppingList = document.querySelector('.shopping-list');
// const totalPrice = document.querySelector('.total-price-js');

console.log(storage);
const arr = listFruts.children
  


// Дом узлы
const ulRef = document.querySelector('.list-item-fruts');
const ulQuRef = document.querySelector('.total-price-js');
const divName = document.querySelector('.name-js');

// Добавление разметки
const markup = store(storage)
ulRef.insertAdjacentHTML('beforeend', markup)

let previosId = 0

ulRef.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'BUTTON' ) {
    return
  }
  const getIdCurrentElInDom = () => e.path[2].getAttribute('id')
  // console.log(getIdCurrentElInDom());

 const FindIdCurrentEl =()=> storage.find(el => {
   if (el.id === +getIdCurrentElInDom()) {
    return el
   }
 })
  
  

  cart.abb(FindIdCurrentEl());
 
  if (FindIdCurrentEl().quantity === 1) {

    const mar = cartTemplate(storage)
    divName.innerHTML = mar
    // ulQuRef.insertAdjacentHTML('beforeend', `<p>вы добаили ${FindIdCurrentEl().name}</p>`)
    // // divName.insertAdjacentHTML('beforeend', `<p>количество ${FindIdCurrentEl().quantity}</p>`)
    //  divName.innerHTML = `<p>количество ${FindIdCurrentEl().quantity}</p>`

  } else {
     const mar = cartTemplate(storage)
    divName.innerHTML = mar
    // divName.innerHTML = `<p>количество ${FindIdCurrentEl().quantity}</p>`
    //  divName.insertAdjacentHTML('beforeend', `<p>количество ${FindIdCurrentEl().quantity}</p>`)
  }




 
  // if (previosId === FindIdCurrentEl().id) {
  //   divName.innerHTML = `<p>количество ${FindIdCurrentEl().quantity}</p>`
   
  //   if (e) {
      
  //      divName.insertAdjacentHTML ('beforeend',`
  // <p>количество ${FindIdCurrentEl().quantity}</p>
  // ` )
  //   }
  // }
  // <h3>Общая сумма ${cart.totalPrice()} грн.</h3>

  console.log('previos'+previosId);
  if (e) {
    console.log( 'Предпосл'+cart.items.slice(-2)[0].id);
    console.log('Текущ' + FindIdCurrentEl().id);
    previosId =FindIdCurrentEl().id
  }


 
 


  console.log('вы добаили' + FindIdCurrentEl().name);

   cart.items.forEach(el => console.log(el))
  console.log('Общая сумма' + cart.totalPrice());


  
})



 

















// const listFruts = document.querySelector('.list-item-fruts');
// const basket = document.querySelector('.basket-js');
// const shoppingList = document.querySelector('.shopping-list');
// const totalPrice = document.querySelector('.total-price-js');



// let num = -1

// listFruts.addEventListener('click', onFrutsClick)
// let added = false
// let clicked = false
// function onFrutsClick(e) {

//   added = false
//   if (e.target.nodeName !== 'P') {
//     return
//   }

//   const curentFrut = e.path[1].childNodes[1].textContent
//   const curentPrice = e.path[1].childNodes[0].textContent.split(" ")[0]


//   const towar = cart.getItems().forEach(el => {
//     if (el.name === curentFrut) {
//       added = true
//     }
//   })

//   const markup = cart.abb({ name: `${curentFrut}`, price: `${+curentPrice.split(" ")[0]}` });
//   const fin = cart.items.find(el => {
//     if (curentFrut === el.name) {
//       return el
//     }
//     //        console.log(curentFrut);
//     //        console.log(el.name);
//   })
//   console.log(fin.quantity);

//   const arr = []

//   if (!added) {
//     num += 1
//     shoppingList.insertAdjacentHTML('beforeend', `<li class="shopping-list-item"><span>${curentFrut}Цена ${curentPrice} грн.
//         </span></li><div class="div-q" data-num="${num}"></div>`)
//     added = false

//   } else {

//     // Чуш полнейшая переписать с Шаблонизатором и будет счастье
//     const divQ = document.querySelectorAll('.div-q')
//     divQ.forEach(el => {
//       arr.push(el.getAttribute('data-num'))
//       // console.log('arr'+arr.indexOf(el.getAttribute('data-num')));
//       // console.log('Дата атрибут' + el.getAttribute('data-num'));
//       console.log(arr.indexOf(el.getAttribute('data-num')));

//       if (+el.getAttribute('data-num') ===  arr.indexOf(el.getAttribute('data-num'))) {
//         console.log('ddd'+ el.getAttribute('data-num'));
//         el.textContent = fin.quantity
        
//       }
//       // }
//     })
//     // divQ
//   }
//   totalPrice.innerHTML = `<p>- Всего к оплате ${cart.totalPrice()}грн </p>`




// }

