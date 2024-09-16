"use client";

import React, { useState} from 'react';

interface Ingredient {
    name: string,
    quantity: string
}

const Cauldron: React.FC = () => {


    const [aviableIngredients, setAviableIngredients] = useState<Ingredient[]>([])
    const [newIngredient, setNewIngredient] = useState({name: "", quantity: ""});
    const [possibleRecipes, setPossibleRecipes] = useState<string[]>([]);

const addIngredient = () => {
    if(newIngredient.name && newIngredient.quantity) {
        setAviableIngredients([...aviableIngredients, newIngredient]);
        setNewIngredient({name:"", quantity: ""});
    } else {
        alert("Need name and quantity");
    }
};

const generateRecipes = () => {
    if(aviableIngredients.length > 0) {
        const dishes = aviableIngredients.map(
            (ing)=>`You can make a dish using ${ing.quantity} ${ing.name}`
        );
        setPossibleRecipes(dishes);
    }else {
        alert("Please add some ingredients to generate possible dishes");
    }
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
                placeholder="Quantity (e.g., 2 cups"
                value={newIngredient.quantity}
                onChange={(e) => setNewIngredient({...newIngredient, quantity: e.target.value})}
                className="p-2 border rounded w-1/2 ml-4"
            />

            <button className="ml-4 bg-green-700 text-white px-4 py2 rounded hover:bg-green-800"
                    onClick={addIngredient}>
                Add Ingredient
            </button>

            {aviableIngredients.length > 0 && (
                <ul className="list-disc pl-5 mb-6">
                    {aviableIngredients.map((ingredient, index) => (
                        <li key={index}>
                            {ingredient.quantity}{ingredient.name}
                        </li>
                    ))}

                </ul>
            )}


            <button className="ml-4 bg-blue-700 text-white px-4 py2 rounded hover:bg-blue-800"
                    onClick={generateRecipes}>
                Generate Possible Dishes
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