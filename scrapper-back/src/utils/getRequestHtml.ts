'use strict'

const axios = require("axios");
const UserAgent = require('user-agents');
const getRequestHtml = async (url) => {
  try {
    if (!url) {
      return;
    }

    const userAgent = new UserAgent({ deviceCategory: 'desktop' }).toString();

    console.log('user-agent', userAgent);

    // что бы избежать блокировки
    // сделать паузы между запросами - complete
    // менять user-agent - complete
    // менять ip через proxies
    const headers = {
      "Accept": "*/*",
      "User-Agent": userAgent,
    }

    // const proxy = {
    //   host: '',
    //   port: '',
    //   auth: '',
    // }

    const config = {
      headers: headers,
      // proxy,
    }

    function delay(ms) {
      return new Promise( (resolve) => {setTimeout(resolve, ms)});
    }

    const response = await axios.get(url, config)
      .then(await delay(4000))
      .catch(err => {
        console.error('error', err)
      })

    return response?.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.error('isAxiosError в getRequestHtml', e)
    }
    console.error(e, 'ошибки в getRequestHtml')
  }
}
export default getRequestHtml;
