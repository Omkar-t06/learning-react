import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {toggleComplete, updateTodo, removeTodo} from '../features/todo/todoSlice' 

function TodoItem({todo}) {
  const [isEditabled, setIsEditabled] = useState(false)
  const [todoText, setTodoText] = useState(todo.text)
  const dispatch = useDispatch()
  
  const editTodo = () => {
    dispatch(updateTodo({
      id: todo.id,
      text: todoText
    }))
    setIsEditabled(!isEditabled)
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
        value={todoText}
        readOnly = {!isEditabled}
        onChange={(e) => setTodoText(e.target.value)}
        className={`
          border outline-none w-full rounded-lg
          ${isEditabled ? "border-black/10 px-2 text-black" : " border-none bg-inherit"}
          ${todo.completed ? "line-through" : ""}
        `}
      />
      <button
        className={`inline-flex py-1 px-4 rounded-lg text-sm justify-center items-center shrink-0 disabled:opacity-50 ${todo.completed ? 'bg-[#2C3335] cursor-not-allowed':'bg-gray-50 border border-black/10 hover:bg-gray-100'}`}
        onClick={() => {
          if(todo.completed) return;
          if(isEditabled) {
            editTodo()
          } else
            setIsEditabled((prev) => !prev)
        }}
      >
        {isEditabled? "📁" : "✏️"}
      </button>
      <button
        onClick={() => dispatch(removeTodo(todo.id))}
        className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
      >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        >
          <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>
    </div>
  )
}

export default TodoItem