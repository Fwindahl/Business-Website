import React, { useState } from "react";
import { motion } from "framer-motion";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { fadeInAnimationNav } from "../constants/animations";

const Navbar = () => {
  const [toogle, setToogle] = useState(false);
  return (
    <nav className="flex items-center justify-between w-full py-6 navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="items-center justify-end flex-1 hidden gap-10 list-none sm:flex">
        {navLinks.map((nav, index) => (
          <motion.li
            variants={fadeInAnimationNav}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </motion.li>
        ))}
      </ul>

      <div className="flex items-center justify-end flex-1 sm:hidden">
        <img
          className="w-[28px] h-[28px] object-contain"
          src={toogle ? close : menu}
          alt="menu"
          onClick={() => setToogle((prev) => !prev)}
        />
        <div
          className={`${
            toogle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-lg sidebar`}
        >
          <ul className="flex flex-col items-center justify-end flex-1 gap-10 list-none">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
