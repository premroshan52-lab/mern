import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import DashBoard from './pages/Dashboard'
import './App.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <div className="flex flex-col md:flex-row flex-1">
        <Sidebar />
        <DashBoard />
      </div>

      <Footer />

    </div>
  )
}

export default App