import {useState} from "react"
function App() {

  const [count, setCount] = useState({ good: 0, bad: 0 })
  const [selected, setSelected] = useState("")

  function submit() {
    if (selected == "Good") {
      setCount({...count,good:count.good + 1})
    } else if(selected == "Bad"){
      setCount({...count,bad:count.bad + 1})
    } else {
      setSelected("")
    }
  }

  return (
    <div>
      <h1 className="flex justify-center">Give Review </h1>
      <h3 className="flex justify-center">Good:{count.good} </h3>
      <h3 className="flex justify-center">Bad:{count.bad} </h3>
      <div className="flex justify-center gap-4">
      <label>
        <input type="radio" name="feedback" value="Good" checked={selected == "Good"}
          onChange={(e)=>setSelected(e.target.value) } />Good
      </label>

      <label>
        <input type="radio" name="feedback" value="Bad" checked={selected == "Bad"}
          onChange={(e)=>setSelected(e.target.value) } />Bad
      </label>
      </div>
      <div className='flex justify-center'>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  )
}
export default App