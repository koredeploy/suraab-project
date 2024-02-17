import { useState } from "react";
import suraab_logo from "../../assets/suraab_logo.svg"
import { Link, useLocation } from "react-router-dom";
import './Navbar.scss'
import ContactBtn from "../ContactBtn/ContactBtn";
import { Sling as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const location = useLocation()
  const [show, setShow] = useState(false)
  
  return (
    <div className="bg-black-500 bg-opacity-30 fixed top-0 w-full">
      <header style={{ maxWidth: "1440px", margin: "auto" }} className="relative text-white-100 flex justify-between items-center py-6 px-6">
        <div className="flex justify-between xl:w-2/5 lg:w-1/4 w-full">
        <Link to="/"><img src= {suraab_logo} alt="" className="rounded-sm" /></Link>
        <div className="lg:hidden block" onClick={() => setShow(!show)}><Hamburger color="red"/></div>
        </div>

      <div className={`${show && "menu"} lg:flex items-center justify-between w-3/4 hidden lg:border-0 border-t-2 bg-black-500 bg-opacity-50 lg:bg-opacity-0`}>
        <nav>
          <ul className="flex lg:flex-row flex-col gap-16 text-white">
            <li>  
              <Link to="/" className= {`${location.pathname === "/" && "active"} relative`}>Home</Link>
            </li>
            <li>
              <Link to="/about" className= {`${location.pathname === "/about" &&  "active"} relative`}>About</Link>
            </li>
            <li>
            
              <Link to="/service" className= {`${location.pathname === "/service" && "active"} relative`}>Services</Link>
            </li>
            <li>
            
              <Link className= {`${location.pathname === "/contact" && "active"} relative`}>Contact</Link>
            </li>
          </ul>
        </nav>

        {/* <Link> */}
          {" "}
          <div className="mt-3 ">
          <ContactBtn />
          </div>

          </div>
        {/* </Link> */}
        
      </header>
    </div>
  );
};

export default Navbar;