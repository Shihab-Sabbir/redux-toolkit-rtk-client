import { configureStore } from "@reduxjs/toolkit";
import { authApi } from '../Services/authApi'
import { setupListeners } from '@reduxjs/toolkit/query/react'
import authReducer from '../features/authSlice'
import { useDispatch, useSelector } from "react-redux";
export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware)
})


setupListeners(store.dispatch);