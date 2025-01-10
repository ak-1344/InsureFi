"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const dummyData = [
  { year: 1, benefit: 100000 },
  { year: 5, benefit: 120000 },
  { year: 10, benefit: 150000 },
  { year: 15, benefit: 200000 },
  { year: 20, benefit: 250000 },
  { year: 25, benefit: 300000 },
  { year: 30, benefit: 350000 },
]

export function BenefitsGraph() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={dummyData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="benefit" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

