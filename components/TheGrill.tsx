import Image from "next/image";

export default function TheGrill() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,88,31,0.08),transparent_60%)]" />
      <div className="section relative grid items-center gap-14 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
          <Image
            src="/images/the-grill.jpg"
            alt="Chicken grilling over live charcoal at Thai Original BBQ"
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
        <div>
          <div className="mb-6 h-px w-16 bg-gradient-to-r from-gold to-transparent" />
          <span className="eyebrow">The Grill</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Family-Owned.
            <br />
            Grilling Since 1998.
          </h2>
          <p className="mt-6 max-w-md text-ink-soft">
            Thai Original BBQ has served Chino Hills for over 25 years —
            known for great service and family-style dining, from
            charcoal-grilled BBQ chicken and beef satay to lunch specials
            regulars build their week around.
          </p>
          <p className="mt-4 max-w-md text-ink-soft">
            Every skewer and half chicken is marinated in-house and grilled
            to order over live charcoal.
          </p>
        </div>
      </div>
    </section>
  );
}
