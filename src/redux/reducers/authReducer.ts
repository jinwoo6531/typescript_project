import * as types from "../../constants";

export type UserType = {
  company_code?: string;
  company_name?: string;
  company_type?: string;
  email_id?: string;
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
};

export type AuthType = {
  user?: UserType | undefined;
};

export default function reducer(
  state = {},
  actions: UserType & { type: string }
): AuthType {
  switch (actions.type) {
    case types.AUTH_SIGN_IN_SUCCESS:
      return {
        ...state,
        user: {
          company_code: actions.company_code,
          company_name: actions.company_name,
          company_type: actions.company_type,
        },
      };
    case types.AUTH_CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        // e_mail_id: actions.email_id,
        // old_password: actions.oldPassword,
        // new_password: actions.newPassword,
        // confirm_new_password: actions.confirmPassword,
      };

    case types.AUTH_SIGN_OUT:
      return {
        ...state,
        user: undefined,
      };

    default:
      return state;
  }
}
