import DeleteButton from "./DeleteButton";
import { ListItem } from "@mui/material";

function MyListItem({ todo, deleteTodo, highlightTodo, searchInput }) {
  if (!todo.task.toLowerCase().includes(searchInput.toLowerCase())) {
    return null;
  }

  return (
    <ListItem>
      <div className="container">
        <div
          className="toDoTitle"
          onClick={() => highlightTodo(todo.task)}
          style={{
            cursor: "pointer",
            textDecoration: todo.highlighted ? "line-through" : "none",
          }}
        >
          <h1
            className="value"
            onClick={() => highlightTodo(todo.task)}
            style={{
              cursor: "pointer",
              textDecoration: todo.highlighted ? "line-through" : "none",
              backgroundColor: todo.highlighted
                ? "rgba(25, 118, 210, 0.5)"
                : "#F6F6F6",
            }}
          >
            {todo.task}
          </h1>
        </div>
        <div className="delete">
          <DeleteButton
            onClick={(e) => {
              e.stopPropagation();
              deleteTodo();
            }}
          />
        </div>
      </div>
    </ListItem>
  );
}

export default MyListItem;
