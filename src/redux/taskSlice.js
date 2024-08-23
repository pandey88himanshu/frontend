// src/redux/taskSlice.js
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tasks: [],
  taskToUpdate: null,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      state.tasks = state.tasks.map((task) =>
        task._id === action.payload._id ? action.payload : task
      );
      state.taskToUpdate = null;
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task._id !== action.payload);
    },
    setTaskToUpdate: (state, action) => {
      state.taskToUpdate = action.payload;
    },
  },
});

export const { setTasks, addTask, updateTask, deleteTask, setTaskToUpdate } =
  taskSlice.actions;

export default taskSlice.reducer;
