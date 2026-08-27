import Image from "next/image";
import { business } from "@/lib/site-data";

function Stars({ score }: { score: number }) {
  const full = Math.round(score);
  return (
    <span className="stars text-lg leading-none">
      {"★★★★★".slice(0, full)}
      <span className="opacity-30">{"★★★★★".slice(full)}</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <Image
        src="/images/real/bbq-chicken-plate.png"
        alt="Charcoal-grilled Thai BBQ chicken plate at Thai Original BBQ"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,26,26,0.75)] via-[rgba(26,26,26,0.55)] to-[rgba(26,26,26,0.85)]" />

      <div className="section relative z-10 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="flex items-center justify-center gap-3">
            <Stars score={business.rating.yelp.score} />
            <span className="text-sm font-semibold text-ink-on-dark">
              {business.rating.yelp.score}/5
            </span>
          </div>
          <h1 className="mt-5 text-4xl leading-[1.1] font-semibold tracking-tight text-ink-on-dark sm:text-6xl">
            Experience the Soul of Thai BBQ
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-lg text-ink-on-dark/85">
            Family-owned in Chino Hills since 1998 — charcoal-grilled BBQ
            chicken, beef satay, and spare ribs made the same way for over
            25 years.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a href="/menu" className="btn btn-primary">
              View Menu
            </a>
            <a href={business.phoneHref} className="btn btn-ghost">
              Order by Phone
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
