import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const DashboardLayout = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((prev) => !prev);
  };

  const sidebarWidth = isSidebarCollapsed ? 'w-16' : 'w-64';

  return (
    <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light transition-colors">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 ${sidebarWidth} bg-gray-900 text-white transition-all duration-300`}>
        <Sidebar isCollapsed={isSidebarCollapsed} />
      </div>

      {/* Main Content */}
      <div
        className={`min-h-screen flex flex-col transition-all duration-300
        ${isSidebarCollapsed ? 'md:pl-16' : 'md:pl-64'}`}
      >
        <Header onToggleSidebar={toggleSidebar} isCollapsed={isSidebarCollapsed} />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
