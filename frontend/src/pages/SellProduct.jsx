import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().trim().min(3, "Enter at least 3 characters"),

  category: z.enum(
    ["Books", "Electronics", "Stationery", "Others"],
    { message: "Select a category" }
  ),

  price: z.coerce.number()
    .positive("Enter a valid price"),

  email: z.string().email("Enter a valid email"),

  description: z.string().trim()
    .min(10, "Enter at least 10 characters")
})

function SellProduct() {

  const [success, setSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(schema)
  })

  function onSubmit(data) {
    console.log(data)
    setSuccess(true)
    reset()
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">

      <h2 className="text-2xl font-bold mb-4">
        Sell Product
      </h2>

      <form
        noValidate
        onSubmit={handleSubmit(onSubmit, () => setSuccess(false))}
        className="space-y-4"
      >

        <div>
          <label>Product Name</label>
          <input
            {...register("name")}
            placeholder="Enter product name"
            className="border p-2 w-full rounded"
          />
          <p className="text-red-500 text-sm">
            {errors.name?.message}
          </p>
        </div>

        <div>
          <label>Category</label>
          <select
            {...register("category")}
            className="border p-2 w-full rounded"
          >
            <option value="">Select Category</option>
            <option>Books</option>
            <option>Electronics</option>
            <option>Stationery</option>
            <option>Others</option>
          </select>
          <p className="text-red-500 text-sm">
            {errors.category?.message}
          </p>
        </div>

        <div>
          <label>Price</label>
          <input
            type="number"
            {...register("price")}
            placeholder="Enter price"
            className="border p-2 w-full rounded"
          />
          <p className="text-red-500 text-sm">
            {errors.price?.message}
          </p>
        </div>

        <div>
          <label>Email</label>
          <input
            {...register("email")}
            placeholder="Enter email"
            className="border p-2 w-full rounded"
          />
          <p className="text-red-500 text-sm">
            {errors.email?.message}
          </p>
        </div>

        <div>
          <label>Description</label>
          <textarea
            {...register("description")}
            placeholder="Product description"
            className="border p-2 w-full rounded"
          />
          <p className="text-red-500 text-sm">
            {errors.description?.message}
          </p>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded w-full"
        >
          Submit Product
        </button>

      </form>

      {success && (
        <p className="text-green-600 mt-4">
          Product added successfully!
        </p>
      )}

    </div>
  )
}

export default SellProduct