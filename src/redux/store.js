import { combineSlices, configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasks/taskSlice";
import userReducer from "./users/userSlice";

export const store = configureStore({
  reducer: combineSlices(taskReducer, userReducer),
});
