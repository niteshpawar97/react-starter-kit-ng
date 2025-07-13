import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light dark:bg-dark text-dark dark:text-light px-4">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-danger">404</h1>
        <p className="text-xl font-semibold">Oops! Page not found</p>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
          The page you’re looking for doesn’t exist or has been moved. Please check the URL or return to the homepage.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition"
        >
          ⬅ Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
