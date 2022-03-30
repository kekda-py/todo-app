import { useState } from "react";

export const Bar = ({ update }: any) => {
  const [todo, setTodo] = useState("");

  function addTodo() {
    setTodo("");

    if (todo.length < 0) {
      return;
    }

    let data = localStorage.getItem("todos");

    let json;

    if (!data) {
      json = {};
    } else {
      json = JSON.parse(data);
    }

    json[`${todo}`] = false;

    let result = [];

    for (const key in json) {
      if (json.hasOwnProperty(key)) {
        result.push([key, json[key]]);
      }
    }

    localStorage.setItem(`todos`, JSON.stringify(json));
    update(result);
  }

  return (
    <>
      <div className="bar">
        <input
          type="text"
          placeholder="Add a todo"
          className=" block"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="button"
          className="add-btn m-0 block h-[50px] w-[600px] rounded p-0 font-bold text-white"
          onClick={addTodo}
          disabled={todo.length > 0 ? false : true}
        >
          ADD
        </button>
      </div>
    </>
  );
};