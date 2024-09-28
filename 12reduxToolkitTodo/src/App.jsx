import { TodoForm, TodoItem, Todos } from './components'

function App() {
  return (
    <div className='bg-[#74B9FF] min-h-screen py-8'>
      <div className='w-full max-w-2xl mx-auto shadow-md px-4 py-3 text-[#FF3E4D] bg-[#192A56]'>
        <h1 className='text-center text-2xl font-bold mb-8 mt-2'>Welcome To Todos</h1>
        <hr className='border-2 border-[#758AA2]'/>
        <div className='mb-4'>
            <TodoForm/>
        </div>
        <Todos/>
      </div>
    </div>
  )
}

export default App
