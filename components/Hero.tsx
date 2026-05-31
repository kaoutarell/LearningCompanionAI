"use client";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="hero-eyebrow">✦ Your 24/7 learning tool</span>
        <h1 className="hero-title">
          <span className="hero-title-top">
            Meet <span className="hero-accent">illumi</span>
          </span>
          <span className="hero-title-line">
            your ultimate learning companion.
          </span>
        </h1>
        <p className="hero-sub">
          Infinite tutors, built for you. Ask questions, explore subjects, and
          learn through natural voice conversations — anytime you like.
        </p>
        <Link href="/sign-in" className="hero-cta">
          Get started <span className="hero-cta-arrow">→</span>
        </Link>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <svg viewBox="0 0 500 440" className="hero-sketch" fill="none">
          <defs>
            <radialGradient id="sketchGlow" cx="50%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#e5d0ff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
            {/* clip that grows left→right to "write" the text */}
            <clipPath id="wipe1">
              <rect
                className="wipe wipe-1"
                x="50"
                y="40"
                width="0"
                height="80"
              />
            </clipPath>
            <clipPath id="wipe3">
              <rect
                className="wipe wipe-3"
                x="90"
                y="280"
                width="0"
                height="80"
              />
            </clipPath>
          </defs>

          <ellipse
            cx="250"
            cy="200"
            rx="210"
            ry="180"
            fill="url(#sketchGlow)"
          />

          {/* E = mc²  as real handwriting text */}
          <text
            className="hw"
            x="60"
            y="105"
            fontSize="54"
            fill="#5b4b8a"
            clipPath="url(#wipe1)"
          >
            E = mc²
          </text>
          {/* Lightbulb — yellow-ish, ADDED on top (drawn stroke) */}
          <g
            className="ink ink-6"
            stroke="#e0a92e"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* glow fill behind the bulb */}
            <ellipse
              cx="350"
              cy="330"
              rx="38"
              ry="42"
              fill="#fde68a"
              fillOpacity="0.45"
              stroke="none"
            />
            {/* bulb glass */}
            <path d="M322 330 C322 300 334 290 350 290 C366 290 378 300 378 330 C378 346 364 353 362 370 L338 370 C336 353 322 346 322 330 Z" />
            {/* screw base */}
            <path d="M338 379 L362 379 M341 388 L359 388" />
            {/* shine rays */}
            <path d="M350 270 L350 282 M306 292 L315 298 M394 292 L385 298" />
          </g>

          {/* triangle (still a drawn stroke) */}
          <g
            className="ink ink-2"
            stroke="#c77dba"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M110 250 L260 250 L110 160 Z" />
          </g>

          {/* a² + b² = c²  as real handwriting text */}
          <text
            className="hw"
            x="95"
            y="345"
            fontSize="50"
            fill="#4a90c2"
            clipPath="url(#wipe3)"
          >
            a² + b² = c²
          </text>

          {/* language speech bubble (drawn) + text */}
          <g
            className="ink ink-5"
            stroke="#3aa6a0"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M300 215 q0 -22 30 -22 l70 0 q30 0 30 22 q0 22 -30 22 l-50 0 l-18 16 l3 -18 q-35 -2 -35 -20 Z" />
          </g>
          <text
            className="hw hw-bubble"
            x="322"
            y="225"
            fontSize="30"
            fill="#3aa6a0"
          >
            Bonjour
          </text>

          {/* pencil */}
          <g className="pencil">
            <rect
              x="34"
              y="-7"
              width="10"
              height="14"
              rx="2"
              fill="#f4a6c0"
              stroke="#9b6a55"
              strokeWidth="1"
            />
            <rect
              x="30"
              y="-7"
              width="5"
              height="14"
              fill="#cbd5e1"
              stroke="#9ca3af"
              strokeWidth="0.8"
            />
            <rect
              x="6"
              y="-7"
              width="24"
              height="14"
              fill="#fcd34d"
              stroke="#b8860b"
              strokeWidth="1"
            />
            <path
              d="M6 -7 L-6 0 L6 7 Z"
              fill="#f3d9a4"
              stroke="#b8860b"
              strokeWidth="1"
            />
            <path d="M-6 0 L0 -3.5 L0 3.5 Z" fill="#3a3a3a" />
          </g>
        </svg>
      </div>
    </section>
  );
};
export default Hero;
