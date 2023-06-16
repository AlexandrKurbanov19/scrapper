/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE: string;
  readonly VITE_MEETING_LINK: string;
  readonly VITE_BACKEND_VERSION: string;
  readonly VITE_NOTIFICATION_SOCKET_API: string;
  readonly VITE_MAX_UPLOAD_SIZE: string;
  readonly VITE_ALLOWED_ATTACHMENTS_MIME_TYPES: string;

  // Openreplay config
  readonly VITE_REPLAY_INGEST_POINT: string | undefined;
  readonly VITE_REPLAY_PROJECT_KEY: string | undefined;

  readonly VITE_DSN_SENTRY: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
