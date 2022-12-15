import { createSlice } from "@reduxjs/toolkit";

const initialState={value:false,
userName:""};


export const loginSlice = createSlice({
  name: "loginStatus",
  initialState,

  reducers: {
    setLoginState:(state, action) => {
      state.value=action.payload;
    },
    setUsernameState:(state, action) => {
      state.userName=action.payload;
    }
    
  } 
});

export const { setLoginState,setUsernameState} = loginSlice.actions;
export default loginSlice.reducer;
