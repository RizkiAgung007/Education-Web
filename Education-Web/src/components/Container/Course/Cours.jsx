import React from 'react';
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai"

export const Cours = ({ image, category, title, participants, rate, price}) => {
  return (
    <div className='p-2 shadow-lg min-w-[15rem] bg-white rounded-lg'>
      <img src={image} alt='' />
      <div className='mt-2 text-xs text-teal-700'>{category}</div>
      <div className='text-sm mt-2 font-medium'>{title}</div>
      <div className='flex items-center justify-between pt-4'>
        <div className='flex items-center gap-2'>
          <div className='bg-gray-200 p-1 rounded-full'>
            <AiOutlineUser className='text-teal-700'/>
          </div>
          <div className='text-sm font-medium'>{participants}</div> 
        </div>
        <div className='flex items-center gap-2'>
          <div className='bg-gray-200 p-1 rounded-full'>
            <AiOutlineStar className='text-yellow-400' />
          </div>
          <div className='text-sm font-medium'>{rate}</div>
        </div>
        <div className='text-sm font-medium'>$.{price}</div>
      </div>
    </div>
  )
}

export default Cours;