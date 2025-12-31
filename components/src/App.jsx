import React from 'react'
import Card from "./components/Card.jsx"
import Navbar from './components/Navbar'
// import "./App.css"

const App = () => {
  return (
    <>
      <Navbar />
      <Card />
      {Card()}
    </>
  )
}

export default App
