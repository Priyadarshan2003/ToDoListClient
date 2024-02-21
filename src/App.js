import { Fragment } from "react";
import "./App.css";

//components
import InputTodoBox from "./components/InputTodoBox";
import ListTodo from "./components/ListOfTodo";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodoBox />
        <ListTodo/>
      </div>
    </Fragment>
  );
}

export default App;
