import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) ?? [
      { id: 1, value: "밥 먹기", completed: false },
    ]
  );

  return (
    <div className="flex w-screen h-screen bg-blue-200 items-center justify-center">
      <div className="flex-col flex gap-3 w-full m-3 p-6 bg-white">
        <div className="flex items-center justify-between py-3 ">
          <h2>할 일 목록</h2>
          <button className="cursor-pointer">Delete All</button>
        </div>
        <div className="w-full flex-col flex gap-3">
          {todoList.map((todo) => (
            <div
              key={todo.id}
              className="flex w-full justify-between bg-gray-200 border border-gray-300 p-3 rounded shadow"
            >
              <div className="flex-1 flex gap-2">
                <input type="checkbox" className="accent-blue-300"></input>
                <input
                  type="text"
                  className="w-full bg-transparent border-0 outline-none p-0 m-0"
                ></input>
              </div>
              <div className="flex gap-3 pr-3">
                <span className="cursor-pointer">edit</span>
                <span className="cursor-pointer">X</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full gap-3">
          <div className="flex-1 border border-gray-400 rounded shadow">
            <input
              type="text"
              className="w-full bg-transparent border-0 outline-none m-0 p-3"
              placeholder="할 일을 입력하세요"
            ></input>
          </div>
          <button className="cursor-pointer flex gap-3 p-3 border-2 border-blue-400 text-blue-400 rounded hover:text-white hover:bg-blue-400">
            입력
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
