import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string;
  username: string;
}

const initialState: AuthState = {
  token: "",
  username: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ token: string; username: string }>,
    ) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
    },
    logout: (state) => {
      state.token = "";
      state.username = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
