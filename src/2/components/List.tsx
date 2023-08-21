import React, { FunctionComponent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

const List: FunctionComponent<any> = () => {
  // Define local state for searchOutput
  const [searchOutput, setSearchOutput] = useState([]);

  // Get searchOutput from Redux
  const reduxSearchOutput = useSelector(
    (state: any) => state.moviesSlice.searchOutput 
  );

  // Update local state when Redux state changes
  useEffect(() => {
    setSearchOutput(reduxSearchOutput);
  }, [reduxSearchOutput]);

  return (
    <ul>
      {searchOutput.map((record: any) => (
        <Item key={record.id} recordTitle={record.title}></Item>
      ))}
    </ul>
  );
};

export default List;
