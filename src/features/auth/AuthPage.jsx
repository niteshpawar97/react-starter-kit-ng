import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-hot-toast'; // ✅ Add this
import { useDispatch, useSelector } from 'react-redux';
import { login } from './authSlice'; // 👈 import your Redux login action


const AuthPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: 'admin@example.com', password: '123456' });
  const [error, setError] = useState('');
  const dispatch = useDispatch(); // ✅ useDispatch to dispatch actions

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

useEffect(() => {
  if (isLoggedIn) {
    navigate('/dashboard');
  }
}, [isLoggedIn]);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 if (form.email === 'admin@example.com' && form.password === '123456') {
    setError('');
    dispatch(login()); // ✅ update global auth state
    toast.success('Login successful! 🎉');
    navigate('/dashboard');
  } else {
    toast.error('Invalid email or password.');
    setError('Invalid email or password.');
  }
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-light text-dark dark:bg-dark dark:text-light transition-colors px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-primary dark:text-primary-light mb-2">
            🔐 Login
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Please enter your credentials below
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-light dark:bg-gray-700 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-light dark:bg-gray-700 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {error && (
            <p className="text-danger text-sm font-medium mt-1">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-primary hover:bg-primary-dark text-white font-semibold text-sm transition"
          >
            Login
          </button>
        </form>

        {/* Links */}
        <div className="text-center text-sm text-gray-600 dark:text-gray-400 space-y-2">
          <p>
            Forgot your password?{' '}
            <span className="text-primary cursor-pointer hover:underline">
              Reset
            </span>
          </p>
          <p>
            Don’t have an account?{' '}
            <Link to="/signup" className="text-primary hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
