import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import authReducer from "./authReducer";
import languageReducer from "./languageReducer";

export const rootReducer = combineReducers({
  themeReducer,
  authReducer,
  languageReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
