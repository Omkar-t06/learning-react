import { useState } from 'react';
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    counter += 1;
    console.log('Counter:', counter)
    setCounter(counter);
  }

  const removeValue = () => {
    counter -= 1;
    console.log('Counter:', counter)
    setCounter(counter);
  }
  
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
