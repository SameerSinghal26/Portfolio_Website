import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="col-span-full row-span-1 bg-bison_hide border-bison_hide rounded-xl">
      <nav className="flex justify-between items-center px-6 max-lg:gap-4 max-md:flex-col max-md:justify-center">
        <div className="overflow-hidden font-heading text-2xl font-normal">
          <Link to="/" className="flex items-center">
            <h1 className="text-gray-700 text-3xl">
              <img src="/name.png" className="h-16"/>
            </h1>
          </Link>
        </div>
        <div
          className="flex gap-4 justify-between items-center max-lg:gap-4 max-md:flex-col max-md:justify-center"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 items-center">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 duration-200 text-xl ${
                    isActive ? "text-[#06141B]" : "text-gray-500"
                  } hover:text-[#06141B] hover:bg-gray-50 lg:hover:bg-transparent lg:p-0`
                }
              >
                Home
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 duration-200 text-xl ${
                    isActive ? "text-[#06141B]" : "text-gray-500"
                  } hover:text-[#06141B] hover:bg-gray-50 lg:hover:bg-transparent lg:p-0`
                }
              >
                About
              </NavLink>
            </li> */}
            <li>
              <NavLink
                to="/contact"
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
                <a className="block duration-200 text-xl text-gray-500" href="https://docs.google.com/document/d/1XWMm8B9InjAUFbICr9V46-uK9LqoPYAAA1uwhlEyOM0/edit?tab=t.0" target="_blank">Resume</a>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
