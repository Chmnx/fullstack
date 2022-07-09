import { useState } from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}
const Display = props => <div>{props.value}</div>


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [ counter, setCounter ] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      <div>
        {left}
        <Button handleClick={handleLeftClick} text='left' />
        <Button handleClick={handleRightClick} text='right' />
        {right}
        <History allClicks={allClicks} />
        <button onClick={() => console.log('clicked')}>
      </div>
    </div>
  )
}
export default App



const Statistics = (props) => {
  
  const Kaikki = () => { 
    return good + neutral + bad
  }
  const StatisticLine = (props) => { 
    return good + neutral + bad
  }


  return props.good + props.neutral + props.bad
}
const StatisticLine = (props) => { 
return props.good + props.neutral + props.bad
}}



const Statistics = (props) => {
  const { good, bad, neutral } = props
  const Ball = () => good + neutral + bad

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  )
}



const All = () => good
    return(
      <div>
        <All text="All" value ={good+neutral+bad} />
      </div>
    )
  const StatisticLine = () => good
    return(
      <div>
        <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />
      </div>
    )
  }
  const StatisticLine = () => good+bad+neutral

  <StatisticLine text="good" value ={good} />
        <StatisticLine text="neutral" value ={neutral} />
        <StatisticLine text="bad" value ={bad} />

  <Statistics StatisticsLine/>
      <Statistics All good={good+neutral+bad}/>
      <Statistics All good={good+neutral+bad}/>
      <p><Statistics All good={good+neutral+bad} /></p> 
      <p>All {good+neutral+bad}</p> <Statistics All good={good+neutral+bad} />
      <p>Positive {good/(good+neutral+bad)}</p> <Stats good={good} />
      <p>Average {((good*1)+(neutral*0)+(bad*-1))/(good+neutral+bad)}</p> <Stats good={good} />


      const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const {good,bad,neutral} = props

const {good,bad,neutral} = props

Positive: {good/(good+neutral+bad)}
Average: {((good*1)+(neutral*0)+(bad*-1))/(good+neutral+bad)}

Average: {props.average}