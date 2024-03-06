import { IIngredient } from "../utils/types/ingredients.type";
import { IOrder, IOrderInfo } from "../utils/types/order.type";
import { IUser } from "../utils/types/user.type";

export type HTTPMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export interface IFetchOptions {
  headers?: Record<string, string>;
  method?: HTTPMethods;
  timeout?: number;
  body?: any;
}

export interface IRefreshTokenResponse {
  success: boolean;
  accessToken: string;
  refreshToken: string;
}

export interface ICreateOrderRequestData {
  ingredients: string[];
}

export interface IIngredientsResponse {
  success: boolean;
  data: IIngredient[];
}

export interface IResetPasswordRequestData {
  email: string;
}

export interface IResetPasswordResponse {
  success: boolean;
  message: string;
}

export interface IConfirmResetPasswordRequestData {
  password: string;
  token: string;
}

export interface IRegisterRequestData {
  email: string;
  password: string;
  name: string;
}

export type TLoginRequestData = Omit<IRegisterRequestData, "name">;

export interface IRegisterResponse {
  success: boolean;
  user: IUser;
  accessToken: string;
  refreshToken: string;
}

export interface ILoginResponse extends IRegisterResponse {}

export interface ILogoutRequestData {
  token: string;
}

export interface ILogoutResponse {
  success: boolean;
  message: string;
}

export interface IGetUserResponse {
  success: true;
  user: IUser;
}

export interface IUpdateUserRequestData {
  name: string;
  email: string;
  password?: string;
}

export interface IOrderResponse {
  success: boolean;
  name: string;
  order: IOrder;
}

export interface IOrderInfoResponse {
  success: boolean;
  orders: IOrderInfo[];
}
