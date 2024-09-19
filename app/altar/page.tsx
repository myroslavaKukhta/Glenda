"use client";

import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {addTask, removeTask, toggleTaskStatus, clearTasks} from "@/redux/altarSlice";

interface NewTask {
    title: string,
    priority: "low" | "medium" | "high"
}
const Altar: React.FC = () => {
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.altar.tasks)

    const[newTask, setNewTask] = useState<NewTask>({title: "", priority: "medium"})

    const handleAddTask = () => {
        if (newTask.title.trim() === "") {
            alert("Enter a task title");
            return;
        }

        const task = {
            id: tasks.length + 1,
            title: newTask.title,
            completed: false,
            priority: newTask.priority
        }

        dispatch(addTask(task));
        setNewTask({title: "", priority: "medium"})
    };

    const handleToggleTaskStatus = (id: number) => {
        dispatch(toggleTaskStatus(id))
    }

    const handleDeleteTask = (id: number) => {
        dispatch(removeTask(id))
    }

    return (
        <div className="min-h-screen p-6 bg-gray-100">
            <h1 className="text-4xl font-bold mb-6">
                Work Altar
            </h1>

            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Task title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({...newTask, title: e.target.value})}
                    className="p-2 border rounded w-1/2"
                />

                <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({...newTask, priority: e.target.value})}
                    className="ml-4 p-2 border rounded">
                    <option
                        value="low">
                        Low
                    </option>

                    <option
                        value="medium">
                        Medium
                    </option>

                    <option
                        value="high">
                        High
                    </option>
                </select>

                <button
                className="ml-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                onClick={handleAddTask}
                >
                    Add task
                </button>

                <ul className="space-y-4">
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className={`p-4 border rounded ${task.completed ? "bg-green-200" : "bg-white"}`}>
                            <h2 className="text-xl font-semibold">
                                {task.title}
                            </h2>
                            <p>Priority: {task.priority}</p>
                            <button
                                className="ml-4 bg-blue-700 text-white px-2 py-1 rounded hover:bg-blue-800"
                                onClick={() => handleToggleTaskStatus(task.id)}
                            >
                                {task.completed ? "Mark incomplete" : "Mark complete"}
                            </button>

                            <button
                                className="ml-4 bg-red-700 text-white px-2 py-1 rounded hover:bg-red-800"
                                onClick={() => handleDeleteTask(task.id)}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>

                {tasks.length > 0 && (
                    <button className="mt-6 bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800"
                    onClick={() => dispatch(clearTasks())}>
                        Clear all
                    </button>
                )}
            </div>

        </div>
    )

}

export default Altar;