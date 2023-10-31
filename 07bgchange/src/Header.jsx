import React, {useState}from 'react';


const Header = () => {
    let [color,SetColor]=useState('olive');

  return (
    <>
    
    <div className='Container' style={{backgroundColor:color}}>
    <h1 className='heading'>Choose your Color</h1>
    <div id='colors'>
        <ul>
            <li style={{backgroundColor:'red'}} onClick={()=>{SetColor('red')}}>RED</li>
            <li style={{backgroundColor:'green'}} onClick={()=>{SetColor('green')}}>GREEN</li>
            <li style={{backgroundColor:'blue'}} onClick={()=>{SetColor('blue')}}>BLUE</li>
            <li style={{backgroundColor:'olive'}} onClick={()=>{SetColor('olive')}}>OLIVE</li>
            <li style={{backgroundColor:'gray'}} onClick={()=>{SetColor('gray')}}>GRAY</li>
            <li style={{backgroundColor:'yellow'}} onClick={()=>{SetColor('yellow')}}>YELLOW</li>
            <li style={{backgroundColor:'pink'}} onClick={()=>{SetColor('pink')}}>PINK</li>
            <li style={{backgroundColor:'lavender'}} onClick={()=>{SetColor('lavender')}}>LAVENDER</li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default Header;
