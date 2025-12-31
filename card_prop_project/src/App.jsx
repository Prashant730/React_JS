import { useState } from 'react'
import Card from './components/Card'

function App() {
  return (
    <>
      <div className="parent">
        <Card company="Amazon" img="https://m.media-amazon.com/images/I/31epF-8N9LL.png" role="Senior UI/UX Designer" amount="$1200"/>
        <Card company="Google" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZEZ6fa7bPwCI4HE5583rhd3qiFNmf6kiPg&s" role="Software Engineer" amount="$1500"/>
      </div>
    </>
  )
}
export default App
