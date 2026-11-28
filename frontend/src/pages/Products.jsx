function Products() {

  const products = [
    { id: 1, name: "Engineering Book", price: 250 },
    { id: 2, name: "Calculator", price: 500 },
    { id: 3, name: "Drawing Kit", price: 150 },
    { id: 4, name: "Laptop Bag", price: 400 }
  ]

  return (
    <div>

      <h2 className="text-2xl font-bold mb-4">
        Available Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-5 rounded shadow"
          >

            <h3 className="font-bold">
              {product.name}
            </h3>

            <p className="my-3">
              Price: ₹{product.price}
            </p>

            <button
              onClick={() => alert(product.name + " selected")}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Buy Now
            </button>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Products