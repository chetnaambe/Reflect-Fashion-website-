
import React from 'react'
import { Plus } from 'lucide-react'
import Section1 from '../Component/Section1'
import Shop from '../Pages/Shop'
import Section2 from '../Component/Section2'
import Sale from '../Pages/Sale'
import About from '../Pages/About'
import Footer from '../Component/footer'
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate()

  
  const handleLogout = () => {
    localStorage.removeItem("isLogin")
    window.location.reload()   // 🔥 important
  }

  return (
    <div className='w-full flex flex-col'>

     
      <div className='w-full gap-4.5 flex flex-col-reverse md:flex-row lg:flex-row px-5 py-2.5'>
        
        <div className='lg:w-[50%] md:w-[50%] flex flex-col gap-4.5 md:gap-9 lg:gap-12 px-1.5 lg:px-5 py-4'>
          
          <div className='px-1 md:py-5 lg:py-5 py-4'>
            <h1 className='text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter'>REFLECT</h1>
            <h1 className='text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tighter ml-3.5'>FASHION</h1>
          </div>

          <div className='ml-4.5 lg:px-5'>
            <p className='text-[13px] lg:text-[16px] font-[500]'>
              Discover a fashion experience that not only mirrors your unique personality but amplifies it.
            </p>
          </div>

          <div className='ml-4.5 lg:ml-9 flex gap-5 mt-5'>
            <button 
              className='bg-black text-white px-5 py-3.5 rounded-[5px]'
              onClick={() => navigate('/shop')}
            >
              Buy Product
            </button>

            <button 
              className='border-2 px-5 py-3.5 rounded-[5px]'
              onClick={() => navigate('/Explore')}
            >
              Explore Product
            </button>
          </div>

        </div>

        <div className='w-full lg:w-[50%] md:w-[50%]'>
          <img 
            className='w-full rounded-[10px]' 
            src="https://i.pinimg.com/1200x/59/b5/52/59b552d529dc4f98f825272cbc7e99cc.jpg" 
            alt="" 
          />
        </div>

      </div>

     
      <div className="w-full bg-black text-white px-4 py-3 overflow-hidden">
        <div className="flex gap-6 overflow-hidden whitespace-nowrap content">

          {[...Array(10)].map((_, i) => (
            <div key={i} className='flex gap-1 items-center'>
              <Plus className='size-6' /> 
              <p>REFLECT FASHION</p>
            </div>
          ))}

        </div>
      </div>

      
      <Section1 />
      <Shop />
      <Section2 />
      <Sale />
      <About />
      <Footer />

    </div>
  )
}

export default Home