"use client";

import React, { useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { RootState } from '@/redux/store';
import { addIngredient, generateRecipes, clearCauldron} from "@/redux/cauldronSlice";


const Cauldron: React.FC = () => {
const dispatch = useDispatch();
const ingredients = useSelector((state: RootState) => state.cauldron.ingredients);
const possibleRecipes = useSelector((state: RootState) => state.cauldron.possibleRecipes)

    const[newIngredient, setNewIngredient] = useState({name: "", quantity:""})

const handleAddIngredient = () => {
    if(newIngredient.name && newIngredient.quantity) {
        dispatch(addIngredient(newIngredient));
        setNewIngredient({name:"", quantity: ""});
    } else {
        alert("Need name and quantity");
    }
};

const handleGenerateRecipes = () => {
    if(ingredients.length > 0) {
        dispatch(generateRecipes());
    }else {
        alert("Please add some ingredients");
    }
};

    const handleClearCauldron = () => {
            dispatch(clearCauldron());
    };

return (
    <div className="p-8 bg-greeen-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-6">
            Cauldron: enter your ingredients
        </h1>

        <div className="mb-6">
            <input
                type="text"
                placeholder="Ingredient name"
                value={newIngredient.name}
                onChange={(e) => setNewIngredient({...newIngredient, name: e.target.value})}
                className="p-2 border rounded w-1/2"
            />

            <input
                type="text"
                placeholder="Quantity (e.g., 2 cups)"
                value={newIngredient.quantity}
                onChange={(e) => setNewIngredient({...newIngredient, quantity: e.target.value})}
                className="p-2 border rounded w-1/2 ml-4"
            />

            <button className="ml-4 bg-green-700 text-white px-4 py2 rounded hover:bg-green-800"
                    onClick={handleAddIngredient}>
                Add Ingredient
            </button>

            {ingredients.length > 0 && (
                <ul className="list-disc pl-5 mb-6">
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>
                            {ingredient.quantity}{ingredient.name}
                        </li>
                    ))}
                </ul>
            )}


            <button className="ml-4 bg-blue-700 text-white px-4 py2 rounded hover:bg-blue-800"
                    onClick={handleGenerateRecipes}>
                Generate Recipes
            </button>

            <button className="ml-4 bg-blue-700 text-white px-4 py2 rounded hover:bg-blue-800"
                    onClick={handleClearCauldron}>
                Clear Cauldron
            </button>

            {possibleRecipes.length > 0 && (
                <div className="mt-6">
                    <h2 className="text-2xl font-bold mb-4">
                        Possible dishes
                    </h2>
                    <ul className="list-discpl-5">
                        {possibleRecipes.map((dish, index) => (
                            <li key={index}>
                                {dish}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

        </div>

    </div>
)
}

export default Cauldron;