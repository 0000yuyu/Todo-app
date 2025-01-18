import React from "react";
import { useState } from "react";

export default function List({ todoList, setTodoList }) {
  const [editId, setEditId] = useState(null);
  const [newTodoValue, setTodoValue] = useState("");
  function handleUpdate() {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) => {
        if (todo.id == editId)
          return { id: editId, value: newTodoValue, completed: todo.completed };
        return todo;
      })
    );
  }
  function handleDelete(id) {
    setTodoList((prevTodoList) => prevTodoList.filter((todo) => todo.id != id));
  }
  function handleCompleted(id) {
    setTodoList((prevTodoList) =>
      prevTodoList.map((todo) => {
        if (todo.id == id)
          return { id, value: todo.value, completed: !todo.completed };
        return todo;
      })
    );
  }

  return (
    <div className="w-full flex-col flex gap-3">
      {todoList.map((todo) => (
        <div
          key={todo.id}
          className="flex w-full justify-between bg-gray-200 border border-gray-300 p-3 rounded shadow"
        >
          <div
            className={
              "flex-1 flex gap-2" + (todo.completed ? " line-through" : "")
            }
          >
            <input
              type="checkbox"
              className="accent-blue-300"
              onClick={() => handleCompleted(todo.id)}
              checked={todo.completed}
            ></input>
            <input
              type="text"
              value={todo.id != editId ? todo.value : newTodoValue}
              onChange={(e) => setTodoValue(e.target.value)}
              disabled={todo.id != editId}
              onBlur={handleUpdate}
              className="w-full bg-transparent border-0 outline-none p-0 m-0"
            ></input>
          </div>
          <div className="flex gap-3 pr-3">
            <button
              className="cursor-pointer"
              onClick={() => {
                setEditId(todo.id);
                setTodoValue(todo.value);
              }}
            >
              edit
            </button>
            <button
              onClick={(e) => handleDelete(todo.id)}
              className="cursor-pointer"
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
