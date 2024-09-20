"use client";

import { configureStore} from "@reduxjs/toolkit";
import cauldronReducer from './cauldronSlice';
import spellbookReducer from './spellbookSlice';
import altarReducer from './altarSlice';
import broomstickReducer from './broomstickSlice';
import sidebarReducer from './sidebarSlice'

export const store = configureStore({
    reducer: {
        cauldron: cauldronReducer,
        spellbook: spellbookReducer,
        altar: altarReducer,
        broomstick: broomstickReducer,
        sidebar: sidebarReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch;
