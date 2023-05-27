import React, { useState } from 'react';
import './App.css';
import { log } from 'console';


function App() {

   let[a,setA]= useState(1)

   const onClickHandler=()=>{
     setA(++a)
     console.log(a)
     
   }

   const onClickHandlerNew=()=>{
    setA(0)
    console.log(a)
    
  }

  return (
    <div>
        <h1>{a}</h1>
        <button onClick={onClickHandler}>number</button>
        <button onClick={onClickHandlerNew}>0</button>
   </div>
  )

}

export default App;









