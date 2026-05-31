import Link from "next/link";
import Image from "next/image";
import NavItems from "./NavItems";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-pill">
        <Link href="/" className="flex items-center cursor-pointer shrink-0">
          <Image
            src="/images/illuma_no_bg.png"
            alt="logo"
            width={80}
            height={80}
            className="h-14 w-auto -my-1 max-sm:h-10"
          />
        </Link>
        <NavItems />
        <div className="flex items-center gap-3 shrink-0 justify-self-end">
          <SignedOut>
            <SignInButton>
              <button className="nav-cta">Sign In</button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
