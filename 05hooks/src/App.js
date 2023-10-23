import { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [length,setLength] = useState(0);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [charallowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = " "
    let str = 
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str+="0123456789"
    if(charallowed) str+="!@#$%^&*()_+{}[]|\:;?/><,."
    
    for(let i=1;i<=Array.length;i++){
      let char = Math.floor(Math.random()*str.length+1);
      pass = str.charAt(char);
    }
    setPassword(pass)
      
    },
    [length,numberAllowed,charallowed,setPassword])
  
  return (
    <>
    <h1 className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
      
      password generator
    </h1>
    </>
  );
}

export default App;
