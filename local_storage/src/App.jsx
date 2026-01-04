function App() {

  // localStorage.clear() // clears all the data stored in local storage
  // localStorage.setItem("user","Prashant") // sets the key "user" with value "Prashant" in local storage
  // localStorage.setItem("use","Prashant") // sets the key "use" with value "Prashant" in local storage
  //localStorage.removeItem("use") // removes the key "use" from local storage
  //localStorage.getItem("user") // gets the value of the key "user" from local storage

  const user = {
    name: "Prasahnt",
    age: 21,
    city:"Patna"
  }
  // console.log(user) // output: { name: 'Prasahnt', age: 21, city: 'Patna' }
  let a = localStorage.setItem("user", JSON.stringify(user)) // converting object to string and storing in local storage
  // console.log(a) // output: undefined
  let b = JSON.parse(localStorage.getItem("user")) // converting string back to object
  console.log(b) // output: { name: 'Prasahnt', age: 21, city: 'Patna' }

  return (
    <>
      <div>
        <h1>Local Storage Example</h1>
      </div>
    </>
  )
}

export default App