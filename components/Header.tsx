import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/site-data";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/#about", label: "About" },
  { href: "/#location", label: "Location" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--surface-line)] bg-surface/95 backdrop-blur">
      <div className="section flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/real/logo.png"
            alt="Thai Original BBQ & Restaurant"
            width={98}
            height={76}
            className="h-14 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs font-semibold uppercase tracking-[0.15em] text-ink transition-colors hover:text-green"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={business.phoneHref} className="hidden text-sm font-semibold text-ink sm:block">
            {business.phone}
          </a>
          <a href={business.phoneHref} className="btn btn-primary">
            Order by Phone
          </a>
        </div>
      </div>
    </header>
  );
}
