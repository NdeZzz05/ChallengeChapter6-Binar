import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { setIsLoggedIn, setToken, setUser } from "../reducers/auth/authLogin";
import { reduxLoginUser } from "../../services/auth/login_user";
import { toast } from "react-toastify";

export const actAuthLogin = (input) => async (dispatch) => {
  reduxLoginUser(input)
    .then((result) => {
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token));
      dispatch(setIsLoggedIn(true));
      dispatch(setUser(input));
      if (result?.data?.data?.token) {
        toast.success("Login Berhasil", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          window.location.href = "/homepage";
        }, 2000);
      }
    })
    .catch((err) => {
      if (err?.response?.data?.message === "Wrong password") {
        toast.error("Password anda salah", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (err?.response?.data?.message === "User is not found") {
        toast.error("Pengguna tidak ditemukan", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (err?.response?.data?.message === "Email is not valid") {
        toast.error("Email salah atau tidak benar", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    });
};

export const LogOut = () => (dispatch) => {
  dispatch(setToken(undefined));
  CookieStorage.remove(CookieKeys.AuthToken);
  window.location.href = "/";
};
