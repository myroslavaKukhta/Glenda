import React from 'react';
import Link from "next/link";

const Navbar: React.FC = () => {
    return (
        <>
            <nav className="bg-green-700 text-white py-4 w-full fixed top-0 left-0 z-50">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-3xl font-bold">Glenda`s world</div>
                    <ul className="flex space-x-8 text-lg">
                        <li>
                            <Link href="/cauldron"
                                  className="text-2xl font-bold hover:text-yellow-400 text-white transition-colors duration-300">
                                Cauldron
                            </Link>
                        </li>

                        <li>
                            <Link href="/spellbook"
                                  className="text-2xl font-bold hover:text-purple-400 text-white transition-colors duration-300">
                                Spellbook
                            </Link>
                        </li>
                        <li>
                            <Link href="/potions"
                                  className="text-2xl font-bold hover:text-blue-400 text-white transition-colors duration-300">
                                Potions
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;