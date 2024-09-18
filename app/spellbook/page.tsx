"use client";

import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {addBook, toggleBooksStatus} from "@/redux/spellbookSlice";

const SpellBook: React.FC = () => {
    const dispatch = useDispatch();
    const books = useSelector((state: RootState) => state.spellbook.books);

    const [newBook, setNewBook] = useState({title: "", author: ""});

    const handleAddBook = () => {
        if (newBook.title && newBook.author) {
            dispatch(addBook({...newBook, completed: false}));
            setNewBook({title: "", author: ""})
        } else {
            alert('Enter title and author')
        }
    }

    return (
        <div className="bg-purple-100 min-h-screen flex flex-col items-center py-10">
            <h1 className="text-4xl font-bold text-purple-800 mb-10">
                Glenda`s spellbook
            </h1>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Title"
                    value={newBook.title}
                    onChange={(e) => setNewBook({...newBook, title: e.target.value})}
                    className="p-2 border rounded w-1/2 ml-4"
                />

                <input
                    type="text"
                    placeholder="Author"
                    value={newBook.author}
                    onChange={(e) => setNewBook({...newBook, author: e.target.value})}
                    className="p-2 border rounded w-1/2 ml-4"
                />

                <button
                    className="ml-4 bg-purple-700 text-white px-4 py-2 rounded hover: bg-purple-800"
                    onClick={handleAddBook}
                >
                    Add book
                </button>

                {books.length > 0 && (
                    <ul className="list-disc pl-5 mb-6">
                        {books.map((book, index) => (
                            <li key={index}>
                                {book.title} {book.author}
                                <button
                                    className="ml-4 bg-blue-500text-white px-2 py-1 rounded"
                                    onClick={() => dispatch(toggleBooksStatus(index))}>
                                    {book.completed ? 'Mark as Unread' : 'Mark as Read'}
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default SpellBook;