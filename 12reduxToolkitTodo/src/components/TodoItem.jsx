import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo, toggleComplete} from '../features/todo/todoSlice' 

function TodoItem({todo}) {
  const [isEditabled, setIsEditabled] = useState(false)
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  
  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  const toggleCompleted = () => {
    dispatch(toggleComplete(todo.id))
  }

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 m-2 gap-x-3 shadow-sm shadow-white/50 duration-300 text-[#F9DDA4] ${todo.completed ? 'bg-[#2C3335]':'bg-[#25CCF7]'}`}
    >
      <input 
        type="checkbox" 
        className="cursor-pointer" 
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input 
        type="text" 
      />
    </div>
  )
}

export default TodoItem