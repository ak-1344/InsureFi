'use client'

import { useState } from 'react'
import SignupForm from '@/components/SignupForm'
import LoginForm from '@/components/LoginForm'
import { WarpBackground } from '@/components/WarpBackground'
import { motion } from 'framer-motion'

export default function Home() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <WarpBackground className="min-h-screen flex items-center justify-center p-4 bg-gray-900" gridColor="rgba(255, 255, 255, 0.05)">
      <div className="w-full max-w-2xl">
        <div className="bg-gray-800 shadow-xl rounded-lg overflow-hidden">
          <div className="p-6 w-96">
            <div className="flex mb-6">
              <button
                className={`flex-1 py-2 text-center ${
                  isLogin ? 'bg-[#ffd60a] text-gray-900' : 'bg-gray-700 text-gray-300'
                } rounded-l-md transition-all duration-300`}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
              <button
                className={`flex-1 py-2 text-center ${
                  !isLogin ? 'bg-[#ffd60a] text-gray-900' : 'bg-gray-700 text-gray-300'
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

