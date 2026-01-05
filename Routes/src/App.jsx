import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "/pages/Home.jsx"
import About from "/pages/About.jsx"
import Contact  from "/pages/Contact.jsx"
function App() {
  return (
    <div>
      <div className="flex justify-center p-5 bg-green-200">
        <div className="flex items-center w-full max-w-8xl justify-between">
          <h3 className="font-bold text-xl text-black">Hostel</h3>
          <div className="flex gap-5 text-lg">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

      </div>
      <div className="flex justify-center items-center min-h-screen text-6xl font-bold">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App