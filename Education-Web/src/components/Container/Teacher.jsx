import React from 'react'
import Teacher1 from "../../assets/avatar-2.jpg";
import Teacher2 from "../../assets/avatar-3.jpg";
import { Accordions } from '../../Data';
import Accordion from './Accordion';

export const Teacher = () => {
  return (
    <>
      <div className='section' id='teacher'>
        <div className='grid sm:grid-cols-2 place-items-center gap-8'>
          <div className='pl-5'>
            <div className='font-medium sm:text-[1.875rem] text-[1.5rem] mb-4'>
              <p>Become <span className='text-teal-500'>An Instructor</span><br /> of Our Platform</p>
            </div>
            <p className='text-sm leading-7 text-gray-700 mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolor suscipit dolorem, 
              minima officiis sit. Delectus corrupti, cum ipsa velit unde quas nobis, id assumenda natus, 
              animi nulla consequatur ipsum?
            </p>
            <button className='py-3 px-6 bg-teal-500 text-white rounded-lg text-sm font-medium'>Start Teaching</button>
          </div>
          <div className='p-6 w-3/4 sm:row-start-1'>
            <img src={Teacher1} alt=''/>
          </div>

          <div className='pl-5'>
            <div className='font-medium sm:text-[1.875rem] text-[1.5rem] mb-4'>
              <p>Become <span className='text-teal-500'>An Instructor</span><br /> of Our Platform</p>
            </div>
            <p className='text-sm leading-7 text-gray-700 mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolor suscipit dolorem, 
              minima officiis sit. Delectus corrupti, cum ipsa velit unde quas nobis, id assumenda natus, 
              animi nulla consequatur ipsum?
            </p>
            <button className='py-3 px-6 bg-teal-500 text-white rounded-lg text-sm font-medium'>Start Teaching</button>
          </div>
          <div className='p-6 w-3/4'>
            <img src={Teacher2} alt=''/>
          </div>
        </div>
        <div className='text-center my-8 font-medium sm:text-[1.875rem] text-[1.5rem]'>
          <p>Frequently <span className='text-teal-500'>Asked Question</span></p>
        </div>
        <div className='mt-12 max-w-[700px] mx-auto'>
          {Accordions.map((accor) => {
            return <Accordion key={accor.id} {...accor} />
          })}
        </div>
      </div>
    </>
  )
}

export default Teacher;