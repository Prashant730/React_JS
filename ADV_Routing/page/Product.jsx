import React from 'react'
import { Link } from "react-router-dom"
import Navigation from '../component/Navigation'

const Product = () => {
  return (
    <div>
      <Navigation />
      <div className="flex justify-center gap-10">
        <Link to="/product/men">Men</Link>
        <Link to="/product/women">Women</Link>
      </div>
      <h1 className='flex justify-center items-center text-8xl min-h-100 font-bold'>Product page</h1>
    </div>
  )
}

export default Product
