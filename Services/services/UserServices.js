import GenericServices from "./GenericServices";
// import jwt_decode from "jwt-decode";
class UserServices extends GenericServices {
  login = (email, password) =>
    new Promise((resolve, reject) => {
      this.post("user/login", { email, password })
        .then((res) => {
          // localStorage.setItem("Token", res.token);
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    });

  Register = (
    name,
    email,
    password,
  ) =>
    new Promise((resolve, reject) => {
      this.post("user/register", {
        password,
        email,
        username:name,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  logout = () => {
    //localStorage.setItem("Token", "");
 
  };
  isloggedIn = () => {
    //console.log(localStorage.getItem("Token") ? true : false);
    //return localStorage.getItem("Token") ? true : false;
  };
  getloggedInUser = () => {
    //var token = localStorage.getItem("Token");
    if (token) {
      var decoded = jwt_decode(token);
      return decoded;
    }

    return token;
  };
  // getAdmin = () =>
  //   this.isloggedIn()
  //     ? this.getloggedInUser().role == "user"
  //       ? false
  //       : true
  //     : false;
}
let UerServices = new UserServices();
export default UerServices;
