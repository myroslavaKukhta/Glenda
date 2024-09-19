import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Task {
    id: number,
    title: string,
    completed: boolean,
    priority: "low" | "medium" | "high"
}

interface AltarState {
    tasks: Task[];
}

const initialState: AltarState = {
    tasks: []
}

const altarSlice = createSlice({
    name: 'altar',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
             state.tasks.push(action.payload);
        },

        removeTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },

        toggleTaskStatus: (state, action: PayloadAction<number>) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if(task) {
                task.completed= !task.completed;
            }
        },

        clearTasks: (state) => {
            state.tasks = [];
        }
    }
})

export const { addTask, removeTask, toggleTaskStatus, clearTasks} = altarSlice.actions;
export default altarSlice.reducer;