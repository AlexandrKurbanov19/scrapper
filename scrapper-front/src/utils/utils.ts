export const validateEmail = (email: string) => String(email)
  .toLowerCase()
  .match(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );

export const humanFileSize = (size: number) => {
  const i = Math.floor(Math.log(size) / Math.log(1024));

  return `${(size / 1024 ** i).toFixed(2)} ${['Б', 'КБ', 'МБ', 'ГБ', 'ТБ'][i]}`;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const neverCheck = (never: never) => {
};
export const searchByOptionTextInSelect = (input: string, option?: { children: string }) => (
  `${option?.children}`
    .toLowerCase()
    .includes(input.toLowerCase())
);
