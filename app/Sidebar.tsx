"use client";

import { useState } from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const sidebarItems = [
        { name: "Todo", link: "/todo" },
        { name: "Calendar", link: "/calendar" },
        { name: "Recipes", link: "/recipes" },
        { name: "Diary", link: "/diary" },
        { name: "Cat", link: "/cat" },
    ];

    return (
        <div className="relative">
            <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded z-50"
                onClick={() => setSidebarOpen(!sidebarOpen)}
            >
                {sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
            </button>

            <aside
                className={`fixed left-0 top-0 h-full w-64 bg-yellow-300 shadow-lg p-4 transform ${
                    sidebarOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out z-40`}
            >
                <ul className="space-y-4">
                    {sidebarItems.map((item, index) => (
                        <li key={index} className="hover:text-yellow-700 cursor-pointer">
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </aside>

            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-30"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default Sidebar;
