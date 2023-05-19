const urlBuilder = (geo, category, priceMin, priceMax, page, params) => {
  const base = 'https://www.avito.ru';
  return base + "/" + geo + "/" + category + "?f=" + params + "&pmin=" + priceMin + "&pmax=" + priceMax + "&user=1" + `&p=${page}`;
}
module.exports = urlBuilder;


// const paramsBuilder = (geo, category, priceMin, priceMax, page, keyWord, adsAuthor) => {
//   const params = {};
//   if (keyWord) {
//     params.bt = 1;
//     params.q = keyWord;
//     params.s = 2;
//   }
//   if (priceMin) {
//     params.pmin = priceMin;
//   }
//   if (priceMax) {
//     params.pmax = priceMax;
//   }
//   // if (adsAuthor) {
//   //   params.filter_value_names = adsAuthor
//   // }
//   return params;
// }
// module.exports = paramsBuilder;

