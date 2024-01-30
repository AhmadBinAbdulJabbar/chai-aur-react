import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)
  // let counter  = 0
  const addValue = () => {
    // console.log("Value added", Math.random());
    // setCounter(counter + 1)
    if (counter < 20) {
      counter = counter + 1
      setCounter(counter)
      console.log("Clicked", counter);
    }
  }

  const removeValue = () => {
    if (counter > 0){
      counter -= 1
      setCounter(counter)
      console.log("Remove Clicked", counter);
    }
  }


  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>remove Value {counter} </button>
      <p>Footer {counter} </p>
    </>
  )
}

export default App
