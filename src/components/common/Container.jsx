const Container = ({ children, className = '', size = 'default' }) => {
  const sizes = {
    sm: 'max-w-4xl',
    default: 'max-w-7xl',
    lg: 'max-w-8xl',
    full: 'max-w-full'
  };

  const classes = `${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Container;