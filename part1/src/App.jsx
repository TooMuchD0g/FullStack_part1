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

  let average = clicks.sum / clicks.total;
  let positivePercentage = (clicks.good / clicks.total) * 100;


  return (
    <div>
      <UI/>
      <Button onClick={handleGoodClicks} text ="Good +1"/>
      <Button onClick={handleNeutralClicks} text ="Neutral -_-"/>
      <Button onClick={handleBadClicks} text ="Bad +1"/>

      <h2>Statistics</h2>

      <table>
        <tr>
          <td>Good</td>
          <td>{clicks.good}</td>
        </tr>
        <tr>
          <td>Neutral</td>
          <td>{clicks.neutral}</td>
        </tr>
        <tr>
          <td>Bad</td>
          <td>{clicks.bad}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{clicks.total}</td>
        </tr>
        <tr>
          <td>Average</td>
          <td>{average}</td>
        </tr>
        <tr>
          <td>Percentage</td>
          <td>{positivePercentage}%</td>
        </tr>
      </table>


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
