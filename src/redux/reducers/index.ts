import { combineReducers } from "redux";

import themeReducer from "./themeReducer";
import authReducer from "./authReducer";
import languageReducer from "./languageReducer";
import companyReducer from "./companyReducer";
export const rootReducer = combineReducers({
  themeReducer,
  authReducer,
  languageReducer,
  companyReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
