import { Delete } from "lucide-react";

const TodoItem = ({ todo, markCompleted, deleteTodo }) => {
  return (
    <div className="flex justify-between gap-10 bg-gray-100 p-4 rounded-sm">
      <input type="checkbox"
      className="w-fit"
      checked={todo.completed}
      onChange={()=>markCompleted(todo.id)} />
      <span className={`${todo.completed&&'line-through italic'} flex-1`}>{todo.text}</span>
      <button className="p-2 bg-red-500 rounded-sm"
      onClick={()=>deleteTodo(todo.id)}
      > 
       <Delete className="w-4 h-4 text-white"/>
      </button>
    </div>
  );
};

export default TodoItem;