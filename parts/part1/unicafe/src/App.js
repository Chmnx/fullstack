import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => { 
  
  if (props.allClicks == 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  if (props.good > 0) {
  return (
    <div>
      Good: {props.good}
    </div>
  )
}

if (props.neutral > 0) {
  return (
    <div>
      Neutral: {props.neutral}
    </div>
  )
}
if (props.bad > 0) {
  return (
    <div>
      Bad: {props.bad}
    </div>
  )
}
if (props.allClicks > 0) {
  return (
    <div>
      All: {props.allClicks}
    </div>
  )
}

if (props.positive>0){
  return (
    <div>
      Positive: {props.positive}
    </div>
  )
}

if (props.average>-1){
  return (
    <div>
      Average: {props.average}
    </div>
  )
}
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)

  const handlegoodClick = () => {
    setAll(allClicks+ 1)
    setGood(good + 1)
  }

  const handleneutralClick = () => {
    setAll(allClicks+ 1)
    setNeutral(neutral + 1)
  }

  const handlebadClick = () => {
    setAll(allClicks+ 1)
    setBad(bad + 1)
  }

  return (
    <div>
      <h>Give feedback</h>
      <p></p>
      <Button handleClick={handlegoodClick} text='Good' />
      <p></p>
      <Button handleClick={handleneutralClick} text='Neutral' />
      <p></p>
      <Button handleClick={handlebadClick} text='Bad' />
      <p></p>
      <h>Statistics</h>
      <StatisticLine good={good}/>
      <StatisticLine neutral={neutral} />
      <StatisticLine bad={bad} />
      <StatisticLine allClicks={allClicks} />
      <StatisticLine positive={good/allClicks}/>
      <StatisticLine average={((good*1)+(neutral*0)+(bad*-1))/allClicks}/>
      <p></p>
    </div>
  )
}

