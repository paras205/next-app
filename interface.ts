export interface IRegister {
  name: string;
  email: string;
  password: string;
  confirm: string;
}

export interface ILogin {
  email: string;
  password: string;
}
export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
export interface IUser {
  name: string;
  email: string;
}

export interface IAuth {
  user: null | IUser;
  loading: boolean;
  error: null;
}

export interface AppState {
  user: IAuth | null;
}
