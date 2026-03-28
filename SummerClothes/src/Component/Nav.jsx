import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import { X, Menu, UserRound } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const navigate= useNavigate()
const [handle, setHandle] = useState(false);
  return (
    <div className='w-full  px-5 py-3.5  flex flex-row items-center justify-between md:justify-between'>

<div className='hidden lg:flex md:flex flex-1 items-center gap-4 text-[13px] font-[500] '>
          <NavLink to="/"   >HOME</NavLink>
      <NavLink to="/Shop">SHOP</NavLink>
      <NavLink to="/Sale">SALE</NavLink>
      <NavLink to="/About">ABOUT</NavLink>
</div>
      
      <div className='text-center'>
        <h1 className='text-4xl font-[600] '>REFLECT</h1>
      </div>

<div className='hidden md:flex flex-1 items-center justify-end gap-4'>

  <UserRound className='size-5 hover:size-7 hover:bg-black hover:text-white hover:rounded-full hover:p-1.5 hover:shadow-[5px_5px_15px_black]' onClick={()=>navigate('/Form')} />
</div>


<div className='lg:hidden'>
    <button className='text-2xl text-black font-[600]  md:hidden' onClick={()=>
        setHandle(!handle)}>
        {handle ? <X className='size-9 hover:bg-black hover:text-white hover:size-9 hover:p-1.5 hover:rounded-full' /> : <Menu className='size-9 hover:bg-black hover:text-white hover:size-9 hover:p-1.5 hover:rounded-full' /> }
    </button>


{handle && (
<div className='flex flex-col items-center justify-center bg-[#f9f8f8c5] px-5 py-6 w-[50%] absolute top-20 right-2.5 gap-3.5'>
            <NavLink to="/"  className={"font-medium text-[15px]"}  >HOME</NavLink>
      <NavLink to="/Shop" className={"font-medium text-[15px]"}>SHOP</NavLink>
      <NavLink to="/Sale" className={"font-medium text-[15px]"}>SALE</NavLink>
      <NavLink to="/About" className={"font-medium text-[15px]"}>ABOUT</NavLink>
      
  <UserRound  className='size-5 hover:size-7 hover:bg-black hover:text-white hover:rounded-full hover:p-1.5 hover:shadow-[5px_5px_15px_black]' onClick={()=>navigate('/Form')} />
</div>
)}
   
</div>
</div>

 
)
}

export default Nav
