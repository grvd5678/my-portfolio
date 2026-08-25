import { useState, useEffect } from "react";

const CyberBackground = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch devices to optimize performance
    const checkTouch = () => {
      setIsTouch(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          window.innerWidth < 768
      );
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);

    let animationFrameId;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    // Smooth Lerp animation for the spotlight
    const smoothFollow = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      setMousePos({ x: currentX, y: currentY });
      animationFrameId = requestAnimationFrame(smoothFollow);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(smoothFollow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", checkTouch);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Deep Obsidian Base */}
      <div className="absolute inset-0 bg-[#070714]" />

      {/* 2. Cyber Matrix Grid with Vignette Mask */}
      <div className="absolute inset-0 bg-cyber-grid opacity-60 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]" />
      <div className="absolute inset-0 bg-cyber-dots opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />

      {/* 3. Floating Aurora Ambient Orbs */}
      {/* Orb 1: Electric Violet (Top Left) */}
      <div
        className="absolute -top-24 -left-24 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-purple-600/25 to-indigo-600/10 blur-[130px] animate-aurora-1"
        style={{ willChange: "transform" }}
      />

      {/* Orb 2: Cyber Cyan (Right Center) */}
      <div
        className="absolute top-1/3 -right-28 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-cyan-500/20 to-blue-600/10 blur-[130px] animate-aurora-2"
        style={{ willChange: "transform" }}
      />

      {/* Orb 3: Deep Neon Purple (Bottom Left) */}
      <div
        className="absolute -bottom-32 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-purple-900/25 via-pink-600/10 to-transparent blur-[140px] animate-aurora-1"
        style={{ willChange: "transform" }}
      />

      {/* 4. Interactive Mouse Spotlight Glow (Active on Desktop) */}
      {!isTouch && (
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(147, 51, 234, 0.14), rgba(6, 182, 212, 0.06) 40%, transparent 80%)`,
          }}
        />
      )}

      {/* 5. Subtle Ambient Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
    </div>
  );
};

export default CyberBackground;

