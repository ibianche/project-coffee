import { settings, select, classNames, idOf } from './settings.js'
import Product from './components/Product.js';


export const app = {

  initPages: function() {
    const thisApp = this;


    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    // const idFromHash = window.location.hash.replace('#/', '');

    thisApp.idOfProducts = document.querySelector(idOf.products);
    thisApp.idOfAboutUs = document.querySelector(idOf.aboutUs);
    thisApp.idOfContactUs = document.querySelector(idOf.contactUs);


    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();


        thisApp.idOfProducts.classList.remove(classNames.pages.active);
        thisApp.idOfAboutUs.classList.remove(classNames.pages.active);
        thisApp.idOfContactUs.classList.remove(classNames.pages.active);


        const id = clickedElement.getAttribute('href');
        window.location.hash = '#/' + id;


        if (id == '#products') {
          thisApp.idOfProducts.classList.add(classNames.pages.active)
        } else if (id == '#about-us') {
          thisApp.idOfAboutUs.classList.add(classNames.pages.active)
        } else if (id == '#contact-us') {
          thisApp.idOfContactUs.classList.add(classNames.pages.active)
        }
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
    thisApp.initPages();
    thisApp.initData();

    // thisApp.initProduct();
  },
  // thisApp.initProduct();
}

app.init();