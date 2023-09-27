import { Todo } from "./Todo";

export const TodoList = ({ todos, handleToggleDone }) => {

  return (
    <div className="col-7">
        {
            todos.map((todo) => {
                return (
                    <Todo
                        key={todo.id}
                        text={todo.text}
                        done={todo.done}
                        onClick={() => handleToggleDone(todo.id)}
                    />
                );
            })
        }
    </div>
  );
};
