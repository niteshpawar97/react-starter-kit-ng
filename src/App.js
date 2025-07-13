import Router from './routes';
import ThemeToggle from './components/ThemeToggle';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-light text-dark dark:bg-dark dark:text-light transition-colors duration-300 relative">
      {/* ✅ Floating Theme Toggle (top-right corner) */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>

      {/* ✅ Global Toaster config */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            style: {
              background: '#10B981',
              color: '#fff',
            },
          },
          error: {
            style: {
              background: '#EF4444',
              color: '#fff',
            },
          },
        }}
      />

      {/* ✅ Main Routing */}
      <Router />
    </div>
  );
}

export default App;
