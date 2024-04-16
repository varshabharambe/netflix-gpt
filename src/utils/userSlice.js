import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"user",
    initialState : null,
    reducers : {
        addUser: (state,action) => {
            console.log("user added");
            return action.payload;
        },
        removeUser : (state, action) => {
            console.log("user removed");
            return null;
        }
    }
});

export const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer;