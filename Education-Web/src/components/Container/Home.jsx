import React from 'react'
import { Logos } from "../../Data";
import hero from "../../assets/story-6.jpg";
import { motion } from "framer-motion";

export const Home = () => {
    const container = {
        hidden: {
          opacity: 0,
          scale: 0,
        },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      };
      const item = {
        hidden: {
          y: 20,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
        },
      }
  return (
    <>
        <div className='section' id='home'>
            <div className='md:flex items-center justify-center pb-8'>
                <div>
                    <div className='font-bold text-xs text-teal-700 mb-4'>
                        <p>Your e-learning partner</p>
                    </div>
                    <div className='sm:text-[2.5rem] text-[1.825rem] font-bold'>
                        <p>This is <br /> the new way <br /> To learn online</p>
                    </div>
                    <p className='text-sm leading-7 text-gray-700 max-w-sm'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, architecto quae 
                        laboriosam eveniet quia voluptatem nam odit inventore veniam facilis.
                    </p>
                    <div className='mt-6'>
                        <button className='px-6 py-3 font-medium text-white bg-teal-700 rounded-lg mr-4 text-sm'>Get Started</button>
                        <button className='px-6 py-3 font-medium border border-solid border-gray-800 rounded-lg mr-4 text-sm'>Discover</button>
                    </div>
                </div>
                <div className='md:w-[60%]'>
                    <img src={hero} alt=''/>
                </div>
            </div>
            <div>
                <p className='text-center text-xl pb-4'>We collaborate with {""}
                <span className='text-teal-700'>120+ leading universities and companies</span>
                </p>
                <motion.div variants={container} initial="hidden" whileInView="visible" className='flex items-center justify-center flex-wrap gap-8 p-2'>
                    {Logos.map((logo, index) => (
                        <motion.div variants={item} className='w-28' key={index}>
                            <img src={logo} alt='' className='w-full object-cover' />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    </>
  )
}

export default Home;