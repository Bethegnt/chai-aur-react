import React, { useState } from 'react';


const Header = () => {
    let [counter,setCounter] =useState(0);

    const increase=()=>{
        setCounter(counter+1);
        setCounter(counter+1);
        setCounter(counter+1);
        setCounter(PrevCounter=>PrevCounter+1)
    }
    const decrease=()=>{
        if(counter>0){
            setCounter(counter-1)
        } ;
    }
    
  return (
    <>
    <div>Header - {counter}</div>
    <button onClick={increase}>increase{counter}</button>
    <button onClick={decrease}>Decrease{counter}</button>
    </>
  )
}

export default Header;