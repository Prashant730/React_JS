import AdvUseState from './components/AdvUseState';
import Batchupdate from './components/Batchupdate';

function App() {

  return (
    <>
      <div>
        {/* <AdvUseState /> */}
        <Batchupdate />
      </div>
    </>
  )
}

export default App

//-----------------------------------------------------------------------------------

//in this code the value of a is changing in console when we click on btn but not displaying on screen so to reflect the changes on screen we use useState hook

// function App() {

//   let a = 1

//   function display() {
//     console.log(a)
//     a++
//     console.log(a)
// }

//   return (
//     <>
//       <div>
//         <h1>Value of a: {a}</h1>
//         <button onClick={display}>Click</button>
//       </div>
//     </>
//   )
// }

// export default App

//--------------------------------------------------------------------------------------

//using useState hook to reflect the changes on screen
// import { useState } from "react"

// function App() {

//   const [a, setA] = useState(1);
//   const [userName, setUserName] = useState("Prashant")
//   const [arr , setArr] = useState([1,2,3,4])

//   function display() {
//     setA(30)
//     setUserName("Krish")
//     setArr([5,6,7,8])
//   }

//   return (
//     <>
//       <h1>value of a: {a} <br /> UserName: {userName} <br /> Array: {arr.join(", ")}</h1>
//       <button onClick={display}>click</button>
//     </>
//   )
// }

// export default App


//--------------------------------------------------------------------------------------
// pratice code
// import { useState } from "react"

// function App() {

//   const [num, useNum] = useState(0);

//   function increaseNum() {
//     console.log("increasing")
//     useNum(num + 1)
//   }

//   function decreaseNum() {
//     console.log("decreasing")
//     useNum(num - 1)
//   }

//   return (
//     <>
//       <div className="mx-4 px-4">
//         <div className="flex justify-center bg-gray-500 h-50 items-center rounded-lg"><h1>{num}</h1></div>
//       <div className="flex gap-4 mx-5 py-4">
//         <button onClick={increaseNum}>increase</button>
//         <button onClick={decreaseNum}>decrease</button>
//       </div>
//       </div>
//     </>
//    )
// }

// export default App