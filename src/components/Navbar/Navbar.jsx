import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.scss'
import ContactBtn from "../ContactBtn/ContactBtn";
import { Sling as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const [isActive, SetISActive] = useState(0)

  const handleClick = (index) => {
    SetISActive(index)
  }
  
  return (
    <div className="bg-black bg-opacity-70 fixed w-full">
      <header style={{ maxWidth: "1440px", margin: "auto" }} className="relative flex justify-between items-center py-6 px-6">
        <div className="flex justify-between xl:w-2/5 lg:w-1/4 w-full">
        <img src="https://res.cloudinary.com/dgeogsa3t/image/upload/v1707829958/zyjwm8fwclgatu1wzw3x.png" alt="" className="rounded-sm" />
        <div className="lg:hidden block" onClick={() => setShow(!show)}><Hamburger color="red"/></div>
        </div>

      <div className={`${show && "menu"} lg:flex items-center justify-between w-3/4 hidden lg:border-0 border-t-2 border-stone-700`}>
        <nav>
          <ul className="flex lg:flex-row flex-col gap-16 text-white">
            <li>
              <a href="" onClick={() => handleClick(0)} className= {`${isActive === 0 && "active"} relative`}>Home</a>
                
              {/* <Link to="/">Home</Link> */}
            </li>
            <li>
            <a href="/" onClick={() => handleClick(1)} className= {`${isActive === 1 && "active"} relative`}> About</a>
              {/* <Link>About</Link> */}
            </li>
            <li>
              <a href="" onClick={() => handleClick(2)} className= {`${isActive === 2 && "active"} relative`}>Services</a>
            
              {/* <Link>About</Link> */}
            </li>
            <li>
              <a href="" onClick={() => handleClick(3)} className= {`${isActive === 3 && "active"} relative`}>Contact</a>
            
              {/* <Link>About</Link> */}
            </li>
          </ul>
        </nav>

        {/* <Link> */}
          {" "}
          <div className="mt-3">
          <ContactBtn />
          </div>

          </div>
        {/* </Link> */}
        
      </header>
    </div>
  );
};

export default Navbar;
