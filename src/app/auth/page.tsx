'use client'

import { useState } from 'react'
import SignupForm from '@/components/SignupForm'
import LoginForm from '@/components/LoginForm'
import { WarpBackground } from '@/components/WarpBackground'
import { motion } from 'framer-motion'
import { verifyUser , saveUser , FindUser } from '@/app/auth/api/route'
import { error } from 'console'
import logoTagline from '@/public/logo_tagline.svg'
import Image from 'next/image'

export default function Home() {
  const [isLogin, setIsLogin] = useState(false)
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [validated,setValidated] = useState(false);


  return (
    <WarpBackground className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-r from-[#0a0928] to-[#121212]" gridColor="rgba(255, 255, 255, 0.05)">
      <div className="w-full justify-center max-w-2xl flex flex-col items-center">
        <Image src={logoTagline} alt="logo of company with tagline" className="mb-6" />
        <div className="bg-gray-800 shadow-xl rounded-lg overflow-hidden w-full">
          <div className="p-6 w-96 mx-auto">
        <div className="flex mb-6">
          <button
            className={`flex-1 py-2 text-center ${
          isLogin ? 'bg-gradient-to-r from-[#01bdc1] to-[#1d73bd] text-white' : 'bg-gray-700 text-gray-300'
            } rounded-l-md transition-all duration-300`}
            onClick={() => {setIsLogin(true); }}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 text-center ${
          !isLogin ? 'bg-gradient-to-r from-[#01bdc1] to-[#1d73bd] text-white' : 'bg-gray-700 text-gray-300'
            } rounded-r-md transition-all duration-300`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>
        <div className="relative overflow-hidden" style={{ minHeight: '400px' }}>
          <motion.div
            initial={false}
            animate={{ x: isLogin ? '0%' : '-100%' }}
            transition={{ type: 'tween', ease: 'easeInOut', duration: 0.3 }}
            className="flex"
          >
            <div className="w-full flex-shrink-0">
          <LoginForm />
            </div>
            <div className="w-full flex-shrink-0">
          <SignupForm />
            </div>
          </motion.div>
        </div>
          </div>
        </div>
      </div>
    </WarpBackground>
  )
}

