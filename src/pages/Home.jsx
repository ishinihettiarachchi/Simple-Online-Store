import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './home.css'
import bannerimg from '../images/bannerimg.jpeg'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <div className="container">
          <div className="banner">
            <div className='bannerContatiner' id="bannerimg">
                <img src={bannerimg} alt="" />
            </div>
            <div className='bannerContatiner' id="bannercontent">
              <div className="offer">
            20% Seasonal Offer
              </div>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to="/about"><button>About Us</button></Link>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Home