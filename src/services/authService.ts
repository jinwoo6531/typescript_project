import axios from "axios";

import { ResetPasswordType, SignInType, SignUpType } from "../types/auth";

type ResponseType = {
  access_expire_time: number;
  access_token: string;
  company_code: string;
  company_name: string;
  refresh_expire_time: string;
  refresh_token: string;
  type: string;
};

type RefreshType = {
  access: string;
  access_expire_time: number;
};

export function signIn(credentials: SignInType) {
  return new Promise((resolve, reject) => {
    axios
      .post("http://52.141.57.37:8002/dashboard/login/", credentials, {
        headers: { Authorization: "" },
      })
      .then((response) => {
        if (response.status === 200) {
          window.localStorage.setItem(
            "refresh_token",
            response.data.refresh_token
          );
          window.localStorage.setItem(
            "access_token",
            response.data.access_token
          );
          loginSuccess(response.data);
          resolve(response.data);
        }
        reject(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

async function loginSuccess(item: ResponseType) {
  const access_token = window.localStorage.getItem("access_token");
  axios.defaults.headers.common[
    "Authorization"
  ] = await `Bearer ${JSON.stringify(access_token)}`;
  await setTimeout(signInRefresh, item.access_expire_time);
}

async function signInRefresh() {
  const refresh = window.localStorage.getItem("refresh_token");
  axios
    .post("hhttp://52.141.57.37:8003/dashboard/token/refresh/", {
      refresh,
    })
    .then((response) => {
      if (response.status === 200) {
        refreshSuccess(response.data);
      }
    });
}

export async function refreshSuccess(item: RefreshType) {
  window.localStorage.removeItem("access_token");
  axios.defaults.headers.common[
    "Authorization"
  ] = await `Bearer ${JSON.stringify(item.access)}`;
  window.localStorage.setItem("access_token", item.access);

  await setTimeout(signInRefresh, item.access_expire_time);
}

export function signOut() {
  return new Promise((resolve, reject) => {
    const access = window.localStorage.getItem("access_token");
    const refresh = window.localStorage.getItem("refresh_token");
    axios
      .post(
        "http://52.141.57.37:8002/accounts/logout/",
        { refresh },
        {
          headers: {
            Authorization: `Bearer ${access}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          return resolve(response.data);
        }
        return reject(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
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
      .post("http://52.141.57.37:8002/accounts/findpassword/", credentials)
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
