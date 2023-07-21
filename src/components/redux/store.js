import { configureStore, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const userSlice = createSlice({
  name: "user",
  initialState: { userName: "", userPassword: "" },
  reducers: {
    login: (state, action) => {
      state.userName = action.payload.userName;
      state.userPassword = action.payload.userPassword;
    },
    logOut: (state, action) => {
      state.userName = "";
      state.userPassword = "";
    }
  }
});

const productSlice = createSlice({
  name: "product",
  initialState: { products: [] },
  reducers: {
    getData: (state, action) => {
      state.products = action.payload;
    }
  }
});

const driverSlice = createSlice({
  name: "driver",
  initialState: { user_type: "", user_number: "" },
  reducers: {
    getUserSection: (state, action) => {
      state.user_type = action.payload;
    },
    getUserNumber: (state, action) => {
      state.user_number = action.payload;
    }
  }
});

export const { login, logOut } = userSlice.actions;
export const { getData } = productSlice.actions;
export const { getUserSection, getUserNumber } = driverSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    product: productSlice.reducer,
    driver: driverSlice.reducer
  }
});

//  === Get Data ===
//  === Redux Thunk ===
export const getAllProducts = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("https://catfact.ninja/fact");
    console.log(data);
    dispatch(getData(data));
  } catch (error) {
    console.log(error.message);
  }
};
