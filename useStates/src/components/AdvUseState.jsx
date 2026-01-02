// import {useState} from "react"

// function AdvUseState() {

//   const [num, useNum] = useState(0);

//   function display() {
//     console.log(`value: ${num}`);
//     useNum(num + 1);
//   }

//   return (
//     <>
//       <div>
//         <h1>{num}</h1>

//          {/* Do NOT use onClick={display()} here.
//           Calling display() immediately invokes the function during render, causing an infinite re-render loop if it updates state.
//           Instead, pass the function reference: onClick={display} */}

//         <button onClick={display}>click</button>
//       </div>
//     </>
//   )
// }

// export default AdvUseState


//-----------------------------------------------------------------------------------

// using hooks to change the object values
// import { useState } from "react"
// function AdvUseState() {

//   const [arr, useArr] = useState({ user: "Prashant", age: 20 })

//   function display() {
//     useArr({user:"Krish" , age: 18})
//     console.log(arr)
//   }
//   return (
//     <>
//       <div>
//         <h1>{arr.user} {arr.age}</h1>
//         <button onClick={display}>click</button>
//       </div>
//     </>
//   )
// }

// export default AdvUseState

//----------------------------------

//destructuring method to update object values because direct update will replace the whole object

// import { useState } from "react"

// function AdvUseState() {

//   const [num, setNum] = useState({ user: "Prashant", age: 21 })

//   function btnClicked() {
//     const newNum = { ...num } // Create a shallow copy of the current state/object (destructuring method)
//     newNum.user = "Krish" // Update the desired property
//     newNum.age = 18
//     setNum(newNum) // Set the new object as the state
//     console.log(num)
//   }

//   return (
//     <>
//       <div>
//         <h1>{num.user} {num.age}</h1>
//         <button onClick={btnClicked}>click</button>
//       </div>
//     </>
//   )
// }

// export default AdvUseState

//what happen here is when we click on the button the btnClicked function is called which creates a shallow copy of the current state object using the spread operator (...). Then, it updates the desired properties (user and age) of the new object. Finally, it sets the new object as the state using setNum(newNum). This way, we ensure that we are not mutating the original state directly, and React can properly detect the changes and re-render the component with the updated values.
// why ? because in react state should be immutable meaning we should not directly modify the state object instead we should create a new object with the updated values and set it as the new state this allows react to properly detect changes and re render the component accordingly
// why we need it ? because if we directly modify the state object react may not detect the changes and may not re render the component leading to unexpected behavior in the UI

//-------------------------------------------------------------------------------------

// using hooks to change the array values

import { useState } from "react"

function AdvUseState() {

  const [arr, setArr] = useState([1, 2, 3, 4])
  function display() {

    // useArr([5, 6, 7, 8]) //this will replace the whole array with new array
    //why not use useArr directly to push new value to array because in react state should be immutable meaning we should not directly modify the state array instead we should create a new array with the updated values and set it as the new state this allows react to properly detect changes and re render the component accordingly
    //why not arr.push(5) and then use setArr(arr) because arr.push(5) modifies the original array directly which is against the immutability principle in react so react may not detect the changes and may not re render the component leading to unexpected behavior in the UI

    const newArr = [...arr] //destructuring method to create a shallow copy of the array
    newArr.push(5) //modifying the new array
    setArr(newArr) //setting the new array as the state
    console.log(arr)
  }
  return (
    <>
      <div>
        <h1>{arr.join(", ",)}</h1>
        <button onClick={display}>click</button>
      </div>
    </>
  )
}

export default AdvUseState
