import { useState } from 'react';
import NewC from './NewC';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello World</h1>
      <NewC />
    </>
  )
}

export default App