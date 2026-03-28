import React from 'react'
import Sec2 from '../assets/sec2.png'
import Sec21 from '../assets/sec21.png'

const Section2 = () => {
  return (
    <div className='mt-40 w-full px-5 bg-black text-white flex flex-col'>
      
      <div className='w-full px-2 py-5 flex flex-col gap-4 lg:flex-row md:flex-row'>
       <div className='lg:w-[40%] md:w-[40%] rounded-[10px] bg-[#F1F1F1]'>
        <img src={Sec2} alt="" />
       </div>
       <div className='lg:px-14 lg:w-[40%] md:w-[40%] md:px-12 flex flex-col gap-7 lg:gap-10 md:items-start md:justify-center lg:items-start justify-center'>
        <h1 className='text-5xl font-bold tracking-tight leading-14'>CLOTHING <br /> COLLECTION</h1>
        <p className='px-2'>Our clothing collection at Reflect is a celebration of style, versatility, and craftsmanship. Each piece is meticulously designed to complement a range of occasions, from everyday  casual wear to statement-making outfits for special events.</p>
        <button className='w-fit px-4 py-2.5 bg-transparent border-2 border-white text-white rounded-[5px]  hover:bg-white active:scale-95 hover:text-black'>Explore Products</button>
       </div>
      </div>


     <div className='w-full px-2 py-5 flex flex-col gap-4 lg:flex-row-reverse md:flex-row-reverse'>
       <div className='lg:w-[40%] md:w-[40%] rounded-[10px] bg-[#F1F1F1]'>
        <img src={Sec21} alt="" />
       </div>
       <div className='lg:px-14 lg:w-[50%] md:w-[50%] md:px-12 flex flex-col gap-7 lg:gap-10 md:items-start md:justify-center lg:items-start justify-center'>
        <h1 className='text-5xl font-bold tracking-tight leading-14'>SHOES<br /> COLLECTION</h1>
        <p>The shoe collection at Reflect is where style meets comfort, crafted for those who values both elegance and ease. From sleek heels that elevate your evening look to casual sneakers designed for all-day wear, our range of footwear is created to complement your lifestyle.</p>
        <button className='w-fit px-4 py-2.5 bg-transparent border-2 border-white text-white rounded-[5px] hover:bg-white active:scale-95 hover:text-black'>Explore Shoes</button>
       </div>
      </div>






    </div>
  )
}

export default Section2
