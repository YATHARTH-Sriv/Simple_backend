import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:4000/api/jokes').then((response)=>{
      setJokes(response.data)
    }).catch((error)=>{console.log(error)})})
    

  return (
    <>
      <p className="  bg-yellow-400 p-2 m-2 text-4xl">Jokes counter</p>
      <p className=' rounded-md text-3xl text-orange-500'>no. of jokes: {jokes.length}</p>
      {
      jokes.map((joke)=>(
        <div key={id}>
          <h2>joke: {joke.title}</h2>
          <p>{joke.content}</p>
        </div>
      ))
      }
    </>
  )
}

export default App
