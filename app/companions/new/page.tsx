import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { newCompanionPermissions } from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";

// the users that are not logged in can't build a new companion

const newCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  //check if user has permissions to create a new companion
  const canCreateCompanion = await newCompanionPermissions();
  return (
    <main className="min-lg:w1/3 min-md:w-2/3 items-center justify-center">
      {canCreateCompanion ? (
        <article className="w-full gap-4 flex flex-col">
          <h1>Companion Builder</h1>
          <CompanionForm />
        </article>
      ) : (
        <article className="companion-limit">
          <Image
            src="/images/limit.svg"
            alt="Companion limit reached"
            width={360}
            height={230}
          />
          <div className="cta-badge">Upgrade your plan</div>
          <h1>You've reached your companion limit.</h1>
          <p>
            You've reached your companion limit. Upgrade to create more
            companions and premium features
          </p>
          <Link href="/subscription" className="btn-primary">
            Upgrade My Plan
          </Link>
        </article>
      )}
    </main>
  );
};

export default newCompanion;
