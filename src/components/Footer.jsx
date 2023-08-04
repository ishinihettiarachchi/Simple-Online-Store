import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CopyrightIcon from '@mui/icons-material/Copyright';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import './footer.css'
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
        <div className="row1">
        <div className='contentFooter' id="company-description">
            <h3 className='footerTitle' >MiniWeb</h3>
            <div className="descriptions">
                <p className='footerDes'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <div className="icons">
                    <li className='icon'>< FacebookIcon/></li>
                    <li className='icon'>< InstagramIcon/></li>
                    <li className='icon'>< LinkedInIcon/></li>
                    <li className='icon'>< PinterestIcon/></li>
                </div>
            </div>
        </div>
        <div className="quickLinks">
            <div className='contentFooter' id="quick links">
            <h3 className='footerTitle'>Quick Links</h3>
                    <li className='footerlist1'><a href=""><Link to = '/'>Home</Link></a></li>
                    <li className='footerlist1'><a href=""><Link to = '/product'>Product</Link></a></li>
                    <li className='footerlist1'><a href=""><Link to = '/about'>About Us</Link></a></li>
                    <li className='footerlist1'><a href=""><Link to = '/contact'>Contact Us</Link></a></li>
            </div>
        </div>
        
        <div className='contentFooter' id="contact">
        <h3 className='footerTitle'>Contact Us</h3>
            <div className="contactList">
                <div className="list">
                    <span className='contactIcon'><BusinessIcon/></span>
                    <li className='footerlist2'>22/b, Mahawatta, Colombo 7</li>
                </div>
                <div className="list">
                    <span className='contactIcon'><PhoneIcon/></span>
                    <li className='footerlist2'>011-22 34 345</li>
                </div>
                <div className="list">
                    <span className='contactIcon'><EmailIcon/></span>
                    <li className='footerlist2'>miniweb@gamil.com</li>
                </div>
                
                
            </div>
        </div>
        </div>
        <hr />
        <div className="copyright">
        <div className="secondlist">
                    <li className='copyrightIcon'><CopyrightIcon/></li>
                    <li className='text'>Copyright reserved 2023 | MiniWeb </li>
        </div>
            
        </div>
    </div>
  )
}

export default Footer