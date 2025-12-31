import React from 'react'
import Card from "./components/Card.jsx"
import './App.css'
const App = () => {
  return (
    <div className="parent">
      <Card user="Prashant Kumar" age={21} img="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_640.png" />
      <Card user="Krish Kumar" age={22} img="https://st.depositphotos.com/2101611/4338/v/450/depositphotos_43381243-stock-illustration-male-avatar-profile-picture.jpg" />
    </div>
  )
}

export default App
