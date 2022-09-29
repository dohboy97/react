import { useState } from 'react'
import Button from './Button'
import Display from './Display'
import Statistics from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function handleGoodClick(){
    setGood(good+1)
    return good
  }

  function handleNeutralClick(){
    setNeutral(neutral+1)
    return neutral
  }

  function handleBadClick(){
    setBad(bad+1)
    return bad
  }

  return (
    <div>
      <Button handleClick = {handleGoodClick} text='Good' />
      <Button handleClick = {handleNeutralClick} text='Neutral' />
      <Button handleClick = {handleBadClick} text='Bad' />


      <Display counter = {`Good: ${good}`}/>
      <Display counter = {`Neutral: ${neutral}`}/>
      <Display counter = {`Bad: ${bad}`}/>
      <Display counter = {good+neutral+bad}/>

      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App