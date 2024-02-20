import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import suraab_logo from "../../assets/suraab_logo.svg"
import "./Navbar.scss";
import ContactBtn from "../ContactBtn/ContactBtn";
import { Sling as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isActive, setActive] = useState(0);
  const location = useLocation();
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    // Extract the pathname from the location object
    const { pathname } = location;
    // Update the active state based on the pathname
    if (pathname === "/") {
      setActive(0);
    } else if (pathname === "/aboutus") {
      setActive(1);
    } else if (pathname === "/service") {
      setActive(2);
    } else if (pathname === "/contactus") {
      setActive(3);
    }
  }, [location]);

  const handleClick = (index) => {
    setActive(index);
    setShow(false); // Close side menu when a menu item is clicked
    window.scrollTo(0, 0); // Scroll to top
  };

  const showHamburger = () => {
    setShow(!show);
  };

  const closeMenu = () => {
    setShow(false)
    setOpen(false)
  }

  return (
    <div className="bg-black-500 h-28 fixed z-50 bg-opacity-30 top-0 w-full">
      <header
        style={{ maxWidth: "1440px", margin: "auto" }}
        className="relative w-11/12 text-white-100 flex justify-between items-center"
      >
        <div className="flex justify-between xl:w-2/5 lg:w-2/5 w-full items-center py-5 lg:py-6">
          <Link to="/">
            <img
              src={suraab_logo}
              alt=""
              className="rounded-sm logo"
            />
          </Link>
          <div className="lg:hidden block fixed top-5 pb-3 pr-2  md:pr-6 z-50  right-0" onClick={showHamburger}>
            <Hamburger color="red" />
          </div>
        </div>

        <div
          className={`${show ? "menu" : ""} lg:flex items-center justify-between w-8/12 hidden border-0 lg:border-0 border-t-2 border-stone-700`}
          onClick={closeMenu}
        >
          <nav>
            <ul className="flex lg:flex-row flex-col gap-16 xl:gap-28 text-white">
              <li>
                <Link
                  to="/"
                  onClick={() => handleClick(0)}
                  className={`${isActive === 0 && "active"} relative`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  onClick={() => handleClick(1)}
                  className={`${isActive === 1 && "active"} relative`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/service"
                  onClick={() => handleClick(2)}
                  className={`${isActive === 2 && "active"} relative`}
                >
                  Services
                </Link>
              </li>
            </ul>
          </nav>
          <div className="py-10">
            <ContactBtn />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
