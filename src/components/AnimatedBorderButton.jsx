    const AnimatedBorderButton = ({ children, onClick, href }) => {
  const Component = href ? 'a' : 'button';
  return (
    <Component href={href} onClick={onClick} type={!href ? 'button' : undefined}
       className="relative px-6 py-3 rounded-full inline-block group overflow-hidden">
      <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 
                       bg-[length:200%_100%] animate-[gradient_3s_ease_infinite]" />
      <span className="absolute inset-[2px] bg-[#0a0a0f] rounded-full" />
      <span className="relative z-10">{children}</span>
    </Component>
  );
};

export default AnimatedBorderButton;
