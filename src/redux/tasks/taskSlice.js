import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const taskAdapter = createEntityAdapter();

const taskSlice = createSlice({
  name: "tasks",
  initialState: taskAdapter.getInitialState(),
  reducers: {
    addTask: (state, action) => {
      taskAdapter.addOne(state, action.payload);
    },
    deleteTask: (state, action) => {
      taskAdapter.removeOne(state, action.payload);
    },
    updateTask: (state, action) => {
      taskAdapter.updateOne(state, {
        id: action.payload.id,
        changes: { title: action.payload.title },
      });
    },
  },
});

export const { addTask, deleteTask, updateTask } = taskSlice.actions;

export default taskSlice.reducer;
