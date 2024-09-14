"use client"

import Link from "next/link"

import Image from "next/image";


export default function Home() {
    return (
        <div className="bg-green-100 min-h-screen flex flex-col items-center py-10">
            <h1 className="text-5xl font-bold text-green-800 mb-10">
                Welcome Home!
            </h1>
            <p className="text-green-700 text-lg mb-6 text-center maxx-w-2xl">
                Step into the magical home of Glenda the Witch. Here, you can explore her mystical world, create potions
                in her cauldron, browse through her spellbook
            </p>

            <div className="mb-8">
                <Image
                    src="/images/witch-house.jpg"
                    className="rounded shadow-lg"
                    alt="Witch house"
                    width={600}
                    height={400}>
                    </Image>
            </div>

            <nav className="mb-10">
                <ul className="space-y-4">
                    <li>
                        <Link href="/cauldron" className="text-2xl font-bold text-green-900 hover:underline">
                            Cauldron
                        </Link>

                        <Link href="/spellbook" className="text-2xl font-bold text-purple-900 hover:underline">
                                Spellbook
                        </Link>

                        <Link href="/potions" className="text-2xl font-bold text-blue-900 hover:underline">
                                Potions
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
);
}
