import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Youtube } from "lucide-react";

const footerColumns = [
  {
    title: "Features",
    links: ["Notepad", "Chat", "Mobile"],
  },
  {
    title: "Product",
    links: [
      "Pricing",
      "Enterprise",
      "AI companions",
      "For sales",
      "For learning",
      "Explore more…",
    ],
  },
  {
    title: "Company",
    links: ["Careers", "Press", "Events", "Startup program", "Student program"],
  },
  {
    title: "Resources",
    links: [
      "Blog",
      "Security",
      "Help Center",
      "Status",
      "Affiliates",
      "Contact us",
      "Terms",
      "Privacy",
      "License",
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top: logo + link columns */}
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand mark — Illumi logo */}
          <div className="flex items-start">
            <Link href="/" aria-label="Illumi home">
              <Image
                src="/images/illuma_no_bg.svg"
                alt="Illumi"
                width={46}
                height={44}
              />
            </Link>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <p className="footer-col-title">{col.title}</p>
              {col.links.map((label) => (
                <Link key={label} href="#" className="footer-link">
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: socials + copyright */}
      <div className="footer-bottom">
        <div className="footer-socials">
          <Link href="#" aria-label="LinkedIn">
            <Linkedin className="size-5 hover:text-foreground transition-colors" />
          </Link>
          <Link href="#" aria-label="X">
            <Twitter className="size-5 hover:text-foreground transition-colors" />
          </Link>
          <Link href="#" aria-label="YouTube">
            <Youtube className="size-5 hover:text-foreground transition-colors" />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">
          © Illumi, Inc. {new Date().getFullYear()}
        </p>
      </div>

      {/* Giant faded watermark — "Illumi" styled like Granola's */}
      <span aria-hidden="true" className="footer-watermark">
        illumi
      </span>
    </footer>
  );
};

export default Footer;
