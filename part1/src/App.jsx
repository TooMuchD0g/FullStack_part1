import { useState } from 'react'

const App = () => {
  // saving all clicks to a single object\
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0, bad:0, total:0, sum: 0
  })

  const handleGoodClicks = () => 
    setClicks({...clicks, sum: clicks.sum + 1, total: clicks.total + 1, good: clicks.good + 1})

  const handleNeutralClicks = () =>
    setClicks({...clicks, total: clicks.total + 1, neutral: clicks.neutral + 1})

  const handleBadClicks = () =>
    setClicks({...clicks, sum: clicks.sum - 1, total: clicks.total + 1, bad: clicks.bad + 1})


  return (
    <div>
      <UI/>
      <Button onClick={handleGoodClicks} text ="Good +1"/>
      <Button onClick={handleNeutralClicks} text ="Neutral -_-"/>
      <Button onClick={handleBadClicks} text ="Bad +1"/>
      <Statistics good={clicks.good} neutral={clicks.neutral} bad={clicks.bad} sum={clicks.sum} total={clicks.total}/>      
    </div>
  )
}

export default App

const Button = ({ onClick, text }) => (
  <div>
    <button onClick={onClick}>{text}</button>
  </div>
)

const UI = () => {
  return(
    <>
      <h1>UniCafe Feedback Form</h1>
    </>
  )
}

const Statistics = (props) =>{

  let sum = props.sum
  let positive = props.good
  let totalClicks = props.total
  let average = sum/totalClicks
  let postivePercentage = (positive/totalClicks)*100

  return(
    <>
      <h2>Statistics</h2>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>Total: {props.total}</p>
      <p>Average: {average}</p>
      <p>Positive Percentage: {postivePercentage}% </p>
    </>
  )
}