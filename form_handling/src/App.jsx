function App() {

  function preventreload(e) {
    e.preventDefault() // Prevents the default form submission behavior which reloads the page
    console.log("submit")
  }

  return (
    <>
      <div>
        <form onSubmit={(e)=> preventreload(e)} className="flex flex-col justify-center gap-4 px-4 mx-4 bg-gray-700 h-64 w-96">
          <input type="text" placeholder="Enter your name" className= "border p-2 rounded-lg"/>
          <button>Submit</button>
        </form>
      </div>
    </>
  )
}

export default App

//  onSubmit={(e)=> preventreload(e)} ==> what is onSubmit here?
// onSubmit is an event handler attribute in HTML forms that triggers a specified function when the form is submitted. In this case, it calls the preventreload function to handle the form submission <event className="submit"></event> without reloading the page.
