import React from 'react'
import './Navbar.css';
import { Link } from "react-scroll";
//import Toggle from '../Toggle/Toggle';



function NavbarStyle() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">NFT-Automation Framework</div>
            {/* <Toggle/> */}
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>

                <Link spy={true} to='' smooth={true} activeClass='activeClass'>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to='' smooth={true} >
                            <li>Soak Testing</li>
                        </Link>
                        <Link spy={true} to='' smooth={true} >
                            <li>Stress Testing</li>
                        </Link>
                        <Link spy={true} to='' smooth={true} >
                            <li>Flood Testing</li>
                        </Link>
                        {/* <Link spy={true} to='' smooth={true} >
                            <li>Contact</li>
                        </Link>
                     */}
                    {/* <li>Testimonials</li> */}
                </ul>
            </div>
            <Link spy={true} to='contact-form' smooth={true}>
            <button className="button n-button">
                Logout
            </button>
            </Link>
        </div>
    </div>
  )
}

export default NavbarStyle;