import { settings, select, classNames } from './settings.js'
import Product from './components/Product.js';


export const app = {

  initPages: function() {
    const thisApp = this;


    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    // const idFromHash = window.location.hash.replace('#/', '');

    thisApp.idOfProducts = document.querySelector('#products');
    thisApp.idOfAboutUs = document.querySelector('#about-us');
    thisApp.idOfContactUs = document.querySelector('#contact-us');


    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        //get page id from href attribute
        // const id = clickedElement.getAttribute('href').replace('#', '');
        // thisApp.id = clickedElement.getAttribute('href');
        //  change URL hash
        // window.location.hash = '#/' + thisApp.id;
        // });

        thisApp.idOfProducts.classList.remove(classNames.pages.active);
        thisApp.idOfAboutUs.classList.remove(classNames.pages.active);
        thisApp.idOfContactUs.classList.remove(classNames.pages.active);


        thisApp.id = clickedElement.getAttribute('href');
        window.location.hash = '#/' + thisApp.id;


        if (thisApp.id == '#products') {
          thisApp.idOfProducts.classList.add(classNames.pages.active)
        } else if (thisApp.id == '#about-us') {
          thisApp.idOfAboutUs.classList.add(classNames.pages.active)
        } else if (thisApp.id == '#contact-us') {
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
    thisApp.initData();
    thisApp.initPages();
    // thisApp.initProduct();
  },
  // thisApp.initProduct();
}

app.init();