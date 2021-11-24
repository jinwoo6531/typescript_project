import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AppStateType } from "../redux/reducers";

//   /*
//      예)  option: null -> 누구나 출입이 가능한 페이지 (home)
//                  true -> 로그인한 유저만 출입이 가능한 페이지
//                  false -> 로그인한 유저는 출입이 불가능한 페이지
//   */

// user: {
//           id: actions.id,
//           email: actions.email,
//           name: actions.name,
//         },

export default function q(
  SpecificComponent: any,
  option: any,
  adminRoute = null
) {
  function AuthenticationCheck(props: any) {
    let history = useHistory();
    const user = useSelector((state: AppStateType) => state.authReducer);

    useEffect(() => {
      const token = window.localStorage.getItem("access_token");
      try {
        if (!token) {
          if (option === true) {
            history.push("/auth/sign-in");
          }
        } else {
          //로그인 한 상태
          if (token) {
            history.push("/dashboard/default");
          } else {
            //로그인한 사람이 못들어가는 페이지 로그인,회원가입
            if (option === false) history.push("/dashboard/default");
          }
        }
      } catch (error) {
        if (error) {
          history.push("/auth/sign-in");
        }
      }
    }, []);
    //SpecificComponent 는 해당 컴포넌트
    return <SpecificComponent {...props} user={user} />;
  }

  return AuthenticationCheck;
}
