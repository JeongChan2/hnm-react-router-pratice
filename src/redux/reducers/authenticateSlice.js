import { createSlice } from "@reduxjs/toolkit"

let initialState = {
  id:'',
  password:'',
  authenticate:false
}

const authenticateSlice = createSlice({
  name:"auth",
  initialState,
  reducers:{
    LoginSuccess(state,action) {
      state.id = action.payload.id;
      state.password = action.payload.password;
      state.authenticate = true;
    },
    LogoutSuccess(state) {
      state.id = '';
      state.password = '';
      state.authenticate = false;
    },
  },
  
})

export const authActions = authenticateSlice.actions;
export default authenticateSlice.reducer