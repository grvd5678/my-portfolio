import './StarField.css';

const stars = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 2 + 1,
  duration: `${Math.random() * 20 + 10}s`,
  delay: `${Math.random() * 10}s`,
  twinkle: `${Math.random() * 3 + 1}s`,
}));

const meteors = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 50}%`,
  left: `${Math.random() * 100}%`,
  duration: `${Math.random() * 3 + 2}s`,
  delay: `${Math.random() * 10 + i * 4}s`,
}));

const StarField = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0a0a0f] overflow-hidden" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: star.duration,
            animationDelay: star.delay,
            '--twinkle-duration': star.twinkle,
          }}
        />
      ))}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            top: meteor.top,
            left: meteor.left,
            animationDuration: meteor.duration,
            animationDelay: meteor.delay,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
