import { IRegister } from "../../types/auth";

const actions = {
  REGISTER_USER: "REGISTER_USER",
  REGISTER_USER_BEGIN: "REGISTER_USER_BEGIN",
  REGISTER_USER_SUCCESS: "REGISTER_USER_SUCCESS",
  REGISTER_USER_FAIL: "REGISTER_USER_FAIL",

  register: (data: IRegister) => {
    return {
      type: actions.REGISTER_USER,
      payload: data,
    };
  },
  registerBegin: () => {
    return {
      type: actions.REGISTER_USER_BEGIN,
    };
  },
  registerUserSuccess: (data: IRegister) => {
    return {
      type: actions.REGISTER_USER_SUCCESS,
      payload: data,
    };
  },
  registerFail: () => {
    return {
      type: actions.REGISTER_USER_FAIL,
    };
  },
};

export default actions;
