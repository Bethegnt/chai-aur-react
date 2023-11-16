import React, { useState } from 'react'

const App = () => {
    const [count,setCount] = useState(0);
  return (
    <h1 className='text-3xl bg-orange-500'>Currency App</h1>
  )
}

export default App