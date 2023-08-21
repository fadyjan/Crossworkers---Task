import { FunctionComponent } from "react";
import { useSelector } from "react-redux";

const ActiveTitle: FunctionComponent = () => {
    const currentActiveTitle = useSelector(
        (state :any) => state.TasksSlice.activeCategory 
      );

  return (
    <>
    <h1>{currentActiveTitle}</h1>
    </>
  );
};

export default ActiveTitle;
