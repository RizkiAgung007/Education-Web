import React from 'react'
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <>
      <div className='section' id='contact'>
        <div className='text-center max-w-[600px] mx-auto'>
          <div className='sm:text-3xl text-2xl font-medium mb-5'>
            <p>Contact Person</p>
          </div>
          <p className='text-sm leading-7 text-gray-700'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum nisi cupiditate fugit qui 
            iusto dolor inventore in quibusdam totam at explicabo fugiat ipsa officiis animi itaque dignissimos 
            sed sint dolorem, sequi quasi debitis recusandae tempora sapiente saepe. Praesentium, nihil quam.
          </p>
          <motion.form initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }} className='mt-5'>
            <input type='email' placeholder='Enter Your Mail' className='sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60 rounded-lg'/>
            <button className='text-sm text-white bg-teal-700 sm:p-3 p-2 shadow-md rounded-lg'>Send</button>
          </motion.form>
        </div>
      </div>
    </>
  )
}

export default Contact;