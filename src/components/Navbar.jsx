import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/images/image 7.jpg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-400 text-gray-50">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "150px" }} />
      </div>
      {/* menu */}

      <ul className="hidden md:flex">
        <li>AboutM </li>
        <li>Portfolio</li>
        <li>Contact</li>
        <li>Resume</li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/*Mobile menu*/}
      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-slate-400 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">About Me</li>
        <li className="py-6 text-4xl">Portfolio</li>
        <li className="py-6 text-4xl">Contact</li>
        <li className="py-6 text-4xl">Resume</li>
      </ul>

      {/* social icons */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
          <li>
            <a href="/">
              Linkedin <fa-facebook size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
