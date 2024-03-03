import { IIngredient } from "./ingredients.type";
import { IUser } from "./user.type";

export interface IOrder {
  ingredients: IIngredient[];
  owner: IUser & { createdAt: string; updatedAt: string };
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  price: number;
}

export interface IOrderInfo {
  _id: string;
  ingredients: string[];
  owner: string;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  __v: number;
}
