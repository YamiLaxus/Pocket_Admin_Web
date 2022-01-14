import {saveProduct} from './firebase.js'

window.addEventListener('DOMContentLoaded', () => {
    
})

const productsAcc = document.getElementById('product-acc')

productsAcc.addEventListener('submit', (e) => {
    e.preventDefault()

const name = productsAcc['product-name'];
const imgUrl = productsAcc['product-imgUrl'];
const imgMap = productsAcc['product-imgMap'];
const facebook = productsAcc['product-facebook'];
const price = productsAcc['product-price'];
const description = productsAcc['product-descripcion'];
const disponible = productsAcc['product-disponible'];
const phone = productsAcc['product-phone'];

saveProduct(name.value, imgUrl.value, imgMap.value, facebook.value, price.value, description.valuem, disponible.value, phone.value);
// saveTask(title.value, description.value);

})