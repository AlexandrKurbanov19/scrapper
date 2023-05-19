'use strict'
const {JSDOM} = require("jsdom");
const getContentPage = (html) => {
  try {
    if (!html) {
      console.log('Нет html в getContentPage')
      return;
    }

    const dom = new JSDOM(html);
    const document = dom.window.document;
    const items = document.querySelectorAll('[data-marker=item]');
    let finalRes = [];

    items.forEach((el) => finalRes.push({
      id: el.id,
      url: `${process.env.BASE_AVITO_URL}${el.querySelector('[itemprop=url]').getAttribute('href')}`,
      price: Number(el.querySelector('[itemprop=price]').getAttribute('content')),
      currency: el.querySelector('[itemprop=priceCurrency]').getAttribute('content'),
      description: el.querySelector('[itemprop=description]').getAttribute('content'),
      area: el.querySelector('[class*="geo-icons"]')?.nextSibling.textContent,
      title: el.querySelector('[itemprop=name]').textContent,
      dateOfPosting: el.querySelector('[data-marker=item-date]').textContent,
    }));

    return finalRes;
  } catch (e) {
    console.error(e, 'ошибки в getContentPage')
  }
}
module.exports = getContentPage;
