import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import ContactBtn from "../ContactBtn/ContactBtn";
import { Sling as Hamburger } from "hamburger-react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isActive, setActive] = useState(0);
  const location = useLocation();

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

  return (
    <div className="bg-black-500 fixed z-50 bg-opacity-30 top-0 w-full">
      <header
        style={{ maxWidth: "1440px", margin: "auto" }}
        className="relative w-11/12 text-white-100 flex justify-between items-center"
      >
        <div className="flex justify-between xl:w-2/5 lg:w-1/4 w-full items-center py-5 lg:py-6">
          <Link to="/">
            <img
              src="https://res.cloudinary.com/dgeogsa3t/image/upload/v1707829958/zyjwm8fwclgatu1wzw3x.png"
              alt=""
              className="rounded-sm logo"
            />
          </Link>
          <div className="lg:hidden block fixed top-6 pr-4 z-50 pt-2 right-0" onClick={showHamburger}>
            <Hamburger color="red" />
          </div>
        </div>

        <div
          className={`${show ? "menu" : ""} lg:flex items-center justify-between w-3/4 hidden border-0 lg:border-0 border-t-2 border-stone-700`}
        >
          <nav>
            <ul className="flex lg:flex-row flex-col gap-16 text-white">
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
