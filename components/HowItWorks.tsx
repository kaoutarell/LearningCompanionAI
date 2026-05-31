"use client";
import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";
import { StepAccount, StepPlan, StepBuild } from "./StepAnimations";

const steps = [
  {
    num: "01",
    title: "Create your account",
    text: "Sign up in seconds. No credit card, no friction. Just you and a blank slate.",
    Visual: StepAccount,
  },
  {
    num: "02",
    title: "Choose a plan",
    text: "Pick the plan that fits how you learn. Start free, upgrade whenever you're ready.",
    Visual: StepPlan,
  },
  {
    num: "03",
    title: "Build your companion",
    text: "Name it, pick a subject and voice, and start an intuitive conversation. Learning, your way.",
    Visual: StepBuild,
  },
];

const Step = ({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) => {
  const reveal = useScrollReveal();
  const flipped = index % 2 === 1; // step 02 is mirrored
  const Visual = step.Visual;

  return (
    <div
      ref={reveal.ref}
      className={`step reveal ${reveal.shown ? "is-visible" : ""} ${flipped ? "step-flip" : ""}`}
    >
      <div className="step-copy">
        <span className="step-num">{step.num}</span>
        <h3 className="step-title">{step.title}</h3>
        <p className="step-text">{step.text}</p>
      </div>
      <div className="step-visual">
        <Visual />
      </div>
    </div>
  );
};

const StepArrow = ({ dir }: { dir: "to-right" | "to-left" }) => {
  const reveal = useScrollReveal();
  return (
    <div
      ref={reveal.ref}
      className={`step-arrow reveal ${reveal.shown ? "is-visible" : ""}`}
    >
      <svg
        viewBox="0 0 600 240"
        className={`arrow-svg ${dir}`}
        fill="none"
        preserveAspectRatio="none"
      >
        {/* diagonal: top-left → curls → bottom-right */}
        <path
          className="arrow-path"
          d="M40 20
             C 220 40, 120 110, 280 120
             C 340 124, 320 95, 300 110
             C 285 122, 330 140, 420 150
             C 500 158, 540 190, 555 215"
          stroke="#2b2b2b"
          strokeWidth="3"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        {/* arrowhead pointing down-right at tip (~555,215) */}
        <path
          className="arrow-head"
          d="M535 200 L558 218 L560 190"
          stroke="#2b2b2b"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="how">
      <Step step={steps[0]} index={0} />
      <StepArrow dir="to-right" />
      <Step step={steps[1]} index={1} />
      <StepArrow dir="to-left" />
      <Step step={steps[2]} index={2} />

      <Link href="/sign-in" className="how-cta">
        Get started, it's free <span>→</span>
      </Link>
    </div>
  );
};
export default HowItWorks;
