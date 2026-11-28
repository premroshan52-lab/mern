import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import SellProduct from './pages/SellProduct'
import Orders from './pages/Orders'
import Profile from './pages/Profile'

import './App.css'

function App() {

  const [open, setOpen] = useState(false)

  return (
    <Router>

      <div className="min-h-screen flex flex-col">

        <Navbar toggleSidebar={() => setOpen(!open)} />

        <div className="flex flex-1 flex-col md:flex-row">

          <Sidebar
            open={open}
            closeSidebar={() => setOpen(false)}
          />

          <main className="flex-1 min-w-0 bg-gray-100 p-6 text-black">

            <Routes>

              <Route path="/" element={<Dashboard />} />

              <Route path="/products" element={<Products />} />

              <Route path="/sell" element={<SellProduct />} />

              <Route path="/orders" element={<Orders />} />

              <Route path="/profile" element={<Profile />} />

            </Routes>

          </main>

        </div>

        <Footer />

      </div>

    </Router>
  )
}

export default App