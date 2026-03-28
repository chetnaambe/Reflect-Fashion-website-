
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  return (
    <div className='w-full bg-black text-white mt-10'>

      {/* Main Content */}
      <div className='px-5 py-8 flex flex-col gap-10'>

        <div className='flex flex-col lg:flex-row gap-10'>

          {/* Left Section */}
          <div className='w-full lg:w-[35%] flex items-center justify-center lg:justify-start'>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-semibold text-center lg:text-left'>
              REFLECT
            </h1>
          </div>

          {/* Right Section */}
          <div className='w-full lg:w-[65%] flex flex-col md:flex-row justify-between gap-10'>

            {/* Info + Service */}
            <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-10 w-full'>

              {/* Information */}
              <div className='flex flex-col gap-5 text-center lg:text-left cursor-pointer'>
                <h1 className='text-lg font-semibold'>Information</h1>
                <div className='flex flex-col gap-2 text-sm'>
                  <p>My Account</p>
                  <p  onClick={()=>navigate('/Form')}>Login</p>
                  <p>My Order</p>
                  <p>My Cart</p>
                  <p 
                    onClick={() => navigate('/shop')} 
                    className=' hover:text-gray-400'
                  >
                    Check out
                  </p>
                </div>
              </div>

              {/* Service */}
              <div className='flex flex-col gap-5 text-center lg:text-left cursor-pointer'>
                <h1 className='text-lg font-semibold'>Service</h1>
                <div className='flex flex-col gap-2 text-sm'>
                  <p 
                    onClick={() => navigate('/about')} 
                    className='cursor-pointer hover:text-gray-400'
                  >
                    About Us
                  </p>
                  <p>Delivery Policy</p>
                  <p>Privacy Policy</p>
                  <p>Refund Policy</p>
                  <p>Terms & Conditions</p>
                </div>
              </div>

            </div>

            {/* Social Media */}
            <div className='flex flex-col items-center lg:items-start gap-5'>
              <h1 className='text-lg font-semibold'>Social Media</h1>

              <div className='flex flex-wrap justify-center lg:justify-start gap-4'>
                <i className='bg-white text-black rounded-lg p-2 text-xl ri-facebook-fill'></i>
                <i className='bg-white text-black rounded-lg p-2 text-xl ri-linkedin-fill'></i>
                <i className='bg-white text-black rounded-lg p-2 text-xl ri-whatsapp-fill'></i>
                <i className='bg-white text-black rounded-lg p-2 text-xl ri-youtube-fill'></i>
                <i className='bg-white text-black rounded-lg p-2 text-xl ri-instagram-fill'></i>
              </div>
            </div>

          </div>
        </div>

        {/* Divider Line */}
        <div className='w-full h-[1px] bg-white/50'></div>

        {/* Bottom Text (optional but professional) */}
        <p className='text-center text-sm text-gray-400'>
          © 2026 Reflect. All rights reserved by Chetna
        </p>

      </div>

    </div>
  )
}

export default Footer