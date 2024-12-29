import "./App.css";
import { useMemo, useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import {
  ALL_FILTER_STATE,
  DONE_FILTER_STATE,
  UNDONE_FILTER_STATE,
} from "./constants/appConstants";
import FilterBtns from "./components/FilterBtns";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [buttonFilter, setButtonFilter] = useState(ALL_FILTER_STATE);

  function searchInputChange(v) {
    setSearchInput(v);
  }

  function addTodo(task) {
    if (task !== "") {
      setTodoItems([...todoItems, { task, highlighted: false }]);
    }
  }

  function deleteTodo(index) {
    setTodoItems(todoItems.filter((_, todoIndex) => todoIndex !== index));
  }

  function highlightTodo(task) {
    setTodoItems(
      todoItems.map((todo) =>
        todo.task === task ? { ...todo, highlighted: !todo.highlighted } : todo
      )
    );
  }

  function filterBtnClick(value) {
    setButtonFilter(value);
  }

  const filteredTodoItems = useMemo(() => {
    const filteredToDoItemsBySearch = todoItems.filter(({ task }) =>
      task.includes(searchInput)
    );

    switch (buttonFilter) {
      case DONE_FILTER_STATE:
        return filteredToDoItemsBySearch.filter(
          ({ highlighted }) => highlighted
        );

      case UNDONE_FILTER_STATE:
        return filteredToDoItemsBySearch.filter(
          ({ highlighted }) => !highlighted
        );

      default:
        return filteredToDoItemsBySearch;
    }
  }, [searchInput, buttonFilter, todoItems]);

  return (
    <>
      <Header
        addTodo={addTodo}
        searchInput={searchInput}
        setSearchInput={searchInputChange}
      />
      <List
        todos={filteredTodoItems}
        deleteTodo={deleteTodo}
        highlightTodo={highlightTodo}
        searchInput={searchInput}
      />
      <FilterBtns filterBtnClick={filterBtnClick} />
    </>
  );
}

export default App;
