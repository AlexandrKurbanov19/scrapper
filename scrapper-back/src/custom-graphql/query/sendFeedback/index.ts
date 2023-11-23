import sendFeedbackEndpoint from './sendFeedbackEndpoint'

const prefix = 'sendFeedback';
const queryName = `sendFeedback`
export default {
    typeDefs: `
      type ${prefix}Response {
        status: Boolean,
      }

       input ${prefix}Input {
        email: String!,
        title: String,
        text: String!,
      }

      extend type Query {
        ${queryName}(data: ${prefix}Input): ${prefix}Response!,
      }
    `,
    resolversConfig: {
      [`Query.${queryName}`]: {
        auth: false,
        middlewares: [
          sendFeedbackEndpoint,
        ],
      },
    }
}
