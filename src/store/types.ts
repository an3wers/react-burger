import { AsyncThunkConfig } from "@reduxjs/toolkit/dist/createAsyncThunk";

export interface IThunkConfig extends AsyncThunkConfig {
  rejectValue: string
}
