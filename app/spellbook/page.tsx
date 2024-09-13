"use client";

import React from 'react';

interface Spell {
    id: number,
    name: string,
    description: string;
}

const spellsList: Spell[] = [
    {id: 1, name: "Invisibility", description: " "},
    {id: 2, name: "Teleport", description: " "},
    {id: 3, name: "Curse", description: " "},
    {id: 4, name: "Fireball", description: " "},
    {id: 5, name: "Lightning Bolt", description: " "},
    {id: 6, name: "Shield", description: " "},
]

const SpellBook: React.FC = () => {
    return (
        <div className="bg-purple-100 min-h-screen flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold text-purple-800 mb-10">
                Glenda`s spellbook
            </h1>
            <div className="mb-10">
                <h2 className="text-2xl font-semibold text-purple-700 mb-4">
                    Aviable Spells
                </h2>
                <ul className="space-y-4">
                    {spellsList.map((spell) =>
                        <li key={spell.id} className="p-4 bg-purple-200 rounded shadow">
                            <h3 className="text-xl font-bold text-purple-900">
                                {spell.name}
                            </h3>
                            <p className="text-purple-700">{spell.description}</p>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default SpellBook;