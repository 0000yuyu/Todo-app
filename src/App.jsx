import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./List";
import Form from "./Form";

function App() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) ?? []
  );
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="flex w-screen h-screen bg-blue-200 items-center justify-center">
      <div className="flex-col flex gap-3 w-full m-3 p-6 bg-white">
        <div className="flex items-center justify-between py-3 ">
          <h2>할 일 목록</h2>
          <button onClick={() => setTodoList([])} className="cursor-pointer">
            Delete All
          </button>
        </div>
        <List todoList={todoList} setTodoList={setTodoList} />
        <Form setTodoList={setTodoList} />
      </div>
    </div>
  );
}

export default App;
