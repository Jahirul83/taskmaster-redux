import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    name: "rakib",
    email: "rakib@gamil.com",
    userTasks: [],
}


const userSlice = createSlice({
    name:"userSlice",
    initialState,
    reducers:{

    }
    
});

export default userSlice.reducer;
