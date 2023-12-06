const envSource = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test' ? import.meta.env : window._env_;

export const getApiBase = () => 'http://localhost:1337';

export const getAllowedAttachmentMimeTypes = () => envSource.VITE_ALLOWED_ATTACHMENTS_MIME_TYPES || 'image/gif,image/jpeg,image/png,image/bmp,video/mpeg,video/mp4,video/ogg,video/quicktime,video/webm,video/x-ms-wmv,video/x-flv,video/x-msvideo,video/3gpp,video/3gpp2,application/pdf,text/csv,text/plain,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel.sheet.binary.macroEnabled.12,application/vnd.ms-excel,application/vnd.ms-excel.sheet.macroEnabled.12,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/rtf,text/rtf,application/zip,application/vnd.rar';
