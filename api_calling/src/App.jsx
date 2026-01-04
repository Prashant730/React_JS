// // fetch method
// function App() {

//   // function getData(){
//     // const responce1 = fetch("https://jsonplaceholder.typicode.com/todos/1")
//     // console.log(responce1) // Promise {<pending>} because fetch is asynchronous and returns a promise which is not yet resolved.
//   // }

//   // why we use async and await? because fetch is an asynchronous operation and it returns a promise. so we use async and await to handle the promise and get the data when the promise is resolved.
//   async function getData1() {
//     const responce = await fetch("https://jsonplaceholder.typicode.com/todos")
//     // console.log(responce) // Response {type: 'cors', url: 'https://jsonplaceholder.typicode.com/todos', redirected: false, status: 200, ok: true, …}
//     const data = await responce.json() // converting responce to json format and why we use await responce.json() because responce.json() is also a asynchronous operation which returns a promise. so we use await to wait for the promise to resolve. and get the json data.
//     console.log(data)
//   }

//   return (
//     <>
//       <div>
//         <button onClick={getData1}>Click</button>
//       </div>
//     </>
//   )
// }

// export default App

//-------------------------------------------------------------------------------------

//Axios mathod
// import axios from "axios"
// function App() {

//   async function getData() {
//     const responce = await axios.get("https://jsonplaceholder.typicode.com/todos")
//     console.log(responce) // responce object with data, status, headers, config, request
//     console.log(responce.data) // logging only data part from responce object
//   }

//   return (
//     <>
//       <div>
//         <button onClick={getData}>Click</button>
//       </div>
//     </>
//   )
// }

// export default App

//-------------------------------------------------------------------------------------

// Axios with useState
// why? because we want to store the data in a state variable and display it in the UI.
import { useState } from "react"
import axios from "axios"

function App() {

  const [data, setData] = useState([])
  async function getData() {
    const responce = await axios.get("https://jsonplaceholder.typicode.com/todos")
    setData(responce)
    setData(responce.data)
  }
  return (
    <>
      <div>
        <button onClick={getData}>Click</button>
      </div>
      <div>
        {data.map(function (elem, idx) {
          return <h3 key={idx}>{elem.title}</h3>
        })}
      </div>
    </>
  )
}
export default App