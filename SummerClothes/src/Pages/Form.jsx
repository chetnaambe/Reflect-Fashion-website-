import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const navigate = useNavigate();
    const [allTask, setallTask] = useState([]);

    const [email, setemail] = useState('');
        const [pass, setpass] = useState('');
    
const Submit =(e)=>{
   e.preventDefault()
 
if (!email || !pass) return;

    setallTask([...allTask, {email, pass}])

    setemail('')
    setpass('')
     navigate('/');
}


  return (

    <div className='mt-10 w-full px-5 py-36 flex flex-col items-center justify-center lg:py-40 md:py-40'>

        <form className='lg:w-[50%] w-full  md:w-[50%] flex flex-col gap-3.5 lg:gap-10 md:gap-5  gap-10' onSubmit={Submit}>

    <div className='flex flex-col gap-1.5'>
        <h1 className='text-4xl font-semibold'>Welcome Back!</h1>
        <p className='opacity-55'>Welcome back please enter your details</p>
    </div>

     <div className='flex flex-col gap-2'>
        <h2 className='text-[19px] font-[500]'>Email</h2>
     <input type="email"
          className='w-full outline-none border-1 border-black py-3.5 px-2.5 rounded-[5px]'
     placeholder='Enter your email'
     value={email}
     required
     onChange={(e)=>setemail(e.target.value)}
     />
     </div>


    <div className='flex flex-col gap-2'>
         <h2 className='text-[19px] font-[500]'>Password</h2>
     <input type="password"
          className='w-full outline-none border-1 border-black py-3.5 px-2.5 rounded-[5px]'
     placeholder='Enter your password'
     value={pass}
     required
          onChange={(e)=>setpass(e.target.value)}
     />
    </div>


    <div className='flex flex-col w-full'>
        <button className='bg-black text-white px-3 py-4 rounded-[5px] cursor-pointer'>Sign in</button>
        
    </div>



        </form>
        <div className='flex flex-row gap-4 mt-5'>
            <p className='text-[18px]'>Don't have an account?</p>
            <p className='font-bold text-[18px] cursor-pointer'onClick={()=>navigate('/Account')}>Sign up</p>
        </div>
    </div>
  )
}

export default Form