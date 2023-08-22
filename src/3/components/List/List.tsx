import { FunctionComponent} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector,useDispatch } from "react-redux";
import './List.scss'
import {deleteTaskById , changeTaskStatus} from "../../store/ReduxSlices/DataSlice";

const List: FunctionComponent<any> = () => {
  const dispatch = useDispatch();

  // Get searchOutput from Redux
  const reduxAllTasks = useSelector(
    (state: any) => state.TasksSlice.searchOutput 
  );
  
  console.log(reduxAllTasks)
  const HandleRemoveTask = (e:any)=>{
    const elementID = e.target.closest("li").getAttribute("id")    
    dispatch(deleteTaskById(elementID))
  }

  const HandleChangeTaskStatus = (e:any)=>{
    const elementID = e.target.closest("li").getAttribute("id")    
    if (e.target.checked) {
      dispatch(changeTaskStatus(elementID)) 
    }
  }
  return (
    <ul>
      {reduxAllTasks.map((record: any) => (
        <li key={record.Id} id = {record.Id} className="LiElement">{record.TaskName}
          <DeleteIcon onClick={HandleRemoveTask}></DeleteIcon>
          {record.TaskStatus == "NotCompleted" ? <input type="checkbox" onChange={HandleChangeTaskStatus}></input> : null}
        </li>
      ))}
    </ul>
  );
};

export default List;
