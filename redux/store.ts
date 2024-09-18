"use client";

import { configureStore} from "@reduxjs/toolkit";
import cauldronReducer from './cauldronSlice';
import spellbookReducer from './spellbookSlice';
import workaltarReducer from './work-altarSlice';
import broomstickReducer from './broomstickSlice';

export const store = configureStore({
    reducer: {
        cauldron: cauldronReducer,
        spellbook: spellbookReducer,
        workaltar: workaltarReducer,
        broomstick: broomstickReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch;
