"use client";

import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Ingredient {
    name: string,
    quantity: string
}

interface CauldronState {
    ingredients: Ingredient[];
    possibleRecipes: string[];
}

const initialState: CauldronState = {
    ingredients: [],
    possibleRecipes: [],
}

const cauldronSlice = createSlice({
    name: 'cauldron',
    initialState,
    reducers: {
        addIngredient: (state, action: PayloadAction<Ingredient>) => {
            state.ingredients.push(action.payload);
        },

        generateRecipes: (state) => {
            if(state.ingredients.length > 0) {
                state.possibleRecipes = state.ingredients.map(
                    (ing) => `You can make a dish using ${ing.quantity} ${ing.name}`
                );
            }else {
                state.possibleRecipes = [];
            }
        },
        clearCauldron: (state) => {
            state.ingredients = [];
            state.possibleRecipes = [];
        }
    }
});

export const { addIngredient, generateRecipes, clearCauldron } = cauldronSlice.actions;
export default cauldronSlice.reducer;