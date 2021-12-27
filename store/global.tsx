export const ACTION_LOADING_SHOW = "G_LOADING_SHOW";
export const ACTION_LOADING_HIDE = "G_LOADING_HIDE";
export const ACTION_REQUESTING_SHOW = "G_REQUESTING_SHOW";
export const ACTION_REQUESTING_HIDE = "G_REQUESTING_HIDE";
export const SHOW_ERROR_MESSAGE = "G_ERROR_MESSAGE";

export const actions = {
  showLoading: (text?: string) => ({
    type: ACTION_LOADING_SHOW,
  }),
  hideLoading: () => ({
    type: ACTION_LOADING_HIDE,
  }),

  showRequesting: () => ({
    type: ACTION_REQUESTING_SHOW,
  }),
  hideRequesting: () => ({
    type: ACTION_REQUESTING_HIDE,
  }),
  showErrorMessage: (error: any) => ({
    type: SHOW_ERROR_MESSAGE,
    payload: error || "",
  }),
};

export const globalReducer = (
  state = { loading: false, error: null },
  action: any
) => {
  switch (action.type) {
    case ACTION_LOADING_SHOW: {
      return { ...state, loading: true };
    }
    case ACTION_LOADING_HIDE: {
      return { ...state, loading: false };
    }
    case ACTION_REQUESTING_SHOW: {
      return { ...state, requesting: true };
    }
    case ACTION_REQUESTING_HIDE: {
      return { ...state, requesting: false };
    }
    case SHOW_ERROR_MESSAGE: {
      return { ...state, error: action.payload };
    }
    default:
      return state;
  }
};
