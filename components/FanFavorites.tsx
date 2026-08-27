import Image from "next/image";
import { fanFavorites, business } from "@/lib/site-data";

const tagClass: Record<string, string> = {
  Signature: "badge-gold",
  "Most Popular": "badge-green",
  "Best Seller": "badge-green",
  Popular: "badge-green",
};

export default function FanFavorites() {
  return (
    <section id="favorites" className="relative bg-surface-cream py-24">
      <div className="page-header !bg-transparent !py-0 !pb-16">
        <span className="eyebrow">Fan Favorites</span>
        <h2 className="mt-3 text-3xl sm:text-4xl">What Chino Hills Orders Most</h2>
        <div className="divider mt-6" />
        <p className="mx-auto mt-6 max-w-md text-ink-soft">
          Cross-checked against {business.rating.yelp.count} Yelp reviews
          and per-dish review counts.
        </p>
      </div>

      <div className="section grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {fanFavorites.map((dish) => (
          <div
            key={dish.name}
            className="group overflow-hidden rounded-md border border-[var(--surface-line)] bg-surface shadow-sm"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={dish.image}
                alt={dish.name}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className={`badge ${tagClass[dish.tag] ?? "badge-green"} absolute left-4 top-4`}>
                {dish.tag}
              </span>
            </div>
            <div className="p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-ink">{dish.name}</h3>
                <span className="text-sm font-semibold text-green">{dish.price}</span>
              </div>
              <p className="mt-2 text-sm text-ink-soft">{dish.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
