"use client";

import {useState} from "react";

interface Ingredient {
    name: string,
    quantity: string
}

interface Recipe {
    title: string,
    ingredients: Ingredient[],
    instructions: string
}

const Recipes: React.FC = () => {
    const [recipes, setRecipes] = useState<Recipe[]>(() => {
        const savedRecipes = localStorage.getItem("recipes");
        return savedRecipes ? JSON.parse(savedRecipes) : [];
    });

    const [newRecipe, setNewRecipe] = useState({
        title: "",
        ingredients: [{name: "", quantity: ""}],
        instructions: ""
    });

    const addIngredient = () => {
        setNewRecipe({
            ...newRecipe,
            ingredients: [...newRecipe.ingredients, {name: "", quantity: ""}]
        });
    };

    const handleIngredientChange = (index: number, field: "name" | "quantity", value: string) => {
        const updateIngredients = newRecipe.ingredients.map((ingredient, i) =>
            i === index ? {...ingredient, [field]: value} : ingredient);
        setNewRecipe({...newRecipe, ingredients: updateIngredients});
    };

    const saveRecipe = () => {
        if (newRecipe.title && newRecipe.ingredients.length && newRecipe.instructions) {
            const updatedRecipes = [...recipes, newRecipe];
            localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
            setRecipes(updatedRecipes);
            setNewRecipe({title: "", ingredients: [{name: "", quantity: ""}], instructions: ""})
        } else {
            alert("Fill all fields before saving this receipe");
        }
    };

    return (
        <div className="p-8 bg-green-100 min-h-screen">
            <h1 className="text-4xl font-bold mb-6">Glenda`s receipes</h1>
            {recipes.length > 0 ? (
                <ul className="space-y-4">
                    {recipes.map((recipe, index) => (
                        <li key={index} className="p-4-white shadow rounded">
                            <h2 className="text-2-xl font-bold mb-2">
                                {recipe.title}
                            </h2>
                            <h3 className="text-xl font-semibold mb-2">
                                Ingredients:
                            </h3>
                            <ul className="list-disc pl-6">
                                {recipe.ingredients.map((ingredient, idx) => (
                                    <li key={idx}>
                                        {ingredient.quantity} {ingredient.name}
                                    </li>
                                ))}
                            </ul>
                            <h3 className="text-xl font-semibold mt-4">Instructions:
                            </h3>
                            <p>{recipe.instructions}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p> No recipe saved yet. Add below!</p>
            )}

            <div className="mt-8 p-6 bg-white shadow-rounded">
                <h2 className="text2xl font-bold mb-4">
                    Add New Receipe
                </h2>
                <input
                    type="text"
                    placeholder="Receipe title"
                    value={newRecipe.title}
                    onChange={(e) => setNewRecipe({...newRecipe, title: e.target.value})}
                    className="w-full p-2 mb-4 border-rounded"
                />

                {newRecipe.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex space-x-4 mb-4">
                        <input
                            type="text"
                            placeholder="Ingredient name"
                            value={ingredient.name}
                            onChange={(e) => handleIngredientChange(index, "name", e.target.value)}
                            className="w-1/2 p-2 border-rounded"
                        />
                        <input
                            type="text"
                            placeholder="Quantity (e.g. 2 cups)"
                            value={ingredient.quantity}
                            onChange={(e) => handleIngredientChange(index, "quantity", e.target.value)}
                            className="w-1/2 p-2 border-rounded"
                        />
                    </div>
                ))}

                <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                        onClick={addIngredient}>
                    Add Ingredient
                </button>
                <textarea
                    placeholder="Instructions"
                    value={newRecipe.instructions}
                    onChange={(e) => setNewRecipe({...newRecipe, instructions: e.target.value})}
                    className="w-full p-2 mt-4 border rounded h-32"/>

                <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                        onClick={saveRecipe}>
                    Save Recipe
                </button>
            </div>
        </div>
    )
};

export default Recipes;