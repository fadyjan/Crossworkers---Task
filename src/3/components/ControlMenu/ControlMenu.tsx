import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import {setCompletedTasks,setNotCompletedTasks,setAllTasks,setActiveCategory} from '../../store/ReduxSlices/DataSlice'

const ControlMenu: FunctionComponent = () => {
    const dispatch = useDispatch();
    const handleTaskCategory = (e:any)=>{
        dispatch(setActiveCategory(e.target.innerText))
        if (e.target.innerText == "All Tasks") {
            dispatch(setAllTasks())

        }else if(e.target.innerText == "Completed Tasks"){
            dispatch(setCompletedTasks())

        } else if(e.target.innerText == "Pending Tasks"){
            dispatch(setNotCompletedTasks())
        }

    }
  return (
      <div>
        <button onClick={handleTaskCategory}>All Tasks</button>
        <button onClick={handleTaskCategory}>Completed Tasks</button>
        <button onClick={handleTaskCategory}>Pending Tasks</button>
      </div>
  );
};

export default ControlMenu;
