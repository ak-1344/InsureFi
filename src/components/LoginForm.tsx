'use client'

import { useEffect, useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { FindUser } from '@/app/auth/api/route'
import { UserContext } from '@/contexts/UserContext'

type LoginFormData = {
  email: string
  password: string
}

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const  setUser  = useContext(UserContext);

  async function Login(){
    try{
      const res = await FindUser(email,password);
      if(!res){
        console.log("User not found");
        return;
      }
      if(res.email===email && res.password===password){
          setUser?.setUser(res);
      }
    }
    catch(err){
      console.log(err);
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>()
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const onSubmit = (data: LoginFormData) => {
    Login();
    setTimeout(() => {
      console.log(data)
      setSubmitStatus('success')
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-gray-300">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email Address
        </label>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          type="email"
          id="email"
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-[#ffd60a] focus:ring focus:ring-[#ffd60a] focus:ring-opacity-50 text-white p-2"
          placeholder="john@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
          Password
        </label>
        <input
          {...register('password', { required: 'Password is required' })}
          type="password"
          id="password"
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-[#ffd60a] focus:ring focus:ring-[#ffd60a] focus:ring-opacity-50 text-white p-2"
          placeholder="••••••••"
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-[#ffd60a] hover:bg-[#ffd60a]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffd60a]"
      >
        Log In
      </button>

      {submitStatus === 'success' && (
        <p className="mt-2 text-sm text-green-400">Login successful!</p>
      )}
      {submitStatus === 'error' && (
        <p className="mt-2 text-sm text-red-400">Invalid email or password. Please try again.</p>
      )}
    </form>
  )
}
