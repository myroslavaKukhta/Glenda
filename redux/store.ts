"use client";

import { configureStore} from "@reduxjs/toolkit";
import cauldronReducer from './cauldronSlice';

export const store = configureStore({
    reducer: {
        cauldron: cauldronReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch;
