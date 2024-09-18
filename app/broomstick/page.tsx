"use client";

import React, {useState} from 'react';

interface Potion {
    id: number,
    name: string,
    ingredients: string[],
    effect: string
}

const potions: Potion[] = [
    {id: 1, name: "Healthing", ingredients: ["Rose petals", "Unicorn tears"], effect: "You feel good!"},
    {id: 2, name: "Love", ingredients: ["Dragon scale", "Herb of Vitality"], effect: "You feel good!"},
    {id: 3, name: "Strength", ingredients: ["Moonlight essence", "Mandrake root"], effect: "You feel good!"},
    {id: 4, name: "Sleep", ingredients: ["Valeriana", "Honey", "Milk"], effect: "You feel good!"},
    {id: 5, name: "Mana", ingredients: ["Bear claw", "Wolf's fang"], effect: "You feel good!"},
    {id: 6, name: "Coffee", ingredients: ["Arabia"], effect: "You feel good!"}
]

const Broomstick: React.FC = () => {
    const [drunkPotion, setDrunkPotion] = useState<string | null>(null);

    const drinkPotion = (potion: string, effect: string) => {
        setDrunkPotion(`${potion}: ${effect}`);
    }

    return (
        <div className="bg-blue-100 min-h-screen flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold text-blue-800 mb-10">
                Glenda`s potion
            </h1>
            <div className="mb-10">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">
                    Aviable potions
                </h2>
                <ul className="space-y-4">
                    {potions.map((potion) => (
                        <li key={potion.id} className="p-4 bg-blue-200 rounded shadow">
                            <h3 className="text-blue-700">
                                {potion.name}
                            </h3>
                            <p className="text-blue-700">
                                Ingredients: {potion.ingredients.join(",")}
                            </p>
                            <button
                                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover: bg-blue-700 transition"
                                onClick={() => (
                                    drinkPotion(potion.name, potion.effect)
                                )}>
                                Drink this
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {drunkPotion && (
                <div className="mt-8 p-4 bg-blue-300 rounded shadow">
                    <h3 className="text-xl font-semibold text-blue-900">
                        You drank a potion!
                    </h3>
                    <p className="text-blue-700">
                        {drunkPotion}
                    </p>
                </div>

            )}
        </div>
    )
}

export default Broomstick;