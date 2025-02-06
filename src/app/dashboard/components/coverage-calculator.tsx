"use client"

import { useState } from "react"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"

export function CoverageCalculator() {
  const [age, setAge] = useState("")
  const [coverageAmount, setCoverageAmount] = useState("")
  const [monthlyPremium, setMonthlyPremium] = useState<number | null>(null)

  const calculatePremium = () => {
    const ageNum = parseInt(age)
    const coverageNum = parseInt(coverageAmount)

    if (isNaN(ageNum) || isNaN(coverageNum)) {
      setMonthlyPremium(null)
      return
    }

    // This is a simplified premium calculation logic
    // In a real-world scenario, this would be much more complex
    let basePremium = coverageNum / 1000
    let ageFactor = 1 + (ageNum - 18) / 100

    let calculatedPremium = basePremium * ageFactor
    setMonthlyPremium(parseFloat(calculatedPremium.toFixed(2)))
  }

  return (
    <div className="grid p-4 gap-4 rounded-lg text-2xl bg-[#fff]">
      <div className="grid gap-2 ">
        <Label className="text-2xl" htmlFor="age">Age</Label>
        <Input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
        />
      </div>
      <div className="grid gap-2">
        <Label className="text-2xl" htmlFor="coverage">Coverage Amount (₹)</Label>
        <Input
          id="coverage"
          type="number"
          value={coverageAmount}
          onChange={(e) => setCoverageAmount(e.target.value)}
          placeholder="Enter desired coverage amount"
        />
      </div>
      <Button className="bg-gradient-to-r from-[#01bdc1] to-[#1d73bd]" onClick={calculatePremium}>Calculate Premium</Button>
      {monthlyPremium !== null && (
        <div className="text-center">
          <p className="text-lg font-semibold">Estimated Monthly Premium</p>
          <p className="text-2xl font-bold">${monthlyPremium}</p>
        </div>
      )}
    </div>
  )
}

