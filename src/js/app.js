import { settings, select, classNames } from './settings.js'
import Product from './components/Product.js';


export const app = {

  initPages: function(){
    const thisApp = this;

    // thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');

    // let pageMatchingHash = thisApp.pages[0].id;
    // for (let page of thisApp.pages) {
    //   if (page.id == idFromHash) {
    //     pageMatchingHash = page.id;
    //     break;
    //   }
    // }
    //
    // thisApp.activatePage(pageMatchingHash);

    for(let link of thisApp.navLinks){
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        //get page id from href attribute
        const id =  clickedElement.getAttribute('href').replace('#', '');

        //  run thisApp.activatePage with that id
        // thisApp.activatePage(id);

        //  change URL hash
        window.location.hash = '#/' + id;
      });
    }

    },




  initData: function() {
    const thisApp = this;
    const url = settings.db.url + '/' + settings.db.products;
    this.data = {};
    fetch(url)
      .then((rawResponse) => {
        return rawResponse.json();
      })
      .then((parsedResponse) => {
        this.data.products = parsedResponse;
        thisApp.initProduct();
      });
    // thisApp.initProduct();
  },

  initProduct: function(){
    const thisApp = this;

    for (let productData in thisApp.data.products) {
      // new Product(productData, thisApp.data.products[productData]);
      new Product(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    }
    // thisApp.initProduct();
    },

  init: function() {
    const thisApp = this;
    thisApp.initData();
    thisApp.initPages();
    // thisApp.initProduct();
  },
  // thisApp.initProduct();
}

app.init();