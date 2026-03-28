
import React from 'react'
import M1 from '../assets/Men/M1.png'
import M2 from '../assets/Men/M2.png'
import M3 from '../assets/Men/M3.png'
import M4 from '../assets/Men/M4.png'
import M5 from '../assets/Men/M5.png'
import M6 from '../assets/Men/M6.png'
import M7 from '../assets/Men/M7.png'
import M8 from '../assets/Men/M8.png'

const Men = () => {

  const menProducts = [
    { id: 1, price: "$78", name: "Shirt", image: M1 },
    { id: 2, price: "$250", name: "Shirt", image: M2 },
    { id: 3, price: "$100", name: "Goggle", image: M3 },
    { id: 4, price: "$120", name: "Goggle", image: M4 },
    { id: 5, price: "$300", name: "Watch", image: M5 },
    { id: 6, price: "$90", name: "Watch", image: M6 },
    { id: 7, price: "$150", name: "T-shirt", image: M7 },
    { id: 8, price: "$780", name: "T-shirt", image: M8 },
  ]

  return (
    <div className='mt-10 w-full px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>

      {menProducts.map((item) => (
        <div 
          key={item.id} 
          className='rounded-lg bg-gray-100 hover:shadow-lg transition duration-300 relative'
        >
          <img 
            className='w-full h-[500px] object-cover rounded-md' 
            src={item.image} 
            alt={item.name} 
          />

<div className='bg-[#00000047] opacity-0 transition-opacity hover:opacity-100 transition-duration-300 rounded-[10px] text-white text-2xl absolute inset-0 flex flex-col gap-3.5 items-center justify-end py-4'> 
       <h2 className='text-center text-[18px] mt-3 font-semibold'>
            {item.name}
          </h2>
   <p className='text-center text-[19px] text-white font-[500]'>
      <button className='bg-white text-black px-3.5 py-2 rounded-[5px] mr-5'>Buy Now</button>
            {item.price}
          </p></div>
        
        </div>
        
      ))}

    </div>
  )
}

export default Men