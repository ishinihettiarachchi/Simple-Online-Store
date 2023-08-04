import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './product.css'
import img from '../images/img.jpeg'

function Product() {
  return (
    <div className='product'>
        <Navbar/>
      <div className="productContainer">
          <div class="sidenav">
            <a href="#">Featured Products</a>
            <a href="#">New Arrivals</a>
            <a href="#">Casuals</a>
            <a href="#">Children items</a>
          </div>

          <div class="productimg">
            <h2>Featured </h2>
              <img src={img} alt="" className='img1'/>
              <img src={img} alt="" className='img1'/>
              <img src={img} alt="" className='img1'/>
              <img src={img} alt="" className='img1'/>
          </div>
        </div>


        <Footer/>
    </div>
  )
}

export default Product
