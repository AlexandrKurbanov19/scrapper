import getParsingDataFromUrl from './utils/getParsingDataFromUrl'

const getParsingDataEndpoint = async (next, parent, args) => {
  try {
    const res = await getParsingDataFromUrl(args);

    return {
      json: res,
    };
  } catch (e) {
    console.error(e)
  }
};

export default getParsingDataEndpoint;
