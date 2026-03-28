import React, { useState } from 'react'
import P1 from '../assets/p1.png'
import P2 from '../assets/p2.png'
import P3 from '../assets/p3.png'
import P4 from '../assets/p4.png'
import P5 from '../assets/p5.png'
import P6 from '../assets/p6.png'
import P7 from '../assets/p7.png'
import P8 from '../assets/p8.png'
import P9 from '../assets/p9.png'
import P10 from '../assets/p10.png'
import P11 from '../assets/p11.png'
import P12 from '../assets/p12.png'
import P13 from '../assets/p13.png'
import P14 from '../assets/p14.png'
import P15 from '../assets/p15.png'
import P16 from '../assets/p16.png'






const Shop = () => {

const [category, setcategory] = useState("T-shirt");

const product = [

  {id:1, category:"T-shirt" , img:P1},
  {id:2, category:"T-shirt", img:P2},
  {id:3, category:"T-shirt", img:P3},
  {id:4, category:"T-shirt", img:P4},
    {id:5, category:"Caps" , img:P5},
  {id:6, category:"Caps", img:P6},
  {id:7, category:"Caps", img:P7},
  {id:8, category:"Caps", img:P8},
    {id:9, category:"Trending" , img:P9},
  {id:10, category:"Trending", img:P10},
  {id:11, category:"Trending", img:P11},
  {id:12, category:"Trending", img:P12},
    {id:13, category:"Out", img:P13},
  {id:14, category:"Out", img:P14},
      {id:15, category:"Acc", img:P15},
  {id:16, category:"Acc", img:P16},
]





  return (
    <div className='mt-28 px-5 py-4 w-full '>
      {/* first */}
      <div className='w-full flex flex-col items-start lg:items-center md:items-center md:flex-row lg:flex-row lg:justify-between md:justify-between gap-16'>
           <div className='lg:w-[50%] md:w-[50%]'>
            <h1 className='text-4xl lg:text-5xl md:text-5xl font-bold tracking-tighter'>OUR COLLECTION</h1>
           </div>
           <div className='lg:w-[50%] md:w-[50%]'>
            <p className='font-[500]'>step into the world of Reflect, where each collection tells its own story. From minimalist essentials to bold statement pieces. our curated collection are designed to suit every occassion and style.</p>
           </div>
      </div>

{/* button */}
<div className='flex gap-2 sm:gap-1 md:gap-4 lg:gap-4  items-center mt-8 flex-wrap mt-7'>
  <button onClick={()=> setcategory("T-shirt")} className={`border border-black px-2 py-2 lg:px-4 lg:py-3 hover:bg-black hover:text-white rounded-md ${category === "T-shirt" ? "bg-black text-white" : "border-black"}`}>T-Shirt</button>
  <button onClick={()=> setcategory("Caps")} className={`border border-black px-2 py-2 lg:px-4 lg:py-3 hover:bg-black hover:text-white rounded-md ${category === "T-shirt" ? "bg-black text-white" : "border-black"}`}>Caps & Bags</button>
  <button onClick={()=> setcategory("Trending")} className={`border border-black px-2 py-2 lg:px-4 lg:py-3 hover:bg-black hover:text-white rounded-md ${category === "T-shirt" ? "bg-black text-white" : "border-black"}`}>Trending</button>
  <button onClick={()=> setcategory("Out")} className={`border border-black px-2 py-2 lg:px-4 lg:py-3 hover:bg-black hover:text-white rounded-md ${category === "T-shirt" ? "bg-black text-white" : "border-black"}`}>Out Wear</button>
  <button onClick={()=> setcategory("Acc")} className={`border border-black px-2 py-2 lg:px-4 lg:py-3 hover:bg-black hover:text-white rounded-md ${category === "T-shirt" ? "bg-black text-white" : "border-black"}`}>Accessories</button>
</div>

   <div className='mt-8 grid grid-cols  md:grid-cols-3 lg:grid-cols-4 gap-5 bg-[#F1F1F1] mt-12'>
        {product
          .filter(item => item.category === category)
          .map(item => (
            <div key={item.id} className='shadow-[2px_2px_10px_white] rounded-md relative overflow-hidden'>
              
              <img 
                src={item.img} 
               
                className='w-full h-[740px] lg:h-96 md:h-96 object-cover rounded-md hover:opacity-30'
              />
            <div className='absolute inset-0 bg-[#0000005f] opacity-0 hover:opacity-100 transition-opacity transition-duration-300 text-white flex items-center justify-center flex-col gap-4'>
    <button className='bg-black text-white px-4 py-2 rounded-md font-semibold '>
      Add to Cart
    </button>

     <button className='bg-black text-white px-4 py-2 rounded-md font-semibold '>
      Buy Now
    </button>
             
            </div>
             
            </div>
           
          ))
        }
      </div>

<div className='w-full px-5  flex flex-col-reverse mt-24 gap-12 lg:flex-row md:flex-row lg:items-center lg:justify-between md:items-center md:justify-between '>
  <div>
    <p>I Reflect, we offer more than just clothing and footwear. We provide a canvas for your individually. Our throughtfully designed apparel and footwear collections blend style and comfort, allowing you to make a statement with every step.</p>
  </div>

   <div className='p-1 w-full'>
  <h1 className='text-3xl lg:text-4xl md:text-4xl font-semibold'>CLOTH AND FOOTWEAR <br /> COLLECTION</h1>
 </div>
</div>

    </div>
  )
}

export default Shop
