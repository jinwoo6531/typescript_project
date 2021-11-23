import { AuthType } from "../redux/reducers/authReducer";

export type SignInType = {
  user_email: string;
  password: string;
};

export type SignUpType = {
  name: string;
  company: string;
  user_email: string;
  password: string;
};

export type ResetPasswordType = {
  user_email: string;
  company_code: AuthType;
};
