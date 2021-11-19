import axios from "axios";

import { ResetPasswordType, SignInType, SignUpType } from "../types/auth";

const JWT_EXPIRY_TIME = 10000;

type ResponseType = {
  access_expire_time: string;
  access_token: string;
  company_code: string;
  company_name: string;
  refresh_expire_time: string;
  refresh_token: string;
  type: string;
};

type RefreshType = {
  access: string;
};

export function signIn(credentials: SignInType) {
  return new Promise((resolve, reject) => {
    axios
      .post("http://52.141.57.37:8002/accounts/admin/login/", credentials)
      .then((response) => {
        if (response.status === 200) {
          window.localStorage.setItem(
            "refresh_token",
            response.data.refresh_token
          );
          LoginSuccess(response.data);
          resolve(response.data);
        }
        reject(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

async function LoginSuccess(item: ResponseType) {
  const access_token = item.access_token;
  axios.defaults.headers.common[
    "Authorization"
  ] = await `Bearer ${JSON.stringify(access_token)}`;
  await setTimeout(signInRefresh, JWT_EXPIRY_TIME);
}

async function signInRefresh() {
  const refresh = window.localStorage.getItem("refresh_token");
  axios
    .post("http://52.141.57.37:8002/accounts/token/refresh/", {
      refresh,
    })
    .then((response) => {
      if (response.status === 200) {
        RefreshSuccess(response.data);
      }
    });
}

export async function RefreshSuccess(item: RefreshType) {
  axios.defaults.headers.common[
    "Authorization"
  ] = await `Bearer ${JSON.stringify(item.access)}`;

  await setTimeout(signInRefresh, JWT_EXPIRY_TIME);
}

export function signUp(credentials: SignUpType) {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/auth/sign-up", credentials)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        }
        reject(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function resetPassword(credentials: ResetPasswordType) {
  return new Promise((resolve, reject) => {
    axios
      .post("/api/auth/reset-password", credentials)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data);
        }
        reject(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
