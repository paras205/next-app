import { IRegister } from "interface";

const actions = {
  REGISTER_USER: "REGISTER_USER",
  REGISTER_USER_SUCCESS: "REGISTER_USER_SUCCESS",

  register: (data: IRegister) => {
    return {
      type: actions.REGISTER_USER,
      payload: data,
    };
  },
  registerUserSuccess: (data: IRegister) => {
    return {
      type: actions.REGISTER_USER_SUCCESS,
      payload: data,
    };
  },
};

export default actions;
