import { useDispatch, useSelector } from "react-redux";
import {
  createUser,
  loginUser,
  logoutUser,
  updateUser,
} from "../store/user/api";
import * as userApi from "../api/user.api";
import { setUser, setAuthChecked } from "../store/user/slice";
import { selectCurrentUser, selectIsChecked } from "../store/user/selectors";

export const useUser = () => {
  const user = useSelector(selectCurrentUser)
  const isAuthChecked = useSelector(selectIsChecked)

  const dispatch = useDispatch();

  const getUser = async (token) => {
    try {
      const res = await userApi.getUser(token);
      dispatch(setUser(res.user));
    } catch (error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  };

  const checkUserAuth = async () => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      await getUser(token)
        .catch(() => {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          dispatch(setUser(null));
        })
        .finally(() => {
          dispatch(setAuthChecked(true));
        });
    } else {
      dispatch(setAuthChecked(true));
    }
  };

  const registerRequest = async (data) => {
    return await dispatch(createUser(data)).unwrap();
  };

  const loginRequest = async (data) => {
    return await dispatch(loginUser(data)).unwrap();
  };

  const forgotPasswordRequest = async (data) => {
    return await userApi.resetPassword(data).then(() => {
      localStorage.setItem("isForgotPassword", true);
    });
  };

  const resetPasswordRequest = async (data) => {
    return await userApi.confirmResetPassword(data).then(() => {
      localStorage.removeItem("isForgotPassword");
    });
  };

  const logoutRequest = async () => {
    return await dispatch(logoutUser()).unwrap();
  };

  const updateRequest = async (data) => {
    return await dispatch(updateUser(data)).unwrap();
  };

  return {
    user,
    isAuthChecked,
    registerRequest,
    getUser,
    checkUserAuth,
    loginRequest,
    forgotPasswordRequest,
    resetPasswordRequest,
    logoutRequest,
    updateRequest,
  };
};
