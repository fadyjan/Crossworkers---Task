import { FunctionComponent, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addNewTask,
  setActiveCategory,
} from "../../store/ReduxSlices/DataSlice";

const NewTask: FunctionComponent = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      console.log(newTask);
      dispatch(addNewTask(newTask));
      setNewTask("");
      dispatch(setActiveCategory("Pending Tasks"));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add New Task</button>
    </div>
  );
};

export default NewTask;
