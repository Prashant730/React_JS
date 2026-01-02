// batch update by using useState in react js
// what is batch update in react js?
//   Batching is a performance optimization technique used in React to minimize the number of re - renders and DOM updates.When multiple state updates occur within a single event loop tick, React groups them together into a single update, rather than processing each update individually.This reduces the number of times the component needs to re - render, leading to improved performance and a smoother user experience.
// why batch update is used in react js ?
//   Batch update is used in React js to improve the performance of the application by reducing the number of re-renders and DOM updates. By grouping multiple state updates together, React can minimize the amount of work it needs to do, resulting in a more efficient rendering process. This is especially important in applications with complex UIs or frequent state changes, as it helps to ensure that the user interface remains responsive and smooth.
// how to implement batch update in react js?
//   In React, batch updates are implemented automatically for state updates that occur within event handlers, lifecycle methods, and other React - managed contexts.However, if you want to ensure that multiple state updates are batched together, you can use the `unstable_batchedUpdates` API from the `react-dom` package.Here's an example of how to use it:

import { useState } from "react"

function Batchupdate() {

  const [count, setCount] = useState(0)

  function display() {

    // setCount(count+1)
    // setCount(count+1)
    // setCount(count+1)
    // setCount(count + 1)
    // In this case, React will batch these updates together and the final value of count will be incremented by 1, not 4.
    // to batch these updates correctly we can use functional update form of setState like this

    setCount((prev) => prev + 1 )
    setCount((prev) => prev + 1 )
    setCount((prev) => prev + 1 )
    setCount((prev) => prev + 1 )
    // In this case, React will correctly batch these updates together and the final value of count will be incremented by 4.
    //what happen here is when we use the functional update form of setState, React will use the previous state value to calculate the new state value for each update. This ensures that each update is based on the most recent state value, rather than the initial state value when the function was called. As a result, all four updates will be applied correctly, and the final value of count will be incremented by 4.


  }

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={display}>Click</button>
      </div>
    </>
  )
}

export default Batchupdate