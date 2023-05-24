const endpoint = require('./endpoint');

module.exports = () => {
  return {
    typeDefs: `
      type sendFeedbackResponse {
        status: Boolean,
      }

       input sendFeedbackInput {
        email: String!,
        title: String,
        text: String!,
      }

      extend type Query {
        sendFeedback(data: sendFeedbackInput): sendFeedbackResponse!,
      }
    `,
    resolversConfig: {
      'Query.sendFeedback': {
        auth: false,
        middlewares: [
          endpoint,
        ],
      },
    }
  };
}
