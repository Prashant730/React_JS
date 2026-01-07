function Cards(props) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center bg-blue-400 h-64 w-64 text-black font-bold rounded-lg border-10 border-white">
        name:{props.name}<br />
        age:{props.age}
      </div>
    </div>
  )
}
export default Cards