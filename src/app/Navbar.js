import React from 'react'
import { AiOutlineBulb, AiFillBulb } from 'react-icons/ai';
function Navbar() {
  return (
    <div className='px-2 sm:px-6 md:px-8 flex justify-between items-center bg-green-500 h-[10vh]'>
      <div>Groww</div>
      <div>
        {
            true ? <AiFillBulb className='text-white text-3xl' /> : <AiOutlineBulb className='text-white text-3xl' />
        }
      </div>
    </div>
  )
}

export default Navbar
