
export const select = {
  templateOf: {
    product: '#template-products',
  },
}

export const templates = {
  menuProduct: Handlebars.compile(document.querySelector(select.templateOf.product).innerHTML),
}