const axios = require("axios");
const {JSDOM} = require("jsdom");
const urlBuilder = require("../../../../utils/urlBuilder");
module.exports = {
  async afterUpdate(event) {
    try {
      const {result} = event;
      const {id} = result;

      if (!id) {
        return;
      }

      console.log('result', event);

    } catch (e) {
      console.error(e, 'comment history_request update')
    }
  },
  async afterCreate(event) {
    // let html;
    // try {
    //   const {params} = event;
    //   const {data} = params;
    //   const {dataForParsing} = data;
    //
    //   if (!dataForParsing) {
    //     return;
    //   }
    //
    //   const {
    //     siteNameForParsing,
    //     countAds,
    //     keyWords,
    //     adsAuthor,
    //     selectedGeoPosition,
    //     categoryForParsing,
    //     firstPrice,
    //     finalPrice,
    //   } = dataForParsing;
    //
    //   urlBuilder(selectedGeoPosition, categoryForParsing,keyWords, firstPrice, finalPrice, 1)
    //
    //   const response = await axios.get("https://www.avito.ru/all/telefony?cd=1");
    //   html = response.data;
    // } catch (e) {
    //   if (axios.isAxiosError(e)) {
    //     console.error('isAxiosError', e)
    //   }
    //   console.error(e, 'comment history_request create')
    // }
    //
    // if (html) {
    //   const dom = new JSDOM(html);
    //   const document = dom.window.document;
    //   const items = document.querySelectorAll('[data-marker=item]');
    //   const finalRes = [];
    //
    //   items.forEach((el) => finalRes.push({
    //     id: el.id,
    //     url: el.querySelector('[itemprop=url]').getAttribute('href'),
    //     price: Number(el.querySelector('[itemprop=price]').getAttribute('content')),
    //     currency: el.querySelector('[itemprop=priceCurrency]').getAttribute('content'),
    //     description: el.querySelector('[itemprop=description]').getAttribute('content'),
    //     title: el.querySelector('[itemprop=name]').textContent,
    //     dateOfPosting: el.querySelector('[data-marker=item-date]').textContent,
    //   }));
    //
    //   console.log('finalRes', finalRes);
    // }
  },
};
