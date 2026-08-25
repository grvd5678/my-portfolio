const Button = ({ children, variant = 'primary', onClick, href, className = '' }) => {
  const baseStyles = 'px-6 py-3 rounded-full transition-all transform hover:scale-105 inline-block';
  const variants = {
    primary: 'bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800',
    outline: 'border border-purple-500 hover:bg-purple-500/10'
  };

  const Component = href ? 'a' : 'button';
  
  return (
    <Component 
      href={href}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}>
      {children}
    </Component>
  );
};

export default Button;
