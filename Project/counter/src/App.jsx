import {useState} from "react"
function App() {

  const [num, setNum] = useState(0)

  function increase() {
    setNum(num + 1)
    console.log(num)
  }

  function decrease() {
    setNum(num - 1)
    console.log(num)
  }

  return (
      <div className="flex flex-col justify-center items-center min-h-180">
      <h1>{num}</h1>
      <div className='flex p-4 gap-5'>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
      </div>

      </div>

  )
}

export default App