import {
  createUser,
  loginUser,
  logoutUser,
  updateUser,
} from "../store/user/api";
import * as userApi from "../api/user.api";
import { setUser, setAuthChecked } from "../store/user/slice";
import { selectCurrentUser, selectIsChecked } from "../store/user/selectors";
import {
  IConfirmResetPasswordRequestData,
  IRegisterRequestData,
  IResetPasswordRequestData,
  IUpdateUserRequestData,
  TLoginRequestData,
} from "../api/types";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export const useUser = () => {
  const user = useAppSelector(selectCurrentUser);
  const isAuthChecked = useAppSelector(selectIsChecked);

  const dispatch = useAppDispatch();

  const getUser = async (token: string) => {
    try {
      const res = await userApi.getUser(token);
      dispatch(setUser(res.user));
    } catch (error) {
      throw new Error((error as Error).message);
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

  const registerRequest = async (data: IRegisterRequestData) => {
    return await dispatch(createUser(data)).unwrap();
  };

  const loginRequest = async (data: TLoginRequestData) => {
    return await dispatch(loginUser(data)).unwrap();
  };

  const forgotPasswordRequest = async (data: IResetPasswordRequestData) => {
    return await userApi.resetPassword(data).then(() => {
      localStorage.setItem("isForgotPassword", "true");
    });
  };

  const resetPasswordRequest = async (
    data: IConfirmResetPasswordRequestData
  ) => {
    return await userApi.confirmResetPassword(data).then(() => {
      localStorage.removeItem("isForgotPassword");
    });
  };

  const logoutRequest = async () => {
    return await dispatch(logoutUser(null)).unwrap();
  };

  const updateRequest = async (data: IUpdateUserRequestData) => {
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
