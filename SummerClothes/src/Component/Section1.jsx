import React from 'react'
import Image from '../assets/first.png'
import Second from '../assets/second.png'
import Third from '../assets/third.png'
import Four from '../assets/four.png'
import { useNavigate } from 'react-router-dom'

const Section1 = () => {

  const navigate = useNavigate()
  return (
   <div className="mt-10 w-full flex flex-col gap-4 md:flex-row lg:flex-row px-5">
    
    <div className='w-full flex flex-col md:flex-row lg:flex-row  gap-3.5'>
      <div className='md:w-[50%] lg:w-[50%] bg-[#F1F1F1] relative rounded-[10px]'>
        <img className='min-h-[600px] object-cover' src={Image} alt="" />
        <button className='mb-11 absolute bottom-16 md:left-1/2 md:-translate-x-1/2 left-1/2 -translate-x-1/2  bg-[white] text-black font-semibold px-3.5 py-2.5 active:scale-95' onClick={()=>navigate('/explore/women')}>Explore Now</button>
      </div>
       <div className='md:w-[50%] lg:w-[50%] bg-[#F1F1F1] relative rounded-[10px]'>
        <img className='min-h-[600px] object-cover' src={Second} alt="" />
        <button className=' mb-11 absolute bottom-16 md:left-1/2 md:-translate-x-1/2 left-1/2 -translate-x-1/2 bg-[white] text-black font-semibold px-3.5 py-2.5 active:scale-95' onClick={()=>navigate('/explore/women')}>Explore Now</button>
      </div>
    </div>


    <div className='w-full flex flex-col  gap-3.5'>
      
      <div className='w-full min-h-[300px] bg-[#F1F1F1] flex flex-row rounded-[10px]'>
        <div className='w-[55%]  flex flex-col justify-between py-8'>
            <div className='px-3'>
                <p className='font-semibold text-[17px]'>Women Collection</p>
            </div>
            <div className='px-2 flex flex-col gap-3.5'>
                <h1 className='text-[25px] font-semibold'>Stylish Summer T-Shirt for Woman</h1>
                <button className='w-fit bg-transparent border-1 rounded-[5px] px-4 py-2 hover:bg-black hover:text-white active:scale-95'onClick={()=>navigate('/Shop')}>Check Now</button>
            </div>
        </div>
        <div className='w-[45%]  pt-2'>
            <img className='w-full h-full' src={Third} alt="" />
        </div>
      </div>



 <div className='w-full min-h-[300px] bg-[#F1F1F1] flex flex-row rounded-[10px]'>
        <div className='w-[55%]  flex flex-col justify-between py-8'>
            <div className='px-3'>
                <p className='font-semibold text-[17px]'>Man Collection</p>
            </div>
            <div className='px-2 flex flex-col gap-3.5'>
                <h1 className='text-[25px] font-semibold'>Stylish Summer T-Shirt for Man</h1>
                <button className='w-fit bg-transparent border-1 rounded-[5px] px-4 py-2 hover:bg-black hover:text-white active:scale-95'onClick={()=>navigate('/explore/men')}>Check Now</button>
            </div>
        </div>
        <div className='w-[45%]  pt-2'>
            <img className='w-full h-full' src={Four} alt="" />
        </div>
      </div>




       

    </div>
    


  </div>
  )
}

export default Section1
