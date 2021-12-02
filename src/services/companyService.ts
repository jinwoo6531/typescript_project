import axios from "axios";

export function getCompany() {
  return new Promise((resolve, reject) => {
    const access = window.localStorage.getItem("access_token");
    axios
      .post("http://52.141.57.37:8002/dashboard/user/list/", {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(123213, response);

          //   resolve(response.data);
        }
        reject(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
