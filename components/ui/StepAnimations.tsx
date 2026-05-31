"use client";

// Step 1 — account: a card with a checkmark that draws in
export const StepAccount = () => (
  <svg viewBox="0 0 220 180" className="step-anim" fill="none">
    <rect
      x="40"
      y="35"
      width="140"
      height="110"
      rx="16"
      fill="#fff"
      stroke="#1e1b4b"
      strokeWidth="2.5"
    />
    <circle
      cx="110"
      cy="75"
      r="20"
      fill="var(--pastel-blue)"
      stroke="#1e1b4b"
      strokeWidth="2"
    />
    <path
      d="M85 115 q25 -22 50 0"
      stroke="#1e1b4b"
      strokeWidth="2"
      fill="none"
    />
    <circle
      className="anim-pop"
      cx="160"
      cy="120"
      r="18"
      fill="var(--pastel-pink)"
      stroke="#1e1b4b"
      strokeWidth="2"
    />
    <path
      className="anim-check"
      d="M152 120 l6 6 l12 -13"
      stroke="#1e1b4b"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Step 2 — plans: three cards, middle one lifts/highlights on loop
export const StepPlan = () => (
  <svg viewBox="0 0 240 180" className="step-anim" fill="none">
    <rect
      x="20"
      y="55"
      width="55"
      height="90"
      rx="12"
      fill="#fff"
      stroke="#1e1b4b"
      strokeWidth="2.5"
    />
    <rect
      className="anim-lift"
      x="92"
      y="40"
      width="58"
      height="105"
      rx="12"
      fill="var(--pastel-purple)"
      stroke="#1e1b4b"
      strokeWidth="2.5"
    />
    <rect
      x="167"
      y="55"
      width="55"
      height="90"
      rx="12"
      fill="#fff"
      stroke="#1e1b4b"
      strokeWidth="2.5"
    />
    <path
      d="M105 95 l8 8 l16 -18"
      stroke="#1e1b4b"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

// Step 3 — build: a chat bubble pulsing like a live conversation
export const StepBuild = () => (
  <svg viewBox="0 0 240 180" className="step-anim" fill="none">
    <rect
      x="30"
      y="40"
      width="120"
      height="50"
      rx="14"
      fill="var(--pastel-blue)"
      stroke="#1e1b4b"
      strokeWidth="2.5"
    />
    <rect
      x="90"
      y="100"
      width="120"
      height="50"
      rx="14"
      fill="var(--pastel-pink)"
      stroke="#1e1b4b"
      strokeWidth="2.5"
    />
    <circle className="anim-dot d1" cx="60" cy="65" r="5" fill="#1e1b4b" />
    <circle className="anim-dot d2" cx="80" cy="65" r="5" fill="#1e1b4b" />
    <circle className="anim-dot d3" cx="100" cy="65" r="5" fill="#1e1b4b" />
  </svg>
);
