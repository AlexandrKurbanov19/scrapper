import getParsingDataEndpoint from "./getParsingDataEndpoint";

const prefix = 'getParsingData';
const queryName = `getParsingData`;

export default {
    typeDefs: `
      type ${prefix}Response {
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
        ${queryName}(data: HistoryRequestInput): ${prefix}Response!,
      }
    `,
    resolversConfig: {
      [`Mutation.${queryName}`]: {
        auth: false,
        middlewares: [
          getParsingDataEndpoint,
        ],
      },
    }
}
