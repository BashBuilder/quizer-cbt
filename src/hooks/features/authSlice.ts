import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  token: string;
  username: string;
  subscribeCount: {
    practice: number;
    jamb: number;
  };
}

const initialState: AuthState = {
  token: "",
  username: "",
  subscribeCount: {
    practice: 0,
    jamb: 0,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        token: string;
        username: string;
        subscribeCount: { practice: number; jamb: number };
      }>,
    ) => {
      state.token = action.payload.token;
      state.username = action.payload.username;
      state.subscribeCount = action.payload.subscribeCount;
    },
    updateCount: (
      state,
      action: PayloadAction<{ practice: number; jamb: number }>,
    ) => {
      state.subscribeCount = action.payload;
    },
    logout: (state) => {
      state = initialState;
      return state;
    },
  },
});

export const { login, logout, updateCount } = authSlice.actions;
export default authSlice.reducer;
