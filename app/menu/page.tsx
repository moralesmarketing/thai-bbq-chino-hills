import type { Metadata } from "next";
import { menu, business } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Menu | Thai Original BBQ & Restaurant",
  description:
    "Full menu for Thai Original BBQ in Chino Hills, CA — charcoal-grilled BBQ chicken and spare ribs, satay, curries, noodles, and lunch specials.",
};

const tagClass: Record<string, string> = {
  Popular: "badge-green",
  Signature: "badge-gold",
  Vegetarian: "badge-sage",
};

export default function MenuPage() {
  return (
    <div>
      <nav className="sticky top-[73px] z-40 border-b border-[var(--surface-line)] bg-surface/95 backdrop-blur">
        <div className="section flex gap-2 overflow-x-auto py-4">
          {menu.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="shrink-0 rounded-full border border-[var(--surface-line)] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.08em] text-ink-soft transition-colors hover:border-green hover:text-ink"
            >
              {cat.title}
            </a>
          ))}
        </div>
      </nav>

      <div className="page-header">
        <span className="eyebrow">Thai Original BBQ</span>
        <h1 className="mt-3 text-5xl sm:text-6xl">Menu</h1>
        <div className="divider mt-6" />
        <p className="mx-auto mt-6 max-w-md text-ink-soft">
          Every dish is made to order — let us know your spice preference.
          Call {business.phone} for pickup, or order delivery through
          DoorDash.
        </p>
      </div>

      <div className="section pb-24">
        <div className="rounded-md border border-[var(--surface-line)] bg-surface p-6 shadow-sm sm:p-10 md:p-14">
          <div className="grid gap-x-12 gap-y-16 md:grid-cols-2">
            {menu.map((cat) => (
              <section key={cat.id} id={cat.id} className="scroll-mt-40">
                <h2 className="text-center text-2xl tracking-wide">{cat.title}</h2>
                <div className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent" />
                {cat.note && (
                  <p className="mt-3 text-center text-xs italic text-ink-faint">
                    {cat.note}
                  </p>
                )}

                <ul className="mt-8 space-y-5">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-semibold uppercase tracking-wide text-ink">
                            {item.name}
                          </p>
                          {item.tag && (
                            <span className={`badge ${tagClass[item.tag]}`}>{item.tag}</span>
                          )}
                        </div>
                        {item.description && (
                          <p className="mt-1 text-sm italic text-ink-faint">{item.description}</p>
                        )}
                      </div>
                      <span className="shrink-0 whitespace-nowrap font-semibold text-gold">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
