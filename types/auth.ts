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
