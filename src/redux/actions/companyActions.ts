import { AppDispatchType } from "./../../index";
import * as types from "../../constants";
import { getCompany } from "../../services/companyService";

export function getComanyList() {
  return async (dispatch: AppDispatchType) => {
    dispatch({ type: types.COMPANY_LIST_REQUEST });

    return getCompany()
      .then((response: any) => {
        dispatch({
          type: types.COMPANY_LIST_SUCCESS,
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
