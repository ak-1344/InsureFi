'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { verifyUser , saveUser } from '@/app/auth/api/route'

type SignupFormData = {
  firstName: string
  middleName?: string
  lastName: string
  phoneNumber: string
  email: string
  password: string
}

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  async function SignUp(){
    try{
      const res = await verifyUser(email);
      if(res){
         console.log("User already exists");
         return;
      }
      else{
        const userexists = await saveUser(email,password,lastName,middleName,phoneNumber,firstName);
        if(userexists){
          console.log("User saved successfully");
        }
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
  } = useForm<SignupFormData>()
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const onSubmit = (data: SignupFormData) => {
    SignUp();
    setTimeout(() => {
      console.log(data)
      setSubmitStatus('success')
    }, 1000)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
            First Name
          </label>
          <input
            {...register('firstName', { required: 'First name is required' })}
            type="text"
            id="firstName"
            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-[#01bdc1] focus:ring focus:ring-[#01bdc1] focus:ring-opacity-50 text-white p-2"
            placeholder="John"
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
            Last Name
          </label>
          <input
            {...register('lastName', { required: 'Last name is required' })}
            type="text"
            id="lastName"
            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-[#01bdc1] focus:ring focus:ring-[#01bdc1] focus:ring-opacity-50 text-white p-2"
            placeholder="Doe"
            onChange={(e) => setLastName(e.target.value)}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="middleName" className="block text-sm font-medium text-gray-300">
          Middle Name (optional)
        </label>
        <input
          {...register('middleName')}
          type="text"
          id="middleName"
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-[#01bdc1] focus:ring focus:ring-[#01bdc1] focus:ring-opacity-50 text-white p-2"
          placeholder="Michael"
          onChange={(e) => setMiddleName(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300">
            Phone Number
          </label>
          <input
            {...register('phoneNumber', {
              required: 'Phone number is required',
              pattern: {
                value: /^\+?[1-9]\d{1,14}$/,
                message: 'Invalid phone number format',
              },
            })}
            type="tel"
            id="phoneNumber"
            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-[#01bdc1] focus:ring focus:ring-[#01bdc1] focus:ring-opacity-50 text-white p-2"
            placeholder="+1234567890"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          {errors.phoneNumber && (
            <p className="mt-1 text-xs text-red-500">{errors.phoneNumber.message}</p>
          )}
        </div>
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
            className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-[#01bdc1] focus:ring focus:ring-[#01bdc1] focus:ring-opacity-50 text-white p-2"
            placeholder="john@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
          Password
        </label>
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters long',
            },
          })}
          type="password"
          id="password"
          className="mt-1 block w-full rounded-md border-gray-600 bg-gray-700 shadow-sm focus:border-[#01bdc1] focus:ring focus:ring-[#01bdc1] focus:ring-opacity-50 text-white p-2"
          placeholder="••••••••"
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#01bdc1] to-[#1d73bd] hover:bg-[#01bdc1]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#01bdc1]"
      >
        Sign Up
      </button>

      {submitStatus === 'success' && (
        <p className="mt-2 text-sm text-green-400">Signup successful!</p>
      )}
      {submitStatus === 'error' && (
        <p className="mt-2 text-sm text-red-400">An error occurred. Please try again.</p>
      )}
    </form>
  )
}
