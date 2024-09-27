import { useState } from 'react';
import MyButton from './MyButton';

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <MyButton colorName="Red" onTap = {setColor}/>
          <MyButton colorName="Green" onTap = {setColor}/>
          <MyButton colorName="Blue" onTap = {setColor}/>
          <MyButton colorName="Black" onTap = {setColor}/>
          <MyButton colorName="Olive" onTap = {setColor}/>
          <MyButton colorName="Cyan" onTap = {setColor}/>
          <MyButton colorName="Gray" onTap = {setColor}/>
        </div>
      </div>
    </div>
  )
}

export default App
