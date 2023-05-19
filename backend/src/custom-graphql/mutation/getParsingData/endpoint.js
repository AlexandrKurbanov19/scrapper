const getParsingDataFromUrl = require("./utils/getParsingDataFromUrl");
const endpoint = async (next, parent, args) => {
  try {
    console.log('args', args)

    const res = await getParsingDataFromUrl(args);

    return {
      json: res,
    };
  } catch (e) {
    console.error(e)
  }
};

module.exports = endpoint;
