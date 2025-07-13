import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-light text-dark dark:bg-dark dark:text-light px-4 transition-colors duration-300">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-extrabold text-primary dark:text-primary-light mb-4">
          🚀 Welcome to React Starter Kit
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
          This is a boilerplate project using React, React Router, Redux Toolkit, and Tailwind CSS.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/login"
            className="px-6 py-2 bg-primary text-white rounded hover:bg-primary-dark transition"
          >
            Go to Login
          </Link>
          <Link
            to="/dashboard"
            className="px-6 py-2 border border-primary text-primary rounded hover:bg-primary-light/10 dark:hover:bg-primary-dark/20 transition"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
