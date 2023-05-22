const urlBuilder = require("../../../../utils/urlBuilder");
const getRequestHtml = require("../../../../utils/getRequestHtml");
const getContentPage = require("../../../../utils/getContentPage");
const getPagesList = require("../../../../utils/getPagesList");
const returnNumberOfPagesToParse = require("./returnNumberOfPagesToParse");

const getParsingDataFromUrl = async (args) => {
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

    console.log('args?.data?.dataForParsing', args?.data?.dataForParsing)

    const urlForRequest = urlBuilder(selectedGeoPosition, categoryForParsing, pmin, pmax, 1, keyWords);

    if (!urlForRequest) {
      console.log('нет фильтров!')
      return;
    }

    const html = await getRequestHtml(urlForRequest);

    if (!html) {
      return;
    }

    const pages = getPagesList(html);

    console.log(urlForRequest, 'urlForRequest')
    console.log(pages?.length, 'pages?.length')

    let mainResult = [];


    if (pages?.length > 1) {
      const lastPage = returnNumberOfPagesToParse(pages, page);

      if (lastPage > 100) {
        console.log('дохера страниц для бесплатного парсинга!')
        return;
      }

      if (!lastPage) {
        return;
      }
      const allPages = Array.from({length: lastPage}, (_, index) => index + 1);

      for (const page of allPages) {
            let url = urlForRequest.replace(/&p=\d+/g,"&p="+page);
            console.log('url in the loop', page, url);
            const pageHtml = await getRequestHtml(url + `&p=${page}`);
            const pageContent = getContentPage(pageHtml);
            mainResult.push(pageContent);
      }
    } else if (pages?.length === 1 || !pages?.length){
      mainResult = getContentPage(html);
    } else {
      console.error('Ошибка с масивом страниц!')
      return;
    }


    if (mainResult && Array.isArray(mainResult) && mainResult?.length) {
      return mainResult.flat();
    }
    return [
      {
        message: 'Пришла пустота ирод!'
      }
    ]
  } catch (e) {
    console.error('getParsingDataFromUrl', e);
  }
}
module.exports = getParsingDataFromUrl;
