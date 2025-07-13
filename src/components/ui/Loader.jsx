const Loader = ({ size = 'md' }) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-6 w-6',
    lg: 'h-10 w-10',
  };

  return (
    <div className={`animate-spin rounded-full border-t-2 border-primary border-solid ${sizes[size]}`} />
  );
};

export default Loader;
