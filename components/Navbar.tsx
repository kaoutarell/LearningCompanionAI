import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar bg-indigo-950">
      <Link href="/">
        <div className="flex items-center gap-2 5 cursor-pointer">
          <Image
            src="/images/illuma_no_bg.svg"
            alt="logo"
            width={46}
            height={44}
          />
        </div>
      </Link>
      <div className="flex items-center gap-8 text-white">
        <NavItems />
        <SignedOut>
          <SignInButton>
            <button className="border border-white rounded-4xl px-4 py-2.5 text-sm font-semibold flex items-center gap-2 cursor-pointer">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
