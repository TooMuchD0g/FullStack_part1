import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [rank, setRank] = useState(new Uint8Array(anecdotes.length))

  const handleClick = () => {
    let number = anecdotes.length
    let randomAnecdote = Math.floor(Math.random() * number)
    setSelected(randomAnecdote)
  }

  const handleRankClick = () => {
    const copy = [...rank]
    copy[selected] += 1
    setRank(copy)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>Has {rank[selected]} votes</p>
      <button onClick={handleRankClick}>vote</button>
      <button onClick={handleClick}>next anecdote</button>
      <MostPopularAnecdote anecdotes={anecdotes} rank={rank} />
    </div>
  )
}

const MostPopularAnecdote = ({ rank, anecdotes}) => {

  const maxIndex = rank.indexOf(Math.max(...rank))

  return(
    <>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[maxIndex]}</p>
      <>Has {Math.max(...rank)} votes</>
    </>
  )
}

export default App