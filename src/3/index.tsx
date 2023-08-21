import { FunctionComponent } from "react";
import ControlMenu from "./components/ControlMenu/ControlMenu";
// Components
import List from "./components/List/List";
import NewTask from "./components/NewTask/NewTask";
import ActiveTitle from "./components/ActiveTitle/ActiveTitle";
import { Provider } from "react-redux";
import { store } from "./store/store";

const Task3: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <div>
        <ActiveTitle></ActiveTitle>
        <NewTask></NewTask>
        <ControlMenu></ControlMenu>
        <List />
      </div>
    </Provider>
  );
};

export default Task3;
