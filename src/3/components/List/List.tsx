import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const List: FunctionComponent<any> = () => {
  // Define local state for searchOutput
//   const [searchOutput, setSearchOutput] = useState([]);

  // Get searchOutput from Redux
  const reduxAllTasks = useSelector(
    (state: any) => state.TasksSlice.searchOutput 
  );

  // Update local state when Redux state changes
//   useEffect(() => {
//     // setSearchOutput(reduxSearchOutput);
//   }, [reduxSearchOutput]);

  return (
    <ul>
      {reduxAllTasks.map((record: any) => (
        <li>{record.TaskName}</li>
      ))}
    </ul>
  );
};

export default List;
