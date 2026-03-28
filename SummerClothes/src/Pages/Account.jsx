
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Account = () => {

  const navigate = useNavigate()

  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')

  const Submit = (e) => {
    e.preventDefault()

    const user = { email, pass }

    localStorage.setItem("user", JSON.stringify(user))

    alert("Account Created Successfully")

    navigate('/')
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>

      <form onSubmit={Submit} className='flex flex-col gap-4 w-[300px]'>

        <h1 className='text-2xl font-bold'>Signup</h1>

        <input
          type="email"
          placeholder='Email'
          value={email}
          onChange={(e)=>setemail(e.target.value)}
          className='border p-2'
        />

        <input
          type="password"
          placeholder='Password'
          value={pass}
          onChange={(e)=>setpass(e.target.value)}
          className='border p-2'
        />

        <button className='bg-black text-white py-2'>Signup</button>

      </form>

    </div>
  )
}

export default Account


