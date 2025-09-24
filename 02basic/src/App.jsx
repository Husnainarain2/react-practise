import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let  [counter,setCounter] = useState(0)  // usestate is a hook which helps to manage the state in react ,counter is variable and setCounter is function to update the value of counter

  // let counter = 21
  // if(counter >=20){
  //   counter = 20
  // alert("counter value cannot be greater than 20")    this method will not work because react will not re-render the component when we update the value of counter directly

  // }
  // else if(counter<0){
  //    counter=0
  //    alert("counter value cannot be less then 0")
  // }

  let  addValue = () =>{

    //counter = counter + 1
    if(counter < 20){
      
      setCounter(counter + 1)  // to update the value of counter we use setCounter function    }
      console.log("clicked",counter)
    }
    else{
      alert("counter value cannot be greater than 20")
    }
  
    
  }
  
    const removeValue = () =>{
      if (counter>0){
        //counter = counter - 1
        setCounter(counter - 1); 
        console.log("clicked",counter)
        
      }
      else{
        alert("counter value cannot be less than 0")
      }
    }

  return (
    <>
     <h1>chai aur code </h1>
     <h2>counter value : {counter}</h2>
     
     <button onClick={addValue}>Value</button>
     <br />
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
