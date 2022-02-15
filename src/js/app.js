import { settings, select, classNames } from './settings.js'
import Product from './components/Product.js';


export const app = {

  initPages: function(){
    const thisApp = this;


    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    const idFromHash = window.location.hash.replace('#/', '');


    const idOfProducts = document.querySelector('#products');
    const idOfAboutUs = document.querySelector('#about-us');
    const idOfContactUs = document.querySelector('#contact-us');


    for(let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        const clickedElement = this;
        event.preventDefault();

        //get page id from href attribute
        const id = clickedElement.getAttribute('href').replace('#', '');

        //  change URL hash
        window.location.hash = '#/' + id;
      });


      idOfProducts.classList.remove('.active');
      idOfAboutUs.classList.remove('.active');
      idOfContactUs.classList.remove('.active');


      const clickedElement = this;
      const idOfClickedElement = clickedElement.getAttribute('id');



      if (idOfClickedElement === '#products') {
        idOfProducts.classList.add('.active')
      } else if (idOfClickedElement === '#about-us') {
        idOfAboutUs.classList.add('.active')
      } else if (idOfClickedElement === '#contact-us') {
        idOfContactUs.classList.add('.active')
      }
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