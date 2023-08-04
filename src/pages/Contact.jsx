import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import './contact.css'

function Contact() {
  return (
    <div className='contact'>
        <Navbar/>
        <h1 className='heading'>Contact</h1>
        <div className="contactContatiners">
            <div className='container1' id="contactForm">
              <div >
                <input className='contactElements' type="text" id='name' placeholder='Your Name' />
              </div>
              <div>
                <input className='contactElements' type="email" id='name' placeholder='Email' />
              </div>
              <div>
                <textarea className='contactElements' name="message" id="" cols="30" rows="10" placeholder='Message'></textarea>
              </div>
              <div>
                <button>Send</button>
              </div>
            </div>
            <div className='container1' id="contactDetails">
            <div className="contactList1">
                <div className="list1" >
                    <span className='contactDetailIcon'><BusinessIcon/></span>
                    <li className='element'>22/b, Mahawatta, Colombo 7</li>
                </div>
                <div className="list1">
                    <span className='contactDetailIcon'><PhoneIcon/></span>
                    <li className='element'>011-22 34 345</li>
                </div>
                <div className="list1">
                    <span className='contactDetailIcon'><EmailIcon/></span>
                    <li className='element'>miniweb@gamil.com</li>
                </div>
                <hr />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                
                <div className="list2">
                  
                <div className="contactIcons">
                  
                    <li className='icon1'>< FacebookIcon/></li>
                    <li className='icon1'>< InstagramIcon/></li>
                    <li className='icon1'>< LinkedInIcon/></li>
                    <li className='icon1'>< PinterestIcon/></li>
                </div>
                </div>
                
                
            </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact
