import { settings, select, classNames, idOf } from './settings.js'
import Product from './components/Product.js';


export const app = {
  initPages: function() {

    const navLinks = document.querySelectorAll(select.nav.links);
    const idOfProducts = document.querySelector(idOf.products);
    const idOfAboutUs = document.querySelector(idOf.aboutUs);
    const idOfContactUs = document.querySelector(idOf.contactUs);


    for (let link of navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();


        idOfProducts.classList.remove(classNames.pages.active);
        idOfAboutUs.classList.remove(classNames.pages.active);
        idOfContactUs.classList.remove(classNames.pages.active);


        const id = clickedElement.getAttribute('href');
        window.location.hash = '#/' + id;


        if (id == '#products') {
          idOfProducts.classList.add(classNames.pages.active)
        } else if (id == '#about-us') {
          idOfAboutUs.classList.add(classNames.pages.active);
          idOfProducts.classList.add(classNames.pages.active)
        } else if (id == '#contact-us') {
          idOfContactUs.classList.add(classNames.pages.active)
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