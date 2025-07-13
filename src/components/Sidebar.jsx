import { HiHome, HiUserGroup, HiCurrencyRupee } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isCollapsed }) => {
  const location = useLocation();

  const menu = [
    { icon: <HiHome />, name: 'Home', path: '/dashboard' },
    { icon: <HiUserGroup />, name: 'Users', path: '/users' },
    { icon: <HiCurrencyRupee />, name: 'Revenue', path: '#' },
  ];

  return (
    <aside
      className={`h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-lg transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >

       {/* Sidebar Title */}
      <div className="flex items-center justify-center py-4 border-b border-gray-200 dark:border-gray-700">
        {!isCollapsed ? (
          <h2 className="text-lg font-bold text-primary">📊 Dashboard</h2>
        ) : (
          <span className="text-xl">📊</span>
        )}
      </div>


      <nav className="flex flex-col gap-2 py-4">
        {menu.map((item, i) => {
          const isActive = location.pathname === item.path;

          return (
            <Link
              to={item.path}
              key={i}
              className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-md transition-colors
                ${
                  isActive
                    ? 'bg-gray-100 text-primary dark:bg-gray-800 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                }`}
            >
              <span className="text-xl">{item.icon}</span>
              {!isCollapsed && <span className="whitespace-nowrap">{item.name}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
