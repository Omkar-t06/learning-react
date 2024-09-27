import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/Todos'

function App() {
  return (
    <>
      <h1 className='text-center'>Welcome To Todos</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
