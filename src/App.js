import React from "react";
import ReactDOM from "react-dom/client"
import DynamicForm from "./components/DynamicForm";
import "../style.css";

const App = () => {
  return (
    <div className="App">
      <DynamicForm />
    </div>
  );
};

const Root = ReactDOM.createRoot(document.querySelector("#root"))
Root.render( <App /> );
