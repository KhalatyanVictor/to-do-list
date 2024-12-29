import { useState } from "react";
import SharedBtn from "./SharedButton";
import { Input } from "@mui/material";

function Header({ addTodo, searchInput, setSearchInput }) {
  const [input, setInput] = useState("");

  function handleAddClick() {
    addTodo(input);
    setInput("");
  }

  return (
    <div>
      <h1 className="headerText">To Do List</h1>
      <div className="inputButtonDiv">
        <Input
          id="inputId"
          type="text"
          placeholder="Add Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SharedBtn
          onClick={handleAddClick}
          className="sharedBtn"
          name={"Add"}
        />
        <Input
          id="inputId"
          type="text"
          placeholder="Search Todo"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Header;
