import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const taskAdapter = createEntityAdapter();

const taskSlice = createSlice({
  name: "tasks",
  initialState: taskAdapter.getInitialState(),
  reducers: {
    addTask: taskAdapter.addOne,
    deleteTask: taskAdapter.removeOne,
    updateTask: taskAdapter.updateOne,
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice;
