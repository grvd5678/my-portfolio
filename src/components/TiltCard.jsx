import { useState, useRef, useEffect } from "react";

const TiltCard = ({
  children,
  className = "",
  maxTilt = 8,
  glare = true,
  scale = 1.015,
}) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
  });
  const [isHovered, setIsHovered] = useState(false);
  const isTouchRef = useRef(false);

  useEffect(() => {
    isTouchRef.current =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;
  }, []);

  const handleMouseMove = (e) => {
    if (isTouchRef.current || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = Number((((y - centerY) / centerY) * -maxTilt).toFixed(2));
    const rotateY = Number((((x - centerX) / centerX) * maxTilt).toFixed(2));
    const glareX = Number(((x / rect.width) * 100).toFixed(1));
    const glareY = Number(((y / rect.height) * 100).toFixed(1));

    setTransform({ rotateX, rotateY, glareX, glareY });
  };

  const handleMouseEnter = () => {
    if (!isTouchRef.current) setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransform({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transform-gpu transition-transform duration-300 ease-out ${className}`}
      style={{
        transformStyle: "preserve-3d",
        transform: isHovered
          ? `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      }}
    >
      {/* Glare Sheen Layer */}
      {glare && isHovered && (
        <div
          className="absolute inset-0 rounded-xl pointer-events-none z-10 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${transform.glareX}% ${transform.glareY}%, rgba(255, 255, 255, 0.12), transparent 60%)`,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default TiltCard;
