import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="col-span-full row-span-1 bg-bison_hide border-bison_hide rounded-xl">
      <nav className="flex flex-wrap justify-between items-center px-6 ">
        <div className="flex justify-between items-center w-full lg:w-auto">
          <div className="overflow-hidden font-heading text-2xl font-normal">
            <Link to="/" className="flex items-center">
              <h1 className="text-gray-700 text-3xl">
                <img src="/name.png" className="h-16 flex-shrink-0 " alt="Sameer Singhal"/>
              </h1>
            </Link>
          </div>
          <div className="lg:hidden flex-shrink-0">
            <button
              onClick={toggleMenu}
              className="text-[#06141B] focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`w-full lg:flex lg:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 items-center lg:items-end">
            <li>
              <NavLink
                to="/"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block py-2 px-3 duration-200 text-xl ${
                    isActive ? "text-[#06141B]" : "text-gray-500"
                  } hover:text-[#06141B] hover:bg-gray-50 lg:hover:bg-transparent lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="lg:hidden xl:hidden">
              <NavLink
                to="/about"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block py-2 px-3 duration-200 text-xl ${
                    isActive ? "text-[#06141B]" : "text-gray-500"
                  } hover:text-[#06141B] hover:bg-gray-50 lg:hover:bg-transparent lg:p-0`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block py-2 px-3 duration-200 text-xl ${
                    isActive ? "text-[#06141B]" : "text-gray-500"
                  } hover:text-[#06141B] hover:bg-gray-50 lg:hover:bg-transparent lg:p-0`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/project"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `block py-2 px-3 duration-200 text-xl ${
                    isActive ? "text-[#06141B]" : "text-gray-500"
                  } hover:text-[#06141B] hover:bg-gray-50 lg:hover:bg-transparent lg:p-0`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <button>
                <a className="block duration-200 text-xl text-gray-500" href="https://docs.google.com/document/d/1XWMm8B9InjAUFbICr9V46-uK9LqoPYAAA1uwhlEyOM0/edit?tab=t.0" target="_blank" onClick={toggleMenu}>Resume</a>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
