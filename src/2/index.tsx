import { FunctionComponent } from "react";

// Components
import Input from "./components/Input";
import List from "./components/List";
import { Provider } from "react-redux";
import { store } from "./store/store";

const Task2: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <div>
        <Input />
        <br />
        <List />
      </div>
    </Provider>
  );
};

export default Task2;
