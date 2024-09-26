import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <>
      <motion.div initial={{ height: 0}} whileInView={{ height: "auto" }} transition={{ duration: 1 }} className='bg-teal-700 p-10'>
        <div className='grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white'>
          <div>
            <div>
              <p className='font-medium mb-6'>Get Started</p>
              <p className='text-sm leading-7'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum alias 
                necessitatibus eius dignissimos at eveniet ad. A sed commodi dolores non minima 
                enim quibusdam, reprehenderit consequuntur similique laborum facilis officiis fugiat eos unde velit maxime.
              </p>              
            </div>
          </div>
          <div>
          <p className='font-medium mb-6'>Services</p>
            <div className='flex flex-col gap-4'>
              <a href='' className='text-sm'>Web Development</a>
              <a href='' className='text-sm'>Business</a>
              <a href='' className='text-sm'>Digital Marketing</a>
              <a href='' className='text-sm'>Web Design</a>
              <a href='' className='text-sm'>Sience</a>
            </div>
          </div>
          <div>
          <p className='font-medium mb-6'>Company</p>
            <div className='flex flex-col gap-4'>
              <a href='' className='text-sm'>Privacy Policy</a>
              <a href='' className='text-sm'>Careers</a>
              <a href='' className='text-sm'>About US</a>
              <a href='' className='text-sm'>Blog</a>
              <a href='' className='text-sm'>Terms & Condition</a>
            </div>
          </div>
          <div>
          <p className='font-medium mb-6'>Follow Us</p>
          <p className='text-sm'>Decode@gmail.com</p> 
          <p className='text-sm mb-4'>+621218712</p>
            <div className='flex gap-4 mt-4'>
              <a href='' className='hover:scale-110 text-xl'>
                <BsFacebook />
              </a>
              <a href='' className='hover:scale-110 text-xl'>
                <BsInstagram />
              </a>
              <a href='' className='hover:scale-110 text-xl'>
                <BsTwitter />
              </a>
              <a href='' className='hover:scale-110 text-xl'>
                <BsLinkedin />
              </a>
            </div> 
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Footer;