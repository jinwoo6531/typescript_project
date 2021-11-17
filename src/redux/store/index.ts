import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import promiseMiddleware from "redux-promise";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import ReduxThunk from "redux-thunk";
// import rootReducer from "../reducers/index";
import { rootReducer } from "../reducers";

const persistConfig = {
  key: "root",
  // localStorage에 저장합니다.
  storage,
  // blacklist -> 그것만 제외하고 localstorage에 저장합니다.
  blacklist: ["token"],
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

// persisConfig가 추가된 reducer 반환
const persistedReducer = persistReducer(persistConfig, rootReducer); // create a persisted reducer
// 여러개의 middleware를 사용할 수 있게 해주는 라이브러리
const logger = createLogger();
// redux devtools 를 사용할 수 있도록 정의를 해준 후
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
// store를 만들어준다. middleware 안에 여러가지 라이브러리를 넣어주고
const configureStore = () => {
  let store = createStore(
    persistedReducer,
    composeEnhancers(
      applyMiddleware(thunk, logger, promiseMiddleware, ReduxThunk)
    )
  );

  let persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
