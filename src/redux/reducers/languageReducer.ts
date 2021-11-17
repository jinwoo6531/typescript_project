import * as types from "../../constants";
import { SetLanguageType } from "../actions/languageActions";

export type LanguageInitialStateType = {
  currentLanguage: string;
};
type ActionTypes = SetLanguageType;

const initialState = {
  currentLanguage: "ko",
};

export default function reducer(
  state = initialState,
  actions: ActionTypes
): LanguageInitialStateType {
  switch (actions.type) {
    case types.LANGUAGE_SET:
      return {
        ...state,
        currentLanguage: actions.payload,
      };

    default:
      return state;
  }
}
