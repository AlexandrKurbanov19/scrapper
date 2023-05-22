const returnNumberOfPagesToParse = (pages, page) => {
  // тут синхронизация кол-ва страниц с фронта и страниц с ответа парсера
  const pagesFromRequest = Number(pages.at(-1));
  console.log('pagesFromRequest', pagesFromRequest);
  console.log('page', page);
  if (pagesFromRequest && page) {
    if (page > pagesFromRequest) {
      return pagesFromRequest;
    } else {
      return page;
    }
  }
  if (!pagesFromRequest) {
    return 1;
  }
}
module.exports = returnNumberOfPagesToParse;
