function Navbar({ toggleSidebar }) {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">

      <div className="flex items-center gap-3">

        <button
          onClick={toggleSidebar}
          className="md:hidden text-xl"
        >
          ☰
        </button>

        <h1 className="text-xl font-bold">
          Campus Marketplace
        </h1>

      </div>

      <span>Student</span>

    </nav>
  )
}

export default Navbar