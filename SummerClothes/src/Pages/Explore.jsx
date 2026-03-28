import React from 'react'
import Men from '../Pages/Men'
import Women from '../Pages/Women'
import {Outlet ,useNavigate } from 'react-router-dom'

const Explore = () => {
const navigate = useNavigate()
  return (
    <div className='px-5 w-full mt-15 flex flex-col gap-10'>
     


<div className='flex gap-6'>
  <div><button className='border-2 border-black outline-none text-black hover:bg-black hover:text-white active:scale-95  px-12 py-3 rounded-[10px]' onClick={()=>navigate('/explore/men')}>Men</button></div>
        <div>   <button className='border-2 border-black outline-none text-black hover:bg-black hover:text-white active:scale-95  px-12 py-3 rounded-[10px]' onClick={()=>navigate('/explore/women')}>Women</button></div>
   
  </div>

  <Outlet />

    </div>




  )
}

export default Explore
