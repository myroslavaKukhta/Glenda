import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Book {
    title: string,
    author: string,
    completed: boolean,
    description?: string
}

interface SpellbookState {
    books: Book[]
}

const initialState: SpellbookState = {
    books: [],
}

const spellbookSlice = createSlice({
    name: 'spellbook',
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<Book>) => {
            state.books.push(action.payload)
        },

        removeBook: (state, action: PayloadAction<string>) => {
            state.books = state.books.filter((book) => book.title != action.payload);
        },

        toggleBooksStatus: (state, action: PayloadAction<number>) => {
            const book = state.books[action.payload];
            book.completed = !book.completed;
        }
    }
});

export const {addBook, removeBook, toggleBooksStatus} = spellbookSlice.actions;
export default spellbookSlice.reducer;