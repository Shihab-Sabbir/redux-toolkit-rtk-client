import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    username: null,
    email: null,
    token: null,
    role: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            localStorage.setItem('redux-rtk-current-user', JSON.stringify(action.payload));
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.role = action.payload.role;
        },
        setLogout: (state) => {
            localStorage.removeItem('redux-rtk-current-user');
            state.username = null;
            state.email = null;
            state.token = null;
            state.role = null;
        }
    },
})

export const selectAuth = (state) => state.auth;

export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;