"use client";
import Link from "next/link";
import { useScrollReveal } from "@/lib/useScrollReveal";

const CTA = () => {
  const heading = useScrollReveal();
  const text = useScrollReveal();
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
        <h1
          ref={heading.ref}
          className={`cta-heading reveal ${heading.shown ? "is-visible" : ""}`}
        >
          Built for any kind of learning
        </h1>
        <div className="cta-row">
          <div
            ref={text.ref}
            className={`cta-copy reveal ${text.shown ? "is-visible" : ""}`}
          >
            <h3 className="cta-copy-title">
              Build and personalize your companion
            </h3>
            <p className="cta-copy-text">
              Pick a name, subject, voice & personality — and start learning
              through voice conversations that feel natural and fun.
            </p>
            <Link href="/companions/new" className="cta-btn">
              Build a New Companion
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTA;
