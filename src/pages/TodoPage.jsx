import { useState } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";

const initialState = {
    id: new Date().getTime(),
    text: "Todo #1",
    done: false
}

export const TodoPage = () => {
    const [todoList, setTodoList] = useState([initialState]);

    const handleToggleDone = (id) => {
      const todosActualizados = todoList.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
        return todo
      })
  
      setTodoList(todosActualizados)
    }
  
  
    return (
      <div className="container-fluid row pt-4">
        <TodoForm setTodoList={setTodoList} todoList={todoList} />
        <TodoList todos={todoList} handleToggleDone={handleToggleDone} />
      </div>
    )
}
