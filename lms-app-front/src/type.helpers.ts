export type RequiredField<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type Required<T> = {
  [P in keyof T]-?: T[P];
};

export type RequireOnlyOne<T, Keys extends keyof T = keyof T> =
  Pick<T, Exclude<keyof T, Keys>>
  & {
    [K in Keys]-?:
    Required<Pick<T, K>>
    & Partial<Record<Exclude<Keys, K>, undefined>>
  }[Keys];

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;
