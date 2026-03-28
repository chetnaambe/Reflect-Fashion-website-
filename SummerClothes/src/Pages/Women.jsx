
import React from 'react'
import W1 from '../assets/Women/W1.png'
import W2 from '../assets/Women/W2.png'
import W3 from '../assets/Women/W3.png'
import W4 from '../assets/Women/W4.png'
import W5 from '../assets/Women/W5.png'
import W6 from '../assets/Women/W6.png'
import W7 from '../assets/Women/W7.png'
import W8 from '../assets/Women/W8.png'

const Women = () => {

  const womenProducts = [
    { id: 1, price: "$78", name: "Mini Frock", image: W1 },
    { id: 2, price: "$250", name: "Frock", image: W2 },
    { id: 3, price: "$100", name: "T-shirt", image: W3 },
    { id: 4, price: "$120", name: "Crop T-shirt", image: W4 },
    { id: 5, price: "$300", name: "Crop Top", image: W5 },
    { id: 6, price: "$90", name: "Shoes", image: W6 },
    { id: 7, price: "$150", name: "Shoes", image: W7 },
    { id: 8, price: "$780", name: "Dress", image: W8 },
  ]

  return (
    <div className='mt-10 w-full px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>

      {womenProducts.map((item) => (
        <div 
          key={item.id} 
          className='rounded-lg bg-gray-100 hover:shadow-lg transition duration-300 relative'
        >
          <img 
            className='w-full h-[500px] object-cover rounded-md' 
            src={item.image} 
            alt={item.name} 
          />

<div className='bg-[#00000047] opacity-0 transition-opacity hover:opacity-100 transition-duration-300 text-white text-2xl absolute inset-0 flex flex-col gap-3.5 items-center justify-end py-4 rounded-[10px]'> 
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

export default Women