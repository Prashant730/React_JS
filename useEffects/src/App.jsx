import {useState} from "react"
import {useEffect} from "react"
function App() {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(10)

  useEffect(function () {
    console.log("use effect is running.....")
  }, // if we don't pass anything then useEffect will run on every render and we will see infinite loop in console

    [] // here we can pass dependencies array
    // if we pass empty array [] then useEffect will run only once when the component is mounted
    // if we don't pass anything then useEffect will run on every render

    // [num1] // if we pass [num1] then useEffect will run only when num1 changes
    // [num2] // if we pass [num2] then useEffect will run only when num2 changes

    // you can pass multiple dependencies in the array
    // if we pass [num1, num2] then useEffect will run when either num1 or num2 changes

  )

  return (
    <>
      <div>
        <h1>value of num1: {num1}</h1>
        <h1>value of num2: {num2}</h1>
        <button onMouseEnter={function () {
          setNum1(num1 + 1)
        }}
          onMouseLeave={function () {
            setNum2(num2 + 1)
          }}>Hover</button>
      </div>
    </>
  )
}

export default App