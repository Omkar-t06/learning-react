import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharacterAllowed, setSpecialCharacterAllowed] = useState(false);

  //useRef hook
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklimnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(numberAllowed) str += "0123456789";
    if(specialCharacterAllowed) str += "~!@#$%^&*()-_=+[]{}:;<>,./?";

    for (let i = 1; i <= length; i++) {
      let char = str[Math.floor(Math.random() * str.length)];
      pass += char;
    }

    setPassword(pass);
  }, [length, numberAllowed, specialCharacterAllowed, setPassword])

  useEffect(() => {
    generatePassword();
  },[length,numberAllowed, specialCharacterAllowed, generatePassword])

  const copyToClipboard = ()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password}
        className='w-full px-1 py-2'
        placeholder='PASSWORD'
        readOnly
        ref={passwordRef}
        />
        <button 
        className='outline-none bg-blue-400 text-white px-4 py-0.5 shrink-0'
        onClick={copyToClipboard}
        >COPY</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          onChange={(e)=>{setLength(e.target.value)}}
          className='cursor-pointer'
          />
          <label>length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked = {numberAllowed}
          id='numberInput'
          onChange={() => {
            setNumberAllowed((prev)=>!prev)
          }}
          />
          <label htmlFor='numberInput'>Number</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultChecked = {specialCharacterAllowed}
          id='numberInput'
          onChange={() => {
            setSpecialCharacterAllowed((prev)=>!prev)}
          }            
          />
          <label htmlFor='numberInput'>Char</label>
        </div>
      </div>
    </div>
  )
}

export default App 
