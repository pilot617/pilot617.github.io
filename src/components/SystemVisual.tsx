import { AudioLines, Braces, Cpu } from 'lucide-react';

export default function SystemVisual() {
  return (
    <div
      className="system-visual"
      role="img"
      aria-label="An interconnected system: voice, intelligence, and infrastructure"
    >
      <div className="visual-coordinate coordinate-top" aria-hidden="true">
        FIG. 01 — CONNECTED INTELLIGENCE
      </div>
      <svg viewBox="0 0 480 440" fill="none" className="orbital-system" aria-hidden="true">
        <defs>
          <radialGradient id="sphereGlow">
            <stop stopColor="#d1e9a0" stopOpacity=".09" />
            <stop offset="1" stopColor="#d1e9a0" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id="orbitStroke"
            x1="80"
            y1="70"
            x2="410"
            y2="380"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#d1e9a0" stopOpacity=".65" />
            <stop offset=".5" stopColor="#d1e9a0" stopOpacity=".12" />
            <stop offset="1" stopColor="#d1e9a0" stopOpacity=".4" />
          </linearGradient>
        </defs>
        <path
          d="M240 24V415M35 220H445"
          stroke="currentColor"
          strokeOpacity=".12"
          strokeDasharray="3 6"
        />
        <circle
          cx="240"
          cy="220"
          r="193"
          stroke="currentColor"
          strokeOpacity=".15"
          strokeDasharray="2 7"
        />
        <circle cx="240" cy="220" r="160" fill="url(#sphereGlow)" />
        <g stroke="url(#orbitStroke)">
          <circle cx="240" cy="220" r="148" />
          {[32, 65, 103, 133].map((radius) => (
            <ellipse
              key={radius}
              cx="240"
              cy="220"
              rx={radius}
              ry="148"
              transform="rotate(-28 240 220)"
            />
          ))}
          {[32, 65, 103, 133].map((radius) => (
            <ellipse
              key={radius}
              cx="240"
              cy="220"
              rx="148"
              ry={radius}
              transform="rotate(-28 240 220)"
            />
          ))}
        </g>
        <ellipse
          cx="240"
          cy="220"
          rx="204"
          ry="71"
          transform="rotate(-35 240 220)"
          stroke="#d1e9a0"
          strokeOpacity=".65"
        />
        <circle cx="402" cy="102" r="5" fill="#d1e9a0" />
        <circle cx="79" cy="338" r="4" fill="#d1e9a0" />
        <circle cx="240" cy="220" r="37" fill="#181b16" stroke="#d1e9a0" strokeOpacity=".5" />
        <path
          d="M240 198V242M218 220H262M225 205L255 235M225 235L255 205"
          stroke="#d1e9a0"
          strokeWidth="2"
        />
      </svg>
      <div className="system-node node-voice" aria-hidden="true">
        <AudioLines size={18} />
        <span>Voice</span>
        <span className="node-dot" />
      </div>
      <div className="system-node node-ai" aria-hidden="true">
        <Cpu size={18} />
        <span>Intelligence</span>
      </div>
      <div className="system-node node-code" aria-hidden="true">
        <Braces size={18} />
        <span>Infrastructure</span>
      </div>
      <div className="visual-coordinate coordinate-bottom" aria-hidden="true">
        <span className="tiny-cross">+</span> BUILT TO CONNECT. DESIGNED TO SCALE.
      </div>
    </div>
  );
}
