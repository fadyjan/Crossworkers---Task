import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AllTasks: [
    {
      TaskName: "HomeWork",
      Id: 1,
      TaskStatus: "NotCompleted",
    },
    { TaskName: "Sports", Id: 2, TaskStatus: "Completed" },
  ],
  searchOutput: [],
  activeCategory: "",
};

const TasksSlice = createSlice({
  name: "TasksSlice",
  initialState,
  reducers: {
    setCompletedTasks: (state) => {
      state.searchOutput = state.AllTasks.filter(
        (task) => task.TaskStatus === "Completed"
      );
    },
    setNotCompletedTasks: (state) => {
      state.searchOutput = state.AllTasks.filter(
        (task) => task.TaskStatus === "NotCompleted"
      );
    },

    setAllTasks: (state) => {
      state.searchOutput = state.AllTasks;
    },
    addNewTask: (state, action) => {
      state.AllTasks.push({
        TaskName: action.payload,
        Id: state.AllTasks.length + 1,
        TaskStatus: "NotCompleted",
      });
      TasksSlice.caseReducers.setNotCompletedTasks(state);
    },
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    deleteTaskById: (state, action) => {
      state.AllTasks = state.AllTasks.filter(
        (task) => task.Id != action.payload
      );
      
      // Update searchOutput based on activeCategory
      if (state.activeCategory === "NotCompleted") {
        TasksSlice.caseReducers.setNotCompletedTasks(state);
      } else if (state.activeCategory === "Completed") {
        TasksSlice.caseReducers.setCompletedTasks(state);
      } else {
        TasksSlice.caseReducers.setAllTasks(state);
      }
    },
  },
});

export const {
  setCompletedTasks,
  setNotCompletedTasks,
  setAllTasks,
  addNewTask,
  setActiveCategory,
  deleteTaskById
} = TasksSlice.actions;
export default TasksSlice.reducer;
