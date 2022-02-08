/* global Handlebars*/
export const select = {
  templateOf: {
    product: '#template-products',
  },

  product: '#product-list',

};

export const templates = {
  coffeeProduct: Handlebars.compile(document.querySelector(select.templateOf.product).innerHTML),
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
  }

};