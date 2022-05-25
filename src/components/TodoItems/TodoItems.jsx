import TodoItem from "../TodoItem/TodoItem";
import { CardGroup } from "react-bootstrap";

const TodoItems = () => {
  return (
    <CardGroup className="flex-column border border-secondary rounded p-3 w-75">
      <TodoItem />
      <TodoItem />
    </CardGroup>
  )
}

export default TodoItems;
