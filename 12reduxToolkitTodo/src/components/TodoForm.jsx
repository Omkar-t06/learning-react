import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function TodoForm() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const add = (e) => {
      e.preventDefault();

      if(!todo) return;

      dispatch(addTodo({text: todo, completed: false}));
      setTodo("");
  }

  return (
    <form onSubmit={add} className='flex m-1'>
      <input
                type="text"
                placeholder="Add a Todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
    </form>
  )
}

export default TodoForm