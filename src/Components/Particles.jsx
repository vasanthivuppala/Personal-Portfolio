import "./Particles.css";

function Particles() {
  const particles = Array.from({ length: 100 });

  return (
    <div className="particles-container">
      {particles.map((_, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}
    </div>
  );
}

export default Particles;