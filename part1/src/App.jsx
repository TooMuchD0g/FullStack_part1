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

      <h2>Statistics</h2>

      {clicks.total <= 0 && <p>No Feedback given</p>}
      {clicks.total > 0 && <StatisticsLine text="good" good={clicks.good}/>}
      {clicks.total > 0 && <StatisticsLine text="neutral" neutral={clicks.neutral}/> }
      {clicks.total > 0 && <StatisticsLine text="bad" bad={clicks.bad}/> }
      {clicks.total > 0 && <StatisticsLine text="total" total={clicks.total}/> }
      {clicks.total > 0 && <StatisticsLine text="average" sum={clicks.sum} total={clicks.total}/> }
      {clicks.total > 0 && <StatisticsLine text="percentage" good={clicks.good} total={clicks.total}/>}

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

const Statistics = ({ good, neutral, bad, total, sum }) => {
  let average = sum / total;
  let positivePercentage = (good / total) * 100;

  return (
    <>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {average}</p>
      <p>Positive Percentage: {positivePercentage}% </p>
    </>
  )
}

const StatisticsLine = (props) => {

  let average = props.sum / props.total;
  let positivePercentage = (props.good / props.total) * 100;

  if(props.text == "good")
    return <p>Good: {props.good}</p>
  if(props.text == "neutral")
    return <p>Neutral: {props.neutral}</p>
  if(props.text == "bad")
    return <p>Bad: {props.bad}</p>
  if(props.text == "total")
    return <p>Total: {props.total}</p>
  if(props.text == "average")
    return <p>Average: {average}</p>
  if(props.text == "percentage")
    return <p>Positive: {positivePercentage}%</p>
}
