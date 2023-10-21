import { useState } from 'react';
import './App.css';

function App() {
  const [counter,setCounter] = useState(0);

  const addValue =()=>{

  }

  const removeValue=()=>{

  }
  
  return (
    <div className="App">
      <h1>chai aur react</h1>
      <h2>Counter value {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br/>

      <button onClick={removeValue}>Remove value</button>
    </div>
  );
}

export default App;
