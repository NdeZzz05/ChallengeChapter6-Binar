import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setToken } from "../../redux/reducers/auth/authLogin";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { useNavigate } from "react-router-dom";

function GoogleLogin({ buttonText }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registerLoginWithGoogleAction = async (accessToken) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_SERVER}/api/v1/auth/google`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      dispatch(setToken(token));
      CookieStorage.set(CookieKeys.AuthToken, token);

      navigate("/homepage");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response.data.message);
        return;
      }
      toast.error(error.message);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) => registerLoginWithGoogleAction(responseGoogle.access_token),
  });

  return (
    <div className="text-center">
      <button className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center space-x-2 shadow-md hover:shadow-lg" onClick={() => loginWithGoogle()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 533.5 544.3" class="w-6 h-6">
          <path fill="#4285f4" d="M505.3 278.8c0-18.5-1.5-36.7-4.3-54.8H261.8v98.7h136.2c-6 32.8-26.3 61.7-56.3 80.1v66h89.6c52.4-48.3 82.7-119.4 82.7-200.1" />
          <path fill="#34a853" d="M261.8 547.1c74.5 0 137.3-24.4 182.3-66.5l-89.6-66c-25.1 17.1-56.8 27-92.7 27-71 0-130.6-46.2-152.2-110.7H9.7v66.1c44 87.1 135.1 146.8 242.1 146.8" />
          <path fill="#fbbc05" d="M109.6 329.3c-3.2-9.7-4.9-19.9-4.9-30.3 0-10.4 1.7-20.6 4.9-30.3V202.6H9.7c-17.8 53.5-27.9 110.5-27.9 175.5 0 65 10.1 122 27.9 175.5h95.1v-96.7" />
          <path fill="#0f9d58" d="M261.8 101.2c41.8 0 77.1 14.4 104.9 42.4l79.1-79.1C398.9 24.4 336.3 0 261.8 0 155.8 0 62.7 59.7 18.7 151.8l90.9 70.4c21.6-64.5 81.2-110.7 152.2-110.7" />
        </svg>
        <span>Login with Google</span>
      </button>
    </div>
  );
}

export default GoogleLogin;
