import { CaptureConsole } from '@sentry/integrations';

export default ({ env }) => ({
  'users-permissions': {
    config: {
      jwt: {
        expiresIn: '1y',
      },
    },
  },
  sentry: {
    enabled: !!env('SENTRY_DSN'),
    config: {
      dsn: env('SENTRY_DSN'),
      sendMetadata: true,
      init: {
        environment: process.env.NODE_ENV,
        integrations: [new CaptureConsole(
          {
            levels: ['error', 'assert'],
          },
        )],
        tracesSampleRate: 1.0,
      },
    },
  },
  'config-sync': {
    enabled: true,
    config: {
      syncDir: "config/sync/",
      minify: false,
      soft: false,
      importOnBootstrap: false,
      excludedConfig: [
        "core-store.plugin_users-permissions_grant",
        "core-store.plugin_upload_metrics",
        "core-store.strapi_content_types_schema",
        "core-store.ee_information",
        "i18n-locale",
        "core-store.plugin_upload_view_configuration",
        "core-store.plugin_upload_settings",
        "core-store.core_admin_auth",
        "core-store.plugin_i18n_default_locale",
        "core-store.strapi_content_types_schema",
        "admin-role",
        "core-store.plugin_content_manager_configuration_content_types",
      ],
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
});
