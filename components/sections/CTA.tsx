"use client";
import { useScrollReveal } from "@/lib/useScrollReveal";
import HowItWorks from "./HowItWorks";

const CTA = () => {
  const heading = useScrollReveal();

  return (
    <section
      className="cta-section"
      style={{
        position: "relative",
        left: "50%",
        right: "50%",
        marginLeft: "-50vw",
        marginRight: "-50vw",
        marginTop: "3%",
        width: "100vw",
        border: "none",
        borderRadius: 0,
      }}
    >
      <div className="cta-inner">
        <div
          ref={heading.ref}
          className={`reveal ${heading.shown ? "is-visible" : ""} flex flex-col items-center gap-3`}
        >
          <h1 className="cta-heading">
            Built for any kind of <span className="hero-accent">learning</span>
          </h1>
          <p className="cta-tagline">
            Getting started takes less than a minute — three simple steps and
            you're learning.
          </p>
        </div>

        <HowItWorks />
      </div>
    </section>
  );
};
export default CTA;
