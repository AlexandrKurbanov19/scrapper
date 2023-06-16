import { action, makeObservable, observable } from 'mobx';

export interface ITokenProvider {
  /**
   * Авторизационный токен
   */
  token: string | undefined,
  /**
   * Задание нового токена
   */
  setToken: (token: string | undefined) => void,
}

class TokenProvider implements ITokenProvider {
  constructor() {
    makeObservable(this, {
      token: observable,
      setToken: action,
    });
  }

  public token: string | undefined;

  public setToken(token: string | undefined) {
    this.token = token;
  }
}

export default TokenProvider;
