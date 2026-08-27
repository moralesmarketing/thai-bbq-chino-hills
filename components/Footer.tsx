import Link from "next/link";
import { business } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--surface-line)] bg-surface">
      <div className="section grid gap-10 py-14 md:grid-cols-3">
        <div>
          <span className="font-[family-name:var(--font-body)] text-base font-bold uppercase tracking-[0.3em] text-ink">
            Thai BBQ
          </span>
          <p className="mt-4 max-w-xs text-sm text-ink-soft">
            Family-owned charcoal Thai BBQ in Chino Hills since 1998 —
            grilled meats, curries, and noodles made to order.
          </p>
        </div>

        <div>
          <h3 className="eyebrow">Visit</h3>
          <p className="mt-3 text-sm text-ink-soft">
            {business.address.line1}
            <br />
            {business.address.line2}
          </p>
          <a href={business.phoneHref} className="mt-2 block text-sm font-semibold text-ink hover:text-ember">
            {business.phone}
          </a>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block text-sm text-gold hover:text-ink"
          >
            Get directions
          </a>
        </div>

        <div>
          <h3 className="eyebrow">Order &amp; Explore</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/menu" className="text-ink-soft hover:text-ink">
                Full Menu
              </Link>
            </li>
            <li>
              <a href={business.phoneHref} className="text-ink-soft hover:text-ink">
                Order by Phone
              </a>
            </li>
            <li>
              <a href={business.yelpUrl} target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-ink">
                Reviews on Yelp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[var(--surface-line)] py-6">
        <p className="section text-xs text-ink-faint">
          © {new Date().getFullYear()} {business.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
