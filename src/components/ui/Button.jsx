const Button = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`bg-primary hover:bg-primary-dark text-white font-medium px-4 py-2 rounded-md transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
