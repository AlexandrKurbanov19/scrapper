const urlBuilder = require("../../../../utils/urlBuilder");
const axios = require("axios");
const {JSDOM} = require("jsdom");

const getParsingDataFromUrl = async (args) => {
  let html;
  const finalRes = [];

  try {
    if (!args) {
      return;
    }

    const {
      siteNameForParsing,
      page,
      keyWords,
      adsAuthor,
      selectedGeoPosition,
      categoryForParsing,
      pmin,
      pmax,
      rangeDate,

    } = args?.data?.dataForParsing;

    const headers = {
      "Accept": "*/*",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:84.0)"
  }

  const config = {
      headers: headers,
  }

    const urlForRequest = urlBuilder(selectedGeoPosition, categoryForParsing, pmin, pmax, 1);

    console.log(urlForRequest, 'urlForRequest');

    const response = await axios.get(urlForRequest, config);
    html = response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.error('isAxiosError', e)
    }
    console.error(e, 'comment history_request create')
  }
  let pages;
  if (html) {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const items = document.querySelectorAll('[data-marker=item]');
    const pagesCount = document.querySelector("[data-marker='pagination-button/nextPage']").parentElement.previousSibling.childNodes[0].getAttribute('data-value');

    pages = pagesCount;


    items.forEach((el) => finalRes.push({
      id: el.id,
      url: `https://www.avito.ru${el.querySelector('[itemprop=url]').getAttribute('href')}`,
      price: Number(el.querySelector('[itemprop=price]').getAttribute('content')),
      currency: el.querySelector('[itemprop=priceCurrency]').getAttribute('content'),
      description: el.querySelector('[itemprop=description]').getAttribute('content'),
      city: el.querySelector('[itemprop=description]').getAttribute('content'),
      area: el.querySelector('[class*="geo-icons"]').nextSibling.textContent,
      title: el.querySelector('[itemprop=name]').textContent,
      dateOfPosting: el.querySelector('[data-marker=item-date]').textContent,
    }));
  }

  return finalRes;
}
module.exports = getParsingDataFromUrl;
