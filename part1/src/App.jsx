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

const Statistics = ({ good, neutral, bad, total, sum }) => {
  let average = sum / total;
  let positivePercentage = (good / total) * 100;

  console.log("This is the total: ",total)

  if(total<=0)
    return <div><h1>No feedback given</h1></div>

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
