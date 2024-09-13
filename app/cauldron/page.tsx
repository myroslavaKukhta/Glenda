"use client";

import React, {useState} from 'react';

interface Ingredient {
    id: number,
    name: string
}

const ingredientsList: Ingredient[] = [
    {id: 1, name: "Chamomile"},
    {id: 2, name: "Peppermint"},
    {id: 3, name: "Echinacea"},
    {id: 4, name: "St. John's Wort"},
    {id: 5, name: "Lavender"},
    {id: 6, name: "Ginseng"},
    {id: 7, name: "Valerian"},
    {id: 8, name: "Sage"},
    {id: 9, name: "Ginger"},
    {id: 10, name: "Aloe Vera"},
]

const Cauldron: React.FC = () => {
    const [cauldron, setCauldron] = useState<Ingredient[]>([]);
    const maxIngredients = 5;

    const addIngredient = (ingredient: Ingredient) => {
        if (cauldron.some((item) => item.id === ingredient.id)) {
            alert(`${ingredient.name} is already in the cauldron!`);
            return;
        }

        if (cauldron.length >= maxIngredients) {
            alert(`You can't add more than ${maxIngredients} ingredients!`);
            return;
        }

        setCauldron([...cauldron, ingredient]);
    }

    const removeIngredient = (id: number) => {
        setCauldron(cauldron.filter((item) => item.id !== id));
    }

    const clearCauldron = () => {
        setCauldron([]);
    }

    return (
        <div className="bg-green-100 min-h-screen flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold text-green-800 mb-10">
                Glenda witchy cauldron
            </h1>
            <div className="mb-10">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">
                    Aviable ingredients
                </h2>
                <ul className="space-y-2">
                    {ingredientsList.map((ingredient) => (
                        <li className="flex justify-between items-center" key={ingredient.id}>
                            <span>{ingredient.name}</span>
                            <button
                                className="ml-4 px-4 py-2 bg-green-900 text-white rounded hover:bg-green-950 transition"
                                onClick={() => addIngredient(ingredient)}>
                                Add
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Cauldron</h2>

                {cauldron.length > 0 ? (
                        <ul>
                            {cauldron.map((ingredient) => (
                                <li key={ingredient.id}>
                                    {ingredient.name}
                                    <button
                                        className="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                                        onClick={() => removeIngredient(ingredient.id)}>
                                        Remove
                                    </button>
                                </li>
                            ))}
                            <button
                                className="ml-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                                onClick={() => clearCauldron()}>
                                Clear Cauldron
                            </button>
                        </ul>)
                    : (
                        <p className="text-green-700">
                            'The cauldron is empty'
                        </p>
                    )}

            </div>
        </div>
    )
}

export default Cauldron;