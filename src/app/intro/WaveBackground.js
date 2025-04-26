'use client';

export default function WaveBackground() {
  return (
    <div id="waves" style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      top: 0,
      left: 0,
      zIndex: -1
    }}>
      <svg viewBox="0 0 1200 600" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
        <path className="wave" fill="#0f2222" d="M0,300 Q150,350 300,300 T600,300 T900,300 T1200,300 V600 H0 Z"></path>
      </svg>

      <style jsx>{`
        .wave {
          animation: moveWaves 10s ease-in-out infinite alternate;
          transform-origin: center;
        }

        @keyframes moveWaves {
          0% { d: path("M0,300 Q150,350 300,300 T600,300 T900,300 T1200,300 V600 H0 Z"); }
          50% { d: path("M0,300 Q150,250 300,300 T600,300 T900,300 T1200,300 V600 H0 Z"); }
          100% { d: path("M0,300 Q150,400 300,300 T600,300 T900,300 T1200,300 V600 H0 Z"); }
        }
      `}</style>
    </div>
  );
}
