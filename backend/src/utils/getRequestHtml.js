'use strict'

const axios = require("axios");
const getRequestHtml = async (url) => {
  try {
    if (!url) {
      return;
    }
    const headers = {
      "Accept": "*/*",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:84.0)"
    }

    const config = {
      headers: headers,
    }

    function delay(ms) {
      return new Promise( (resolve) => {setTimeout(resolve, ms)});
    }

    const response = await axios.get(url, config).then(await delay(2000));

    return response.data;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      console.error('isAxiosError в getRequestHtml', e)
    }
    console.error(e, 'ошибки в getRequestHtml')
  }
}
module.exports = getRequestHtml;
