import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'
import TodoItem from './TodoItem'

function Todos() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return (
    <>
    <div className='text-center text-xl font-bold'>Todos</div>
    <ul className="list-none">
        {todos.map((todo) => (
          <TodoItem key = {todo.id} todo={todo}/>
        ))}
      </ul>
    </>
  )
}

export default Todos