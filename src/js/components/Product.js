import {select, templates} from '../settings.js';
import {utils} from "../utils.js";

class Product {

  constructor(id, data){
    const thisProduct = this;

    thisProduct.id = id;
    thisProduct.data = data;

    thisProduct.renderInMenu();
  }

  renderInMenu(){
    const thisProduct = this;


    const generatedHTML = templates.coffeeProduct(thisProduct.data);


    thisProduct.element = utils.createDOMFromHTML(generatedHTML);


    const productContainer = document.querySelector(select.product);


    productContainer.appendChild(thisProduct.element);



  }

}

export default Product;