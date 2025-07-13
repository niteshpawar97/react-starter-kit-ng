import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/slices/themeSlice';
import { BsSun, BsMoon } from 'react-icons/bs';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const root = document.documentElement;

    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // ✅ Save to localStorage
    localStorage.setItem('theme', mode);
  }, [mode]);

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      // className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full shadow hover:bg-primary-dark transition"
       className="fixed z-50 bottom-6 right-6 flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition"
    >
      {mode === 'dark' ? <BsSun size={18} /> : <BsMoon size={18} />}
      {mode === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
};

export default ThemeToggle;
