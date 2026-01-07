import Cards from "../comp/Cards"
function App() {
  return (
    <div className='flex justify-center item-center min-h-screen gap-10'>
      <Cards name="Prashant" age="21"/>
      <Cards name="Aryan" age="19"/>
    </div>
  )
}
export default App