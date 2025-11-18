import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  LayoutDashboard,
  Users,
  Package,
  ShoppingCart,
  Settings,
  FileText,
  Mail,
  BarChart2,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const AdminDashboard = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  
  // Sample stats data
  const stats = [
    { title: "Total Orders", value: "1,234", change: "+12%", positive: true },
    { title: "Products", value: "256", change: "+5%", positive: true },
    { title: "Customers", value: "1,862", change: "-2%", positive: false },
    { title: "Revenue", value: "$28,450", change: "+18%", positive: true },
  ];

  const navLinks = [
    { path: "/admin/dashboard", icon: <LayoutDashboard size={18} />, label: "Dashboard" },
    { path: "/admin/products", icon: <Package size={18} />, label: "Products" },
    { path: "/admin/orders", icon: <ShoppingCart size={18} />, label: "Orders" },
    { path: "/admin/customers", icon: <Users size={18} />, label: "Customers" },
    { path: "/admin/reports", icon: <BarChart2 size={18} />, label: "Reports" },
    { path: "/admin/inquiries", icon: <Mail size={18} />, label: "Inquiries" },
    { path: "/admin/settings", icon: <Settings size={18} />, label: "Settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 z-50 flex-col flex-shrink-0 w-64 border-r bg-white transition-all duration-300 ${mobileNavOpen ? 'left-0' : '-left-full md:left-0'}`}>
        <div className="flex items-center justify-center h-16 px-4 border-b">
          <h1 className="text-xl font-bold text-indigo-600">Admin Panel</h1>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `flex items-center px-4 py-2 rounded-lg ${isActive ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              <span className="mr-3">{link.icon}</span>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>
        
        <div className="p-4 border-t">
          <Button variant="ghost" className="w-full justify-start">
            <LogOut size={18} className="mr-3" />
            Logout
          </Button>
        </div>
      </div>

      {/* Mobile nav button */}
      <button 
        className="fixed z-40 p-2 text-gray-500 bg-white rounded-md md:hidden top-4 left-4"
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden md:ml-64">
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <h1 className="text-xl font-semibold text-gray-800">Dashboard Overview</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
                    />
                  </svg>
                  <span className="sr-only">View notifications</span>
                  <span className="absolute w-2 h-2 bg-red-500 rounded-full top-1 right-1"></span>
                </Button>
              </div>
              <Button variant="ghost" className="flex items-center">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://placehold.co/100/3b82f6/FFFFFF/png?text=AD"
                  alt="Admin avatar"
                />
              </Button>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full ${stat.positive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {stat.change}
                  </span>
                </div>
                <p className="mt-2 text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Recent Orders */}
          <div className="mt-8 bg-white rounded-lg shadow overflow-hidden">
            <div className="px-6 py-4 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900">Recent Orders</h2>
                <Button variant="ghost">View All</Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray  border-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#ORD-1234</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Delivered
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-06-15</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$125.00</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-indigo-600 hover:text-indigo-900">View</button>
                    </td>
                  </tr>
                  {/* Additional rows would go here */}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
