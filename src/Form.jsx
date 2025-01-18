import React from "react";
import { useState } from "react";

export default function Form({ setTodoList }) {
  const [newTodoValue, setTodoValue] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    setTodoList((prevTodoList) => [
      ...prevTodoList,
      {
        id: (prevTodoList.at(-1) ?? 0) + 1,
        value: newTodoValue,
        completed: false,
      },
    ]);
    setTodoValue("");
  }
  return (
    <form className="flex w-full gap-3" onSubmit={handleSubmit}>
      <div className="flex-1 border border-gray-400 rounded shadow">
        <input
          type="text"
          className="w-full bg-transparent border-0 outline-none m-0 p-3"
          placeholder="할 일을 입력하세요"
          value={newTodoValue}
          onChange={(e) => setTodoValue(e.target.value)}
        ></input>
      </div>
      <input
        type="submit"
        value="입력"
        className="cursor-pointer flex gap-3 p-3 border-2 border-blue-400 text-blue-400 rounded hover:text-white hover:bg-blue-400"
      ></input>
    </form>
  );
}
