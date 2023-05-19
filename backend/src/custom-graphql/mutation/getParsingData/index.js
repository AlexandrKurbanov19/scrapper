const endpoint = require('./endpoint');

module.exports = (strapi) => {
  return {
    typeDefs: `
      type getParsingDataResponse {
        json: JSON,
      }


       input HistoryRequestInput {
        adsAuthor: String,
        countAds: Int,
        finalPrice: Int,
        firstPrice: Int,
        keyWords: String,
        siteNameForParsing: String,
        categoryForParsing: [String],
        rangeDate: [String],
      }

      extend type Mutation {
        getParsingData(data: HistoryRequestInput): getParsingDataResponse!,
      }
    `,
    resolversConfig: {
      'Mutation.getParsingData': {
        auth: false,
        middlewares: [
          endpoint,
        ],
      },
    }
  };
}
