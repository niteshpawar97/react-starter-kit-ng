import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const SignupPage = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    // Dummy signup logic
    console.log('Signup Data:', form);
    toast.success('Account created successfully!');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-light text-dark dark:bg-dark dark:text-light transition-colors px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-primary dark:text-primary-light mb-2">
            📝 Create Account
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Sign up to get started
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-light dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:outline-none text-sm"
            />
          </div>

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
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-light dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:outline-none text-sm"
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
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-light dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:outline-none text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-light dark:bg-gray-700 focus:ring-2 focus:ring-primary focus:outline-none text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary-dark text-white py-2 rounded-md font-semibold transition"
          >
            Create Account
          </button>
        </form>

        {/* Link to login */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-primary hover:underline cursor-pointer"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
