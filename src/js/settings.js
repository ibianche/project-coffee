/* global Handlebars*/
export const select = {
  templateOf: {
    product: '#template-products',
  },

  product: '#product-list',

  containerOf: {
    pages: '#pages',
  },

  nav: {
    links: 'main-nav a',
  }

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

export const classNames = {
  pages: {
    active: 'active',
  }
  nav: {
    active: 'active',
  },
};