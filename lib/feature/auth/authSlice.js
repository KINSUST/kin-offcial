import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,    // initially, no user is logged in
  isAuthenticated: false,  // track if the user is logged in
};

export const authSlice = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.SERVER_URL}/api/v1`,
    credentials: "include",
  }),
  tagTypes: ["Auth", "User"],
  endpoints: () => ({}),
});

export const loggedInUserSlice = createSlice({
  name: "logged",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    }
  },
});

export const { setUser, clearUser, setLoading, setError } = loggedInUserSlice.actions;

export default loggedInUserSlice.reducer;


