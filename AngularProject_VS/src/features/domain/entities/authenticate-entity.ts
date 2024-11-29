export class AuthenticateEntity implements IAuthenticateEntity {
  accessToken: string | undefined;
  encryptedAccessToken: string | undefined;
  expireInSeconds: number = 0;
  userId: number = 0;

  constructor(data?: IAuthenticateEntity) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.accessToken = _data["accessToken"];
      this.encryptedAccessToken = _data["encryptedAccessToken"];
      this.expireInSeconds = _data["expireInSeconds"];
      this.userId = _data["userId"];
    }
  }

  static fromJS(data: any): AuthenticateEntity {
    data = typeof data === 'object' ? data : {};
    let result = new AuthenticateEntity();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["accessToken"] = this.accessToken;
    data["encryptedAccessToken"] = this.encryptedAccessToken;
    data["expireInSeconds"] = this.expireInSeconds;
    data["userId"] = this.userId;
    return data;
  }

  clone(): AuthenticateEntity {
    const json = this.toJSON();
    let result = new AuthenticateEntity();
    result.init(json);
    return result;
  }
}

export interface IAuthenticateEntity {
  accessToken: string | undefined;
  encryptedAccessToken: string | undefined;
  expireInSeconds: number;
  userId: number;
}
