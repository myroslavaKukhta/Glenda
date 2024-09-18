import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Book {
    title: string,
    author: string,
    completed: boolean
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

        toggleBooksStatus: (state, action: PayloadAction<number>) => {
            const book = state.books[action.payload];
            book.completed = !book.completed;
        }
    }
});

export const {addBook, toggleBooksStatus} = spellbookSlice.actions;
export default spellbookSlice.reducer;