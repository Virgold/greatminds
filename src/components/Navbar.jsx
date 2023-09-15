import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <ul className="flex justify-center space-x-4">
            <li>
              <Link
                to={"/"}
                className="hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/about"}
                className="hover:text-gray-300 transition duration-300 ease-in-out"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/contact"}
                className="hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
