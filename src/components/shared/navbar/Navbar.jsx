import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { FiAlignJustify, FiLogOut, FiUser } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo/dream-craft.png";
import useAuth from "../../../hooks/useAuth";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropDown] = useState(false);
  const [collapse, setCollapse] = useState(false);
  const imgRef = useRef();
  const dropdownRef = useRef();
  window.addEventListener("click", (e) => {
    if (e.target !== dropdownRef.current && e.target !== imgRef.current) {
      setDropDown(false);
    }
  });
  const handleDropDown = () => {
    setDropDown(!dropdownOpen);
  };
  const logOutHandler = () => {
    logout();
    navigate("/");
    toast.success("Successfully Logout");
  };
  console.log(user);
  return (
    <>
      <nav className="flex-no-wrap flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 md:flex-wrap lg:py-3.5 sticky top-0 z-50">
        <div className="flex w-full items-center justify-between md:max-w-7xl md:px-12 mx-auto">
          <button
            onClick={() => setCollapse(!collapse)}
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0  lg:hidden"
            type="button"
          >
            <FiAlignJustify size={25} />
          </button>
          <div className="flex justify-center items-center">
            <Link
              className="flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900  lg:mb-0 lg:mt-0"
              to="/"
            >
              <img src={logo} className="w-24 md:w-36" alt="DreamCarft Logo" />
            </Link>
          </div>
          <div
            className={`!visible ${
              collapse ? "block" : "hidden"
            } absolute md:static top-14 bg-white w-full md:w-auto border shadow-xl md:border-none md:shadow-none items-center px-3 lg:!flex lg:basis-auto z-50`}
          >
            <ul className="flex mx-auto flex-col md:flex-row justify-center gap-5 py-3">
              <li>
                <NavLink to="/" className="border border-white p-1">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" className="border border-white p-1">
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/booking" className="border border-white p-1">
                  Booking
                </NavLink>
              </li>
              <li>
                <NavLink to="/schedule" className="border border-white p-1">
                  Schedule
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" className="border border-white p-1">
                  Shop
                </NavLink>
              </li>
              <li className="relative group">
                <div className="flex  items-center -mt-1">
                  <span className="border border-white p-1 hover:text-primary cursor-pointer">
                    About
                  </span>
                  <IoMdArrowDropdown />
                </div>

                <ul className="absolute left-0 mt-2 min-w-max bg-white rounded shadow-lg p-2 opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 z-50">
                  <li>
                    <NavLink
                      to="/about"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      About Us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/privacy"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Privacy Policy
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/terms"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Terms & Conditions
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li>
                <NavLink to="/portfolio" className="border border-white p-1">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="border border-white p-1">
                  Contact
                </NavLink>
              </li>

              {/* <li>
                <details>
                  <summary>More</summary>
                  <ul className="p-2 bg-base-100 rounded-t-none">
                    <li>
                    <NavLink to="/event-details" className="border border-white p-1">
                    Event Details
                </NavLink>
                    </li>
                    <li>
                    <NavLink to="/shop" className="border border-white p-1">
                    Shop
                </NavLink>
                    </li>
                  </ul>
                </details>
              </li> */}
            </ul>
          </div>
          {/* Right elements */}
          {user ? (
            <div className="relative flex items-center">
              {/* Second dropdown container */}
              <div className="relative">
                <img
                  ref={imgRef}
                  onClick={handleDropDown}
                  src={user?.image}
                  className="rounded-full w-10 h-10 cursor-pointer"
                />
                <ul
                  ref={dropdownRef}
                  className={`absolute py-2 px-1 z-[1000] m-0  min-w-max overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg  w-40 ${
                    dropdownOpen ? "block left-auto right-0" : "hidden"
                  }`}
                >
                  {user && (
                    <li>
                      <Link
                        to="/dashboard/profile"
                        className="rounded w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent 
                                            flex items-center gap-2
                                            "
                      >
                        <FiUser className="inline-block" size={15} />
                        Profile
                      </Link>
                    </li>
                  )}
                  <li>
                    <button
                      onClick={logOutHandler}
                      className="rounded w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent
                                        flex items-center gap-2
                                        "
                    >
                      <FiLogOut />
                      LogOut
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                type="button"
                className="inline-block rounded bg-primary/10 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary/90 transition duration-150 ease-in-out hover:bg-primary/20 focus:bg-primary/30 focus:outline-none focus:ring-0 active:bg-primary/20"
              >
                Login
              </Link>
              <Link
                to="/register"
                type="button"
                className="mr-3 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary/95 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary/90 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary/90"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
