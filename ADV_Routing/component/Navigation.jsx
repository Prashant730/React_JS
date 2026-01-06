import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {

  const nav = useNavigate()

  function Back() {
    nav(-1)
  }

  function Return() {
    nav("/")
  }

  function Next() {
    nav(+1)
  }

  return (
    <div className="flex gap-5">
      <button onClick={Return}>Return to Home</button>
      <button onClick={Back}>Back</button>
      <button onClick={Next}>Next</button>
    </div>
  )
}

export default Navigation
