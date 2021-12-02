import { CompanyType } from "../../types/company";
import * as types from "../../constants";

const initialState = {
  company_code: "",
  company_name: "",
  email: "",
  is_active: true,
  date_joined: "",
  date_permit_joined: "",
};

export default function reducer(
  state = initialState,
  actions: CompanyType & { type: string }
) {
  switch (actions.type) {
    case types.COMPANY_LIST_SUCCESS:
      return {
        ...state,
        company: {
          company_code: actions.company_code,
          company_name: actions.company_name,
          email: actions.email,
          is_active: actions.is_active,
          date_joined: actions.date_joined,
          date_permit_joined: actions.date_permit_joined,
        },
      };

    default:
      return state;
  }
}
