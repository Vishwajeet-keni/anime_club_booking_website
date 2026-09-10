'use client';

const DUST_COUNT = 24;

function seededRandom(seed: number) {
  const x = Math.sin(seed * 999) * 10000;
  return x - Math.floor(x);
}

export default function AmbientBackground() {
  const motes = Array.from({ length: DUST_COUNT }, (_, i) => {
    const left = seededRandom(i + 1) * 100;
    const size = 2 + seededRandom(i + 2) * 3;
    const duration = 14 + seededRandom(i + 3) * 12;
    const delay = seededRandom(i + 4) * -20;
    const opacity = 0.15 + seededRandom(i + 5) * 0.25;
    return { left, size, duration, delay, opacity };
  });

  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="ambient-beam" />
      {motes.map((m, i) => (
        <span
          key={i}
          className="ambient-mote"
          style={{
            left: `${m.left}%`,
            width: `${m.size}px`,
            height: `${m.size}px`,
            animationDuration: `${m.duration}s`,
            animationDelay: `${m.delay}s`,
            opacity: m.opacity,
          }}
        />
      ))}
    </div>
  );
}