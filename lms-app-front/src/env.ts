import packageJson from '../package.json';

const envSource = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test' ? import.meta.env : window._env_;

export const getApiBase = () => envSource.VITE_API_BASE || '';

export const getVersionBackendApp = () => envSource.VITE_BACKEND_VERSION || '';
export const getMeetingLink = () => envSource.VITE_MEETING_LINK || '';
export const getDsnSentry = () => envSource.VITE_DSN_SENTRY || '';
export const getMaxUploadSize = () => Number(envSource.VITE_MAX_UPLOAD_SIZE) || 1073741824;
export const getAllowedAttachmentMimeTypes = () => envSource.VITE_ALLOWED_ATTACHMENTS_MIME_TYPES || 'image/gif,image/jpeg,image/png,image/bmp,video/mpeg,video/mp4,video/ogg,video/quicktime,video/webm,video/x-ms-wmv,video/x-flv,video/x-msvideo,video/3gpp,video/3gpp2,application/pdf,text/csv,text/plain,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel.sheet.binary.macroEnabled.12,application/vnd.ms-excel,application/vnd.ms-excel.sheet.macroEnabled.12,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/rtf,text/rtf,application/zip,application/vnd.rar';
export const getRelease = () => packageJson.version || '';

export const getReplayProjectKey = () => envSource.VITE_REPLAY_PROJECT_KEY || '';
export const getReplayIngestPoint = () => envSource.VITE_REPLAY_INGEST_POINT || '';
