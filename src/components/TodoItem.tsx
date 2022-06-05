import { useApDispatch } from '../hook';
import {toggleComplete, removeTodo, Todo} from '../store/todoSlice';

const TodoItem: React.FC<Todo> = ({ id, title, completed }) => {
  const dispatch = useApDispatch();

  return (
    <li>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => dispatch(toggleComplete(id))}
      />
      <span>{title}</span>
      <span onClick={() => dispatch(removeTodo(id))}>&times;</span>
    </li>
  );
};

export default TodoItem;