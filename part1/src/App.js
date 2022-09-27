import { useState } from 'react'
import Display from './Display'
import Button from './Button'



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
      
      <Button onClick = {increaseByOne} text = 'Plus One'/>
      <Button onClick = {eraseCounter} text = 'Set Zero'/>
    </div>
  )
}
export default App