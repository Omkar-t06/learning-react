import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-5 rounded-xl mb-4'>
        TailWind Test
      </h1>
      <Card username= "Chai Aur Code" />
    </>
  )
}

export default App
