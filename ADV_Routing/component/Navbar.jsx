import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex justify-between p-5 bg-stone-500 items-center">
      <h3 className="text-xl font-bold">Navbar</h3>
      <div className="flex gap-8">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </div>
    </div>
  )
}

export default Navbar
