import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count:0,
};
const counterSLice = createSlice({
    name:"counter",
    initialState,
    reducers:{}
});

export default counterSLice.reducer;