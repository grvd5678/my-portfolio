import { useState, useEffect, useRef } from "react";

const CountUp = ({
  target,
  duration = 1600,
  prefix = "",
  suffix = "",
  decimals = 0,
}) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;
          const endVal = typeof target === "string" ? parseFloat(target) : target;

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            
            // Ease-out cubic curve for snappy deceleration
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeProgress * endVal;

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(endVal);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  const formattedCount =
    decimals > 0
      ? count.toFixed(decimals)
      : Math.floor(count).toLocaleString();

  return (
    <span ref={elementRef} className="tabular-nums">
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  );
};

export default CountUp;

