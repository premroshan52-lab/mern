import { useState, useEffect } from 'react'
import StatCard from '../components/StatCard'

function DashBoard() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Orders: ${count}`
  }, [count])

  return (
    <div className="flex-1 bg-gray-100 p-6 text-black">

      <h2 className="mb-5 text-2xl font-bold">
        Available Products
      </h2>

      <p className="mb-4">Total Orders: {count}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        <StatCard name="Java Book" price={250}
          onBuy={() => setCount(count + 1)} />

        <StatCard name="Calculator" price={500}
          onBuy={() => setCount(count + 1)} />

        <StatCard name="Laptop Bag" price={700}
          onBuy={() => setCount(count + 1)} />

      </div>
    </div>
  )
}

export default DashBoard