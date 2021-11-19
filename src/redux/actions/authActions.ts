import * as types from "../../constants";
import { AppDispatchType } from "../../index";
import { SignInType, SignUpType, ResetPasswordType } from "../../types/auth";
import {
  signIn as authSignIn,
  signUp as authSignUp,
  resetPassword as authResetPassword,
} from "../../services/authService";

export function signIn(credentials: SignInType) {
  return async (dispatch: AppDispatchType) => {
    dispatch({ type: types.AUTH_SIGN_IN_REQUEST });

    return authSignIn(credentials)
      .then((response: any) => {
        console.log("넘어옴", response);

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
  };
}

export function resetPassword(credentials: ResetPasswordType) {
  return async (dispatch: AppDispatchType) => {
    dispatch({ type: types.AUTH_RESET_PASSWORD_REQUEST });

    return authResetPassword(credentials)
      .then((response: any) => {
        dispatch({
          type: types.AUTH_RESET_PASSWORD_SUCCESS,
          user_email: response.email,
        });
      })
      .catch((error) => {
        dispatch({ type: types.AUTH_RESET_PASSWORD_FAILURE });
        throw error;
      });
  };
}
