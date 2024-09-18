import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Location {
    id: number,
    name: string,
    description: string,
    weather: string

}

interface BroomstickState {
    locations: Location[]
}

const initialState: BroomstickState = {
    locations: []
}

const broomstickSlice = createSlice({
    name: "broomstick",
    initialState,
    reducers: {
        addLocation: (state, action: PayloadAction<Location>) => {
            state.locations.push(action.payload)
        },

        removeLocation: (state, action: PayloadAction<number>) => {
            state.locations = state.locations.filter(
                (location) => location.id !== action.payload
            )
        },
        clearLocations:(state) => {
            state.locations = []
        }
    }
});

export const { addLocation, removeLocation, clearLocations} = broomstickSlice.actions;
export default broomstickSlice.reducer;