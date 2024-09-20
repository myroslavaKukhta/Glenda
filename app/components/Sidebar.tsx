"use client";

import React, {useState} from "react";
import Link from "next/link";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

interface SideBarProps {
    items: { label: string; href: string }[];
}

const Sidebar: React.FC<SideBarProps> = ({items = []}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <div className="fixed top-4 left-4 z-50">
                <button
                    className="p-2 bf-green-700 text-white rounded hover:bg-green-800"
                    onClick={toggleSidebar}>
                    <AiOutlineMenu size={24}/>
                </button>

                <aside
                    className={`fixed top-0 left-0 h-full bg-gray-200 p-4 z-40 transition-transform ${
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                    style={{width: "250px"}}>

                    <button
                        className="absolute top-4 right-4 text-black"
                        onClick={toggleSidebar}>
                        <AiOutlineClose size={24}/>
                    </button>

                    <ul className="mt-10">
                        {items.map((item, index) => (
                            <li key={index} className="mb-2">
                                <Link href={item.href}
                                      className="w-full text-left p-2 bg-gray-100 hover:bg-gray-300 rounded block">
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>

            </div>
        </>
    );
};

export default Sidebar;
