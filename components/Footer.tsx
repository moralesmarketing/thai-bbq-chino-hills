import Image from "next/image";
import Link from "next/link";
import { business } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-surface-dark">
      <div className="section grid gap-10 py-14 md:grid-cols-3">
        <div>
          <Image
            src="/images/real/logo.png"
            alt="Thai Original BBQ & Restaurant"
            width={98}
            height={76}
            className="h-14 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-ink-on-dark/70">
            Family-owned charcoal Thai BBQ in Chino Hills since 1998 —
            grilled meats, curries, and noodles made to order.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Visit</h3>
          <p className="mt-3 text-sm text-ink-on-dark/70">
            {business.address.line1}
            <br />
            {business.address.line2}
          </p>
          <a href={business.phoneHref} className="mt-2 block text-sm font-semibold text-ink-on-dark hover:text-gold">
            {business.phone}
          </a>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-sm text-gold hover:text-ink-on-dark"
          >
            Get directions
          </a>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Order &amp; Explore</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/menu" className="text-ink-on-dark/70 hover:text-ink-on-dark">
                Full Menu
              </Link>
            </li>
            <li>
              <a href={business.phoneHref} className="text-ink-on-dark/70 hover:text-ink-on-dark">
                Order by Phone
              </a>
            </li>
            <li>
              <a href={business.yelpUrl} target="_blank" rel="noopener noreferrer" className="text-ink-on-dark/70 hover:text-ink-on-dark">
                Reviews on Yelp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="section text-xs text-ink-on-dark/50">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
