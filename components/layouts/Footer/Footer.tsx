import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

const footerColumns = [
  {
    title: "Features",
    links: ["Chat", "Mobile"],
  },
  {
    title: "Product",
    links: ["Pricing", "Enterprise", "AI companions", "FAQ", "Explore more…"],
  },
  {
    title: "Student Life",
    links: ["About", "Events", "Blog/Forum", "Feedback/Suggestion"],
  },
  {
    title: "Resources",
    links: ["Security", "Status", "Contact us", "Terms", "Privacy", "License"],
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
                src="/images/illuma_no_bg.png"
                alt="logo"
                width={200}
                height={200}
                className="h-14 w-auto -my-1 max-sm:h-10"
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
            <Instagram className="size-5 hover:text-foreground transition-colors" />
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
