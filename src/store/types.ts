import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";

export interface IThunkConfig extends AsyncThunkConfig {
  rejectValue: string
}

export interface IOrderFeed {
  ingredients: string[],
  _id: string,
  status: string,
  name: string,
  number: number,
  createdAt: string,
  updatedAt: string
}

export interface IOrdersFeed {
  success: boolean,
  orders: IOrderFeed[],
  total: number,
  totalToday: number
}
