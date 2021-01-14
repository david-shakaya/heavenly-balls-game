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


const count = (qwe) => {
   return qwe += 1;
    console.log(qwe);
} 


// МАГАЗИН
// const cart = [
//     { id: 1, },
//     {id: 2},
//     {id: 3},
//     {id: 4},
//     {id: 5},
//     {id: 6},
// ]

// cart.forEach(element => {
//     if(element.id === )
// });

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

// console.table(cart.getItems());

// console.table(cart.getItems());

// cart.abb({ name: '🍇', price: 5 });
// cart.abb({ name: '🍎', price: 10 });
// cart.abb({ name: '🍎', price: 10 });
// cart.abb({ name: '🍍', price: 20 });
// cart.remove('🍇');


// console.table(cart.getItems());

// // console.log('Oчистить козину');
// // cart.clear();

// console.table(cart.getItems());
// console.log('Oбщая сумма товаров:', cart.totalPrice(), 'грн.');


const listFruts = document.querySelector('.list-item-fruts');
const basket = document.querySelector('.basket-js');
const shoppingList = document.querySelector('.shopping-list');
const totalPrice =document.querySelector('.total-price-js');




listFruts.addEventListener('click', onFrutsClick)
let added =false
let clicked = false
function onFrutsClick(e) {
    added = false
    if (e.target.nodeName !== 'P') {
        return
    }
    
    const curentFrut = e.path[1].childNodes[1].textContent
    const curentPrice = e.path[1].childNodes[0].textContent.split(" ")[0]
   
//     const quantityMarkup =document.querySelector('.quantity');
//    let curentQuantity = cart.getItems().find(el => {
//         if(el.name === curentFrut)
//       return el.quantity   
//    })
   
    
    
    // console.log(curentQuantity);

    const towar = cart.getItems().forEach(el => {
                if (el.name === curentFrut) {
        added = true
    }
   })
 
    const markup = cart.abb({ name: `${curentFrut}`, price: `${+curentPrice.split(" ")[0]}` });
    
    
    if (!added) {
        shoppingList.insertAdjacentHTML('beforeend', `<li class="shopping-list-item"><span>${curentFrut}Цена ${curentPrice} грн.
        </span></li>`)
        added = false
        console.log(added);
    }
    totalPrice.innerHTML = `<p>- Всего к оплате ${cart.totalPrice()}грн </p>`

    
    // console.log(cart.totalPrice());

    // const isAdded = cart.getItems().includes(curentFrut)
    // console.log(isAdded);
    // frutArr.push(curentFrut.textContent)

    
    // let data = +curentFrut.getAttribute('data-quantity')
    // curentFrut.setAttribute("data-quantity", `${count(data)}`);
    // console.log(data);


    
        // console.log(curentFrut.getAttribute('data-quantity'));
    //  else {
    //     // c += 1
    //     const qwe = document.querySelector(`.shopping-list-item${c}`);
    //     console.log('from else qwe'+ qwe);
    //      qwe.innerHTML =`<span>
    //      - Количество ${count(data)} </span>`
    // }

    // ещет текст контент лишки и спана и сравнимвает их если они равны то data +1
    //  shoppingList.insertAdjacentHTML('beforeend', `<li class="shopping-list-item"><span>${curentFrut.textContent}
    //      - Количество ${count} </span></li>`)
    // const addedFrut = document.querySelector('.shopping-list-item'); 
    // addedFrut.insertAdjacentHTML('beforeend', `<p class="text-caunt"></p>`)
    
}


