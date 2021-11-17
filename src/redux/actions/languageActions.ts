import * as types from "../../constants/";

export type SetLanguageType = {
  type: typeof types.LANGUAGE_SET;
  payload: string;
};

export function setLanguage(value: string): SetLanguageType {
  return {
    type: types.LANGUAGE_SET,
    payload: value,
  };
}
