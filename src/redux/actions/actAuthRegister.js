import { toast } from "react-toastify";
import { reduxRegisterUser } from "../../services/auth/register_user";
import { setToken, setUser } from "../reducers/auth/authRegister";

export const actAuthRegister = (input) => async (dispatch) => {
  reduxRegisterUser(input)
    .then((result) => {
      dispatch(setUser(input));
      dispatch(setToken(result?.data?.data));
      if (result?.data?.data?.token) {
        toast.success("Register Berhasil", {
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
          window.location.href = "/";
        }, 2000);
      }
    })
    .catch((err) => {
      if (err?.response?.data?.message === "User has already registered") {
        toast.error("Email sudah terdaftar", {
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
