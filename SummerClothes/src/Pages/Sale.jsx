import React from 'react'
import sale from '../assets/sale.png'
const Sale = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row md:flex-row px-5 mt-16 gap-10'>
     <div className='lg:w-[40%] md:w-[40%] w-full bg-[#F1F1F1] rounded-[10px]'>
           <img className='w-full h-full object-cover' src={sale} alt="" />
     </div>
     <div className='lg:w-[50%] md:w-[50%] w-full flex flex-col items-start gap-8 justify-center lg:px-10 md:px-2'>
         <h1 className='text-5xl lg:text-6xl md:text-6xl font-semibold'>30% OFF ON ALL <br /> NEW ARRIVAL</h1>
         <p>offer Last Date 30 March</p>
         <button className='bg-black text-white px-4.5 py-3 border-none outline-none rounded-[5px] active:scale-90'>Explore Now</button>
     </div>
    </div>
  )
}

export default Sale
