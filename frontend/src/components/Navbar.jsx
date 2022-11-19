import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contacts",
    },
  ];

  return (
    <div className="w-full h-20 flex justify-between px-5 bg-black items-center text-white fixed">
      <div>
        <h1 className="text-5xl ml-3 font-signature">CheloyTec</h1>
      </div>
      <ul className="hidden md:flex px-3">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer uppercase font-medium text-gray-500 hover:scale-110 duration-300"
          >
            <Link to = {link} smooth duration= {500}>
            {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer uppercase py-6 text-4xl"
            >
             <Link onClick = {() => setNav(!nav)} to = {link} smooth duration= {500}>
            {link}
            </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
