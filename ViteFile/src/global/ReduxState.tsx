import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: "" || null,
    toggle: false,
}

const ReduxState = createSlice({
  name: "SMSGO💥🚀",
  initialState,
  reducers: {
    loginUser: (state, { payload }) => {
        state.user = payload;
      
      },
  
      toggle: (state, { payload }) => {
        state.toggle = payload;
      },
      logOut: (state) => {
        state.user = null;
      },
     

  }
});

export const {loginUser,toggle,logOut} = ReduxState.actions

export default ReduxState.reducer