import React from "react";
import Hero from "@/components/Hero";
import CompanionCard from "@/components/CompanionCard";
import CTA from "@/components/CTA";
import { getAllCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";

const Page = async () => {
  const companions = await getAllCompanions({ limit: 3 });
  return (
    <>
      <main>
        <Hero />
        <h1 className="text-2xl underline">Popular Companions</h1>
        <section className="companions-grid">
          {companions?.map((companion) => (
            <CompanionCard
              key={companion.id}
              {...companion}
              color={companion.color ?? getSubjectColor(companion.subject)}
            />
          ))}
        </section>
      </main>
      <CTA />
    </>
  );
};
export default Page;
