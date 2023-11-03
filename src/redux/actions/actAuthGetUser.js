import { reduxGetUser } from "../../services/auth/get_user";
import { setUser } from "../reducers/auth/authGetUser";

export const actAuthGetUser = () => async (dispatch) => {
  reduxGetUser()
    .then((result) => {
      dispatch(setUser(result?.data?.data));
    })
    .catch((err) => {});
};
