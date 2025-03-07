import React from "react";
import { Link } from "react-scroll";

export const MobileNav = ({ setToggle, href, link }) => {
  return (
    <li className="list-none cursor-pointer mr-8">
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="font-medium transition-all duration-300"
        onClick={(prev) => setToggle(!prev)} 
      >
        {link}
      </Link>
    </li>
  );
};

export default MobileNav;
