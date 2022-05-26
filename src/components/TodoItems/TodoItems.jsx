import TodoItem from "../TodoItem/TodoItem";
import { CardGroup } from "react-bootstrap";

const TodoItems = ({ todos, removeTodo, editTodo }) => {

  return (
    <CardGroup className="flex-column border border-secondary rounded p-3 w-75">
      {todos.length ? todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} editTodo={editTodo} />
      }) : <div>No todos added yet</div>}
    </CardGroup>
  )
}

export default TodoItems;
