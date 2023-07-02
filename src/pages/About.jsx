import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import bannerimg2 from '../images/bannerimg2.jpeg'
import './about.css'


function About() {
  return (
    <div className='about'>
        <Navbar/>
        <div className="container">
          <div className="banner">
            
            <div className='bannerContatiner' id="bannercontent">
              
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               <br /><br />
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to="/product"><button>Explore</button></Link>
            </div>
            <div className='bannerContatiner' id="bannerimg">
                <img src={bannerimg2} alt="" />
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default About