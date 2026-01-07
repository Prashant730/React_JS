import { useEffect } from "react"
import { useState } from "react"

function Basic() {

  const [num, setNum] = useState(0)
  const [num1, setNum1] = useState(0)

  function display() {
    setNum(num + 1)
  }

  function display1() {
    setNum1(num1 - 1)
  }

  useEffect(function () {
    console.log("useEffect is running.....")
  },[num])



  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-5">
      <h1>value of num and num1 : {num},{num1}</h1>
      <div className="flex gap-4">
        <button onClick={display}>+1</button>
        <button onClick={display1}>-1</button>
      </div>

    </div>
  )
}

export default Basic