function Dashboard() {

  const details = [
    { name: "Total Products", count: 24 },
    { name: "My Listings", count: 5 },
    { name: "My Orders", count: 3 },
    { name: "Categories", count: 4 }
  ]

  return (
    <div>

      <h2 className="text-2xl font-bold mb-5">
        Dashboard
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        {details.map((item) => (
          <div
            key={item.name}
            className="bg-white p-5 rounded shadow"
          >
            <h3>{item.name}</h3>
            <p className="text-3xl font-bold mt-2">
              {item.count}
            </p>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Dashboard