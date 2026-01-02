function App() {

  function scroll(elem) {
    console.log("scrolling")
  }

  function Click(click) {
    console.log("click");
  }
  function Mouse(mouse) {
    console.log("mouse")
  }

  function Double(click) {
    console.log("Double Click")
  }

  return(
    <>
      <div className="flex justify-center gap-5"
        // onWheel={function Scroll(elem) { // for scrolling
        // console.log(elem.deltaY)
        // }}

        // onClick={function Click(click) { // for whaenu click
        //   console.log(click)
        //   }}

        // onMouseEnter={function Mouse(mouse) { //for when u hover
        //   console.log(mouse)
        // }}

        onDoubleClick={function double(click) { //for when u Doudble click
          console.log(click)
        }}
      >
        <button className="page1 bg-red-500 px-5 my-5">hi</button>
        <button className="page2 bg-green-500 px-5 my-5">hello</button>
        <button className="page3 bg-blue-500 px-5 my-5">heyy</button>
      </div>

      <div className="flex justify-center gap-5">
        <button onDoubleClick={Double} className="page1 bg-red-500 px-5 my-5">hi</button>
        <button onDoubleClick={Double} className="page2 bg-green-500 px-5 my-5">hello</button>
        <button onDoubleClick={Double} className="page3 bg-blue-500 px-5 my-5">heyy</button>
      </div>

    </>
  )
}
export default App;