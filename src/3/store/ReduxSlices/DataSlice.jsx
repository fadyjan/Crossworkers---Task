import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  AllTasks: [
    {
      TaskName: "a",
      Id: 1,
      TaskStatus: "NotCompleted",
    },
    { TaskName: "b", Id: 2, TaskStatus: "Completed" },
  ],
  searchOutput: [],
  activeCategory :""
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
        state.searchOutput = state.AllTasks
      },
    addNewTask :(state,action) =>{
        state.AllTasks.push({
            TaskName: action.payload,
            Id: state.AllTasks.length + 1,
            TaskStatus: "NotCompleted",
          });
    TasksSlice.caseReducers.setNotCompletedTasks(state);
},
    setActiveCategory : (state,action) =>{
        state.activeCategory = action.payload
    }
  },
});

export const { setCompletedTasks, setNotCompletedTasks,setAllTasks,addNewTask,setActiveCategory } = TasksSlice.actions;
export default TasksSlice.reducer;
