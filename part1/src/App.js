import { useState } from 'react'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => {
   
    setCounter(counter + 1)
  }

  function eraseCounter(){
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter}/>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick = {eraseCounter}>
        zero
      </button>
    </div>
  )
}
export default App