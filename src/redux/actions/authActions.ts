import { AppDispatchType } from "./../../index";
import * as types from "../../constants";
import { SignInType, SignUpType, ResetPasswordType } from "../../types/auth";
import {
  signIn as authSignIn,
  signUp as authSignUp,
  signOut as authSignOut,
  changePassword as authChangePassword,
  resetPassword as authResetPassword,
} from "../../services/authService";

type SignOutResponse = {
  result: number;
};

export function signIn(credentials: SignInType) {
  return async (dispatch: AppDispatchType) => {
    dispatch({ type: types.AUTH_SIGN_IN_REQUEST });

    return authSignIn(credentials)
      .then((response: any) => {
        dispatch({
          type: types.AUTH_SIGN_IN_SUCCESS,
          company_code: response.company_code,
          company_name: response.company_name,
          company_type: response.type,
        });
      })
      .catch((error) => {
        dispatch({ type: types.AUTH_SIGN_IN_FAILURE });
        throw error;
      });
  };
}

export function signUp(credentials: SignUpType) {
  return async (dispatch: AppDispatchType) => {
    dispatch({ type: types.AUTH_SIGN_UP_REQUEST });

    return authSignUp(credentials)
      .then((response: any) => {
        dispatch({
          type: types.AUTH_SIGN_UP_SUCCESS,
          id: response.id,
          email: response.email,
          name: response.name,
        });
      })
      .catch((error) => {
        dispatch({ type: types.AUTH_SIGN_UP_FAILURE });
        throw error;
      });
  };
}

export function signOut() {
  return async (dispatch: AppDispatchType) => {
    dispatch({
      type: types.AUTH_SIGN_OUT,
    });
    return authSignOut().then((response: SignOutResponse) => {
      if (response.result === 200) {
        dispatch({
          type: types.AUTH_SIGN_OUT,
        });
        window.localStorage.removeItem("refresh_token");
        window.localStorage.removeItem("access_token");
      }
    });
  };
}

export function resetPassword(credentials: any) {
  return async (dispatch: AppDispatchType) => {
    dispatch({ type: types.AUTH_RESET_PASSWORD_REQUEST });

    return authResetPassword(credentials)
      .then((response: any) => {
        dispatch({
          type: types.AUTH_RESET_PASSWORD_SUCCESS,
          user_email: response.email,
          company_code: response.company_code,
        });
      })
      .catch((error) => {
        dispatch({ type: types.AUTH_RESET_PASSWORD_FAILURE });
        throw error;
      });
  };
}

export function changePassword(credentials: any) {
  return async (dispatch: AppDispatchType) => {
    dispatch({ type: types.AUTH_CHANGE_PASSWORD_REQUEST });
    return authChangePassword(credentials).then((response: any) => {
      dispatch({
        type: types.AUTH_CHANGE_PASSWORD_SUCCESS,
        old_password: response.old_password,
        new_password: response.new_password,
      });
    });
  };
}
