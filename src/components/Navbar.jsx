import React from 'react'
import './navbar.css'
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';

function navbar() {
  return (
    <div className='navbar'>
        <div className="logo">
        <div className="logoContent" id='img'><StorefrontOutlinedIcon/></div>
        <div className="logoContent" id='title'>MiniWeb</div>    
        </div>
        <div className="navlist">
           
                <li><a href=""><Link to ='/'>Home</Link></a></li>
                <li><a href=""><Link to ='/product'>Product</Link></a></li>
                <li><a href=""><Link to ='/about'>About Us</Link></a></li>
                <li><a href=""><Link to ='/contact'>Contact Us</Link></a></li>
          
        </div>
        <div className="navlist2">
           
                <li><a href=""><Link to ='/shopping-cart'><ShoppingCartIcon/></Link></a></li>
                <li><a href=""><AccountCircleIcon/></a></li>
            
          
        </div>
     
    </div>
       
  )
}

export default navbar