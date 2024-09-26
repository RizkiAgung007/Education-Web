import React from 'react'
import hero from "../../assets/hero.png";

export const About = () => {
  return (
    <>
      <div className='section' id='about'>
        <div className='grid md:grid-cols-2 gap-8 place-items-center'>
          <div className='border-[3px] border-solid border-teal-700 rounded-lg'>
            <img src={hero} alt='' className='p-4' />
          </div>
          <div>
            <div className='font-medium sm:text-[1.875rem] text-[1.5rem] mb-5'>
              <p>We provide the <br /> best {""} <span className='text-teal-700'>online course</span></p>
              <p className='text-sm text-gray-700 leading-7 mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto 
                asperiores libero repellat delectus voluptate non? Adipisci illo ducimus soluta libero!
              </p>
              <button className='py-3 px-6 text-sm border border-solid border-teal-700 rounded-lg font-medium'>Know More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About;
