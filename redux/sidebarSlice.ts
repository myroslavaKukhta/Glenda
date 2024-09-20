import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SidebarItem {
    label: string,
    href: string
}

interface SidebarState {
    items: SidebarItem[]
}

const initialState: SidebarState = {
    items: [],
}

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setSidebarItems: (state, action: PayloadAction<SidebarItem[]>) => {
            state.items = action.payload;
        }
    }
})

export const {setSidebarItems} = sidebarSlice.actions;
export default sidebarSlice.reducer;