'use strict'
const urlBuilder = (args) => {
  try {
    const {
      selectedGeoPosition, categoryForParsing, pmin, pmax, keyWords, adsAuthor, selleRating
    } = args;
    let baseUrl = `${process.env.BASE_AVITO_URL}`;
    let params = '';

    if (selectedGeoPosition) {
      baseUrl += `/${selectedGeoPosition}`;
    }
    if (categoryForParsing) {
      baseUrl +=  `/${categoryForParsing}`;
    }
    if (keyWords) {
      params +=  `?q=${keyWords?.replaceAll(' ', '+')}`;
    }
    if (pmin) {
      params +=  `&pmin=${pmin}`;
    }
    if (pmax) {
      params +=  `&pmax=${pmax}`;
    }
    if (adsAuthor) {
      params +=  `&user=${adsAuthor}`;
    }
    params += `&p=${1}`;
    if (selleRating) {
      params += `&params[115385][0]=${selleRating}`;
    }

    return baseUrl + params;
  } catch (e) {
    console.error(e, 'ошибка при формировании url')
  }
}
export default urlBuilder;

