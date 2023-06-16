'use strict'
const {JSDOM} = require("jsdom");
const getPagesList = (html) => {
  try {
    if (!html) {
      console.log('Нет html в getPagesList')
      return;
    }
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const pageCount = document.querySelectorAll("[data-marker*='pagination-button/page']").length;
    const pagesList = [];

    if (pageCount) {
      document.querySelectorAll("[data-marker*='pagination-button/page']")?.forEach((el) => {
        if (el.textContent) {
          pagesList.push(el?.textContent);
        }
      });
    }

    return pagesList;
  } catch (e) {
    console.error(e, 'error in getPagesList');
  }
}
export default getPagesList;
