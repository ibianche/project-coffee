import { settings } from './settings.js'
import Product from './components/Product.js';


export const app = {
  initData: function() {
    const url = settings.db.url + '/' + settings.db.products;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
      });
  },

  initProduct: function(){
    const thisApp = this;

    for (let productData in thisApp.data.products) {
      // new Product(productData, thisApp.data.products[productData]);
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
    thisApp.initProduct();

  },

  init: function() {
    const thisApp = this;
    thisApp.initData();
    // thisApp.initProduct();
  },
}

app.init();