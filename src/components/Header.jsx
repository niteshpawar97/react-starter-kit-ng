import {
  HiOutlineChevronDoubleRight,
  HiOutlineChevronDoubleLeft,
} from "react-icons/hi";
import ThemeToggle from "../components/ThemeToggle";
import { useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Header = ({ onToggleSidebar, isCollapsed }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout()); // ✅ Clear user state
    localStorage.clear(); // ✅ Optional: clear saved token
    navigate("/login"); // ✅ Redirect to login
  };

  return (
    <header className="flex justify-between items-center px-4 md:px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm">
      {/* Sidebar toggle icon */}
      <button
        onClick={onToggleSidebar}
        className="text-primary dark:text-primary-light text-xl mr-4"
      >
        {isCollapsed ? (
          <HiOutlineChevronDoubleRight />
        ) : (
          <HiOutlineChevronDoubleLeft />
        )}
      </button>

      <div className="flex-grow text-right flex items-center justify-end gap-4">
       
        <button
          onClick={handleLogout}
          className="bg-danger hover:bg-red-600 text-white text-sm font-medium px-4 py-1.5 rounded transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
