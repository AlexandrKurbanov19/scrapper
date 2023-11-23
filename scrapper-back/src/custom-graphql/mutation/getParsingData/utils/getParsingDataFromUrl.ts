import returnNumberOfPagesToParse from './returnNumberOfPagesToParse'
import urlBuilder from "../../../../utils/urlBuilder";
import getRequestHtml from "../../../../utils/getRequestHtml";
import getPagesList from "../../../../utils/getPagesList";
import getContentPage from "../../../../utils/getContentPage";

const getParsingDataFromUrl = async (args) => {
  try {
    if (!args?.data?.dataForParsing) {
      return;
    }

    const { page } = args?.data?.dataForParsing;

    const urlForRequest = urlBuilder(args?.data?.dataForParsing);

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
    console.log(pages.length, 'pages?.length')

    let mainResult = [];


    if (pages?.length > 1) {
      const lastPage = returnNumberOfPagesToParse(pages, page);

      if (lastPage > 10) {
        console.log('дохера страниц для бесплатного парсинга!')
        return;
      }

      if (!lastPage) {
        return;
      }
      const allPages = Array.from({length: lastPage}, (_, index) => index + 1);

      for (const page of allPages) {
            let url = urlForRequest?.replace(/&p=\d+/g,"&p="+page);
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
export default getParsingDataFromUrl;
