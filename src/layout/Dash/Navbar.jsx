import PropTypes from "prop-types";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
    const navigate = useNavigate()
    const {user, logout, isLoading}= useAuth()
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = async()=>{
        await logout()
        navigate('/login')
    }
    if (isLoading) {
        return <p>loading..</p>
      }
    console.log(user);
    return (
        <header className="flex items-center justify-between px-6 py-3 bg-white border">
            <div className="flex items-center">
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="text-gray-500 focus:outline-none lg:hidden"
                >
                    <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 6H20M4 12H20M4 18H11"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                <div className="relative mx-4 lg:mx-0">
                    <HiOutlineSearch
                        fontSize={20}
                        className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2"
                    />

                    <input
                        className="w-32 pl-10 pr-4 focus:outline-none rounded-md form-input sm:w-64 focus:border-indigo-600"
                        type="text"
                        placeholder="Search"
                    />
                </div>
            </div>

            <div className="flex items-center">
                <div className="relative">
                    <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="relative block w-10 h-10 overflow-hidden rounded-full shadow focus:outline-none"
                    >
                        <img
                            className="object-cover w-full h-full"
                            src={user?.image}
                            alt="Your avatar"
                        />
                    </button>

                    <div
                        onClick={() => setDropdownOpen(false)}
                        className={`fixed inset-0 z-10 w-full h-full ${
                            dropdownOpen ? "" : "hidden"
                        }`}
                    ></div>

                    <div
                        className={`absolute right-0 z-10 w-48 mt-2 overflow-hidden bg-white rounded-md shadow-xl ${
                            dropdownOpen ? "" : "hidden"
                        }`}
                    >
                        <Link
                            to="/dashboard/profile"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                        >
                            Profile
                        </Link>
                        <Link
                            onClick={handleLogout}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white"
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};
Navbar.propTypes = {
    sidebarOpen: PropTypes.bool,
    setSidebarOpen: PropTypes.func,
};
export default Navbar;
