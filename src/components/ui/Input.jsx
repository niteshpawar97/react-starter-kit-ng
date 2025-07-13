const Input = ({ className = '', ...props }) => {
  return (
    <input
      className={`w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-light dark:bg-gray-700 text-sm focus:ring-2 focus:ring-primary focus:outline-none ${className}`}
      {...props}
    />
  );
};

export default Input;
