import React from "react";
import {
  BsTwitter,
  BsLinkedin,
  BsFillPersonLinesFill,
  BsGithub,
} from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkenIn
          <BsLinkedin size={25} />
        </>
      ),
      href: "http://linkedin.com",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Facebook
          <FaFacebook size={25} />
        </>
      ),
      href: "http://facebook.com",
    },
    {
      id: 3,
      child: (
        <>
          Twitter
          <BsTwitter size={25} />
        </>
      ),
      href: "http://twitter.com",
    },
    {
      id: 4,
      child: (
        <>
          Mail
          <HiOutlineMail size={25} />
        </>
      ),
      href: "mailto: aloyuche17@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          GitHub
          <BsGithub size={25} />
        </>
      ),
      href: "http://github.com",
    },
    {
      id: 6,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={25} />
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, href, style, child, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-red-300" +
              "" +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Social;
