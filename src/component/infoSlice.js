import { createSlice } from "@reduxjs/toolkit";

// const initialValue={
//     value:2
// }
export const infoSlice = createSlice({
  name: "info",
  initialState: {
    name: "",
    age: "",
    address: "",
  },
  reducers: {
    showName: (state, action) => {
      state.name = action.payload;
    },
    showAddress: (state, action) => {
      state.address = action.payload;
    },
    showAge: (state, action) => {
      state.age = action.payload;
    },
  },
});
export const { showName, showAddress, showAge } = infoSlice.actions;
export default infoSlice.reducer;
