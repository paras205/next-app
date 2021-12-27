import { applyMiddleware, createStore, Middleware, StoreEnhancer } from "redux";
import { createWrapper, MakeStore } from "next-redux-wrapper";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";
// import { AppState } from "interface";

const bindMiddleware = (middleware: Middleware[]): StoreEnhancer => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};
// replace any with AppState
export const makeStore: MakeStore<any> = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store: any = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

export const wrapper = createWrapper<any>(makeStore, { debug: true });
