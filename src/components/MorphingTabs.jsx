import { useRef, useEffect, useState } from "react";

const MorphingTabs = ({ tabs, activeTab, onChange, className = "" }) => {
  const containerRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const activeBtn = containerRef.current.querySelector(
      `[data-tab="${activeTab}"]`
    );

    if (activeBtn) {
      setIndicatorStyle({
        left: activeBtn.offsetLeft,
        width: activeBtn.offsetWidth,
        opacity: 1,
      });
    }
  }, [activeTab, tabs]);

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl max-w-full overflow-x-auto no-scrollbar ${className}`}
    >
      {/* Sliding Active Pill Indicator */}
      <div
        className="absolute top-1.5 bottom-1.5 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-cyan-500 shadow-lg shadow-purple-500/30 transition-all duration-300 ease-out pointer-events-none"
        style={{
          left: `${indicatorStyle.left}px`,
          width: `${indicatorStyle.width}px`,
          opacity: indicatorStyle.opacity,
        }}
      />

      {/* Tab Buttons */}
      {tabs.map((tab) => {
        const isActive = activeTab === tab;
        return (
          <button
            key={tab}
            data-tab={tab}
            onClick={() => onChange(tab)}
            className={`relative z-10 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-colors duration-200 whitespace-nowrap ${
              isActive
                ? "text-white font-bold"
                : "text-gray-400 hover:text-gray-200"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};

export default MorphingTabs;

