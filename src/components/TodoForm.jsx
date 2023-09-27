import { useState } from "react";

export const TodoForm = ({ setTodoList, todoList }) => {

    const [text, setText] = useState("")


  return (
    <div className="col-5">
        <label htmlFor="content">Content:</label>
        <input
            type="text"
            placeholder="My new todo"
            id="content"
            value={text}
            onChange={e => setText(e.target.value)}
            onKeyUpCapture={(e) => {
                if(e.key !== 'Enter') return;

                setTodoList([
                    ...todoList,
                    {
                        id: new Date().getTime(),
                        text: text,
                        done: false
                    }
                ])

                setText("")
            }}
        />
    </div>
  )
}
