const Label = ({ children, htmlFor = '', className = '' }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300 ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
