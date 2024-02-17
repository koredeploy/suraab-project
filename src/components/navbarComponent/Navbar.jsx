import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.scss'
import ContactBtn from "../ContactBtn/ContactBtn";
import { Sling as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const [show, setShow] = useState(false)
  const [isActive, SetISActive] = useState(0)

  const handleClick = (index) => {
    SetISActive(index)
  }
  
  return (
    <div className="bg-black bg-opacity-70 top-0 w-full">
      <header style={{ maxWidth: "1440px", margin: "auto" }} className="relative w-11/12 text-white-100 flex justify-between items-center py-6 ">
        <div className="flex justify-between xl:w-2/5 lg:w-1/4 w-full items-center">
        <img src="https://res.cloudinary.com/dgeogsa3t/image/upload/v1707829958/zyjwm8fwclgatu1wzw3x.png" alt="" className="rounded-sm" />
        <div className="lg:hidden block" onClick={() => setShow(!show)}><Hamburger color="red"/></div>
        </div>

      <div className={`${show && "menu"} lg:flex items-center justify-between w-3/4 hidden border-0 lg:border-0 border-t-2 border-stone-700`}>
        <nav>
          <ul className="flex lg:flex-row flex-col gap-16 text-white">
            <li>  
              <Link to="/" onClick={() => handleClick(0)} className= {`${isActive === 0 && "active"} relative`}>Home</Link>
            </li>
            <li>
              <Link onClick={() => handleClick(1)} className= {`${isActive === 1 && "active"} relative`}>About</Link>
            </li>
            <li>
            
              <Link to="/service" onClick={() => handleClick(2)} className= {`${isActive === 2 && "active"} relative`}>Services</Link>
            </li>
            <li>
            
              <Link to="/contactus" onClick={() => handleClick(3)} className= {`${isActive === 3 && "active"} relative`}>Contact</Link>
            </li>
          </ul>
        </nav>

        {/* <Link> */}
          {" "}
          <div className="py-10">
          <ContactBtn />
          </div>

          </div>
        {/* </Link> */}
        
      </header>
    </div>
  );
};

export default Navbar;
