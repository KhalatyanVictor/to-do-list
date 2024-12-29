import { List } from '@mui/material';
import MyListItem from './ListItem';


function MyList({ todos, deleteTodo, highlightTodo, searchInput }) {
  return (
    <List>
       {todos.map((todo, index) => (
        <MyListItem
          key={index}
          todo={todo}
          deleteTodo={() => deleteTodo(index)}
          highlightTodo={highlightTodo}
          searchInput={searchInput}
        />
      ))}
    </List>

  );
}

export default MyList;
