import React, { useState } from 'react'

const About = () => {
const [email, setemail] = useState('');
const [allmails, setallmails] = useState([]);
const submit =(e)=>{
  e.preventDefault()
  



  setallmails([...allmails, {email}])
setemail('')
}



  return (
    <div className='w-full mt-5 py-12 px-5 '>

      <div className='bg-[#F1F1F1] w-full flex flex-col items-center justify-center gap-12 px-6 py-32 md:py-48 lg:py-48 rounded-[15px]'>
        <h1 className='text-4xl md:whitespace-nowrap lg:text-7xl md:text-5xl tracking-tight font-[500]'>SUBSCRIBE OUR NEWSLETTER</h1>
      <p className='text-center lg:px-36 md:px-28'>Stay connected with the latest trends, exclusive offers, and behind the -scenes updates by subscribing to our newsletter. Be the first to discover new collections and special promotions tailored just for you!</p>
       

         <form onSubmit={submit} className='w-full flex flex-col items-center justify-center mt-10'>
          <input type="email"
          placeholder='Enter Your Email address here...
          '
          className='w-fit lg:w-[40%] md:w-[40%] outline-none text-start border-none bg-black text-white px-10 py-5 rounded-[15px]'
          value={email}
          onChange={(e)=>{
            setemail(e.target.value)
          }}
          />
         </form>
      </div>
      
    </div>
  )
}

export default About
