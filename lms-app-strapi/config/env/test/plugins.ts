export default ({env}) => ({
  'users-permissions': {
    config: {
      jwtSecret: '29b53745eb0ee029753446cc88dcfa406bc9a07a01f37c1c12d61ad01592ff24341fb4a72d9faa9552b3c956a898500b06a59e1dd174d3348f69d1d678d49f42',
      jwt: {
        expiresIn: '1y',
      },
    },
  },
  graphql: {
    config: {
      amountLimit: 10000,
    },
  },
  email: {
    config: {
      enabled: true,
      provider: env('EMAIL_PROVIDER', 'nodemailer'),
      providerOptions: {
        host: env('EMAIL_SMTP_HOST', 'smtp.example.com'),
        port: env('EMAIL_SMTP_PORT', 587),
        auth: {
          user: env('EMAIL_SMTP_USER'),
          pass: env('EMAIL_SMTP_PASS'),
        },
      },
      settings: {
        defaultFrom: env('EMAIL_ADDRESS_FROM'),
        defaultReplyTo: env('EMAIL_ADDRESS_REPLY'),
      },
    },
  },
  notification: {
    enabled: true,
    resolve: './src/plugins/notificationSocket',
  }
});
