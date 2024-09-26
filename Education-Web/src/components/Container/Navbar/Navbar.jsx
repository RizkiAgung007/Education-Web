import React, { useEffect, useState } from 'react';
import { NavLinks } from '../../../Data';
import { HiMenuAlt1, HiX } from "react-icons/hi"
import NavLink from './NavLink';
import MobileNav from './MobileNav';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [active, setActive] = useState(null)
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener('scroll', scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);
  return (
    <>
      <div className={`${active ? "shadow-lg bg-gray-200" : ""} fixed w-full top-0 left-0 z-20 `}>
        <div>
          <div className={`${active ? "py-2 transition-all duration-300" : "py-4"} container py-4 mx-auto flex items-center justify-between px-2`}>
            <div className='flex items-center gap-4'>
              <HiMenuAlt1 className='text-3xl sm:hidden cursor-pointer' onClick={() => setToggle(true)}/>
              <div className='text-xl text-teal-500 uppercase tracking-wide font-bold'>Decode</div>
            </div>
            <div className='sm:flex items-center hidden'>
              {NavLinks.map((navlink) => {
                return <NavLink key={navlink.id} {...navlink} />
              })}
            </div>
            <button className='py-3 px-6 text-sm border border-solid border-gray-400 rounded-lg font-medium'>Sign Up</button>
            {toggle && (
              <motion.div initial={{ x: -500, opacity: 0}} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.5 }} className='fixed h-full w-96 top-0 left-0 z-20 bg-teal-500 text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8'>
                {NavLinks.map((navlink) => {
                 return <MobileNav key={navlink.id} {...navlink} setToggle={setToggle}/>
                })}
                <HiX className='absolute right-12 top-12 text-3xl cursor-pointer' onClick={(prev) => setToggle(!prev)} />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
