"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <div className="nav-items">
      {navItems.map(({ label, href }) => {
        const isActive =
          href === "/" ? pathname === "/" : pathname.startsWith(href);

        return (
          <Link
            key={label}
            href={href}
            className={cn("nav-link", isActive && "active")}
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
};

export default NavItems;
