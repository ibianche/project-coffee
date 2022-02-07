import { settings, select, templates } from './settings.js'


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

  init: function() {
    const thisApp = this;
    thisApp.initData();
  },
}

app.init();