import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <UI/>
      <div>
      <Button onClick={()=>setGood(good +1)} text ="Good +1"/>
      <Button onClick={()=>setNeutral(neutral +1)} text ="Neutral -_-"/>
      <Button onClick={()=>setBad(bad +1)} text ="Bad +1"/>
      </div>
      <Stats good={good} neutral={neutral} bad={bad}/>
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

const Stats = (props) =>{
  return(
    <>
      <h2>Statistics</h2>
      <p>{props.good}</p>
      <p>{props.neutral}</p>
      <p>{props.bad}</p>
    </>

  )
}