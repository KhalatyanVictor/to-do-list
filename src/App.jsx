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
import { useDispatch, useSelector } from "react-redux";
import { addToDo, selectToDoItems } from "./redux/toDo";

function App() {
  // const [todoItems, setTodoItems] = useState([]);
  const toDoItems = useSelector(selectToDoItems);
  const [searchInput, setSearchInput] = useState("");
  const [buttonFilter, setButtonFilter] = useState(ALL_FILTER_STATE);

  const dispatch = useDispatch();

  function searchInputChange(v) {
    setSearchInput(v);
  }

  function addTodoClick(task) {
    if (task !== "") {
      dispatch(addToDo(task));
    }
  }

  function deleteTodo(index) {
    // We should dispatch deleteToDo action
    // setTodoItems(todoItems.filter((_, todoIndex) => todoIndex !== index));
  }

  function highlightTodo(task) {
    // We should dispatch toggle highlight action
    // setTodoItems(
    //   todoItems.map((todo) =>
    //     todo.task === task ? { ...todo, highlighted: !todo.highlighted } : todo
    //   )
    // );
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
        addTodo={addTodoClick}
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
