import { NavLink } from 'react-router-dom'

function Sidebar({ open, closeSidebar }) {

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Sell Product", path: "/sell" },
    { name: "My Orders", path: "/orders" },
    { name: "Profile", path: "/profile" }
  ]

  return (
    <aside className={`${open ? "block" : "hidden"}
      md:block w-48 bg-gray-800 text-white p-4 shrink-0`}>

      {menu.map((item) => (

        <NavLink
          key={item.path}
          to={item.path}
          end
          onClick={closeSidebar}
          className={({ isActive }) =>
            `block p-3 mb-2 rounded ${
              isActive
                ? "bg-blue-600"
                : "hover:bg-gray-700"
            }`
          }
        >
          {item.name}
        </NavLink>

      ))}

    </aside>
  )
}

export default Sidebar