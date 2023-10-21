import { useState } from 'react';
import './App.css';

function App() {
  let [counter,setCounter] = useState(0);


  let addValue =()=>{
    setCounter(counter => counter+1)

  }
  
  let removeValue=()=>{
   if(counter>0)
   {( setCounter(counter => counter-1))}
   else{
    counter=0;
   }

  }

  return (
    <div className="App">
      <h1>chai aur react</h1>
      <h2>Counter value {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
      <p>footer : {counter}</p>
    </div>
  );
}

export default App;
