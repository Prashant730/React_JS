import Footer from '../component/Footer'
import Navbar from '../component/Navbar'
import { Route, Routes } from "react-router-dom"
import Home from '../page/Home'
import About from '../page/About'
import Contact from '../page/Contact'
import Product from '../page/Product'
import NotFound from '../page/NotFound'
import Men from '../page/Men'
import Women from '../page/Women'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Footer />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/product/men" element={<Men />} />
            <Route path="/product/women" element={<Women />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  )

}

export default App