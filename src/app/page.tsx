'use client'
import LandingPage from '@/components/landingPage'
import { useState } from 'react'

export default function Home() {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
    <LandingPage/>
    </>    
  )
}

