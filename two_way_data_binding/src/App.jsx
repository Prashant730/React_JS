import { useState } from "react"
function App() {

  const [name, setName] = useState("")

  function change(e) {
    e.preventDefault()
    console.log("submit by", name)
    setName("")
  }

  return (
    <>
      <div>
        <form onSubmit={(e) => change(e)} className="flex flex-col justify-center gap-4 px-4 mx-4 bg-gray-700 h-64 w-96">
          <input type="text" placeholder="Enter your name"
          // value="AAAA" // This makes the input field read-only cannot be changed
            value={name} // This makes the input field a controlled component can be changed using state
            onChange={(e) => setName(e.target.value)} // Two-way data binding
          //what it is doing is whenever there is a change in the input field, it captures the value using e.target.value and updates the state using setName function. This updated state is then reflected back in the input field through the value attribute.
            className="border p-2 rounded-lg" />
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App

// onChange={(e)=>console.log(e.target.value )} --> it captures the value entered in the input field
// onChange = {(e)=> console.log(e.target)}--> it captures the whole input element
// onChange = {(e)=> console.log(e)}--> it captures the event object
// onChange = {(e)=> console.log("inputing...")}--> it captures the string "inputing..." every time we type in the input field
// onChange = {()=> console.log("inputing...")}--> it captures the string "inputing..." every time we type in the input field