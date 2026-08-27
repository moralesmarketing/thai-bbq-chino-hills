import Image from "next/image";

export default function LunchSpecials() {
  return (
    <section className="relative overflow-hidden bg-surface-raised py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(201,162,39,0.07),transparent_60%)]" />
      <div className="section relative grid items-center gap-14 md:grid-cols-2">
        <div className="md:order-2 relative aspect-[4/3] w-full overflow-hidden rounded-sm">
          <Image
            src="/images/lunch-special.jpg"
            alt="Thai BBQ chicken lunch plate with rice and salad"
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
        <div className="md:order-1">
          <div className="mb-6 h-px w-16 bg-gradient-to-r from-gold to-transparent" />
          <span className="eyebrow">Lunch Specials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Eight Plates.
            <br />
            One Great Price.
          </h2>
          <p className="mt-6 max-w-md text-ink-soft">
            Weekdays from 11am–2:30pm, choose from eight lunch specials —
            BBQ chicken, garlic chicken, cashew shrimp, and more — each
            served with a side salad and rice for {" "}
            <span className="text-gold">$17.95</span>.
          </p>
          <a href="/menu#lunch-specials" className="btn btn-ghost mt-8">
            View Lunch Menu
          </a>
        </div>
      </div>
    </section>
  );
}
