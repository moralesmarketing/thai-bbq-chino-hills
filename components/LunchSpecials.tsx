import Image from "next/image";

export default function LunchSpecials() {
  return (
    <section className="relative overflow-hidden bg-surface py-24">
      <div className="section grid items-center gap-14 md:grid-cols-2">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
          <Image
            src="/images/real/table-spread.png"
            alt="Pad Thai, fried rice, and noodles at Thai Original BBQ"
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
        <div>
          <span className="eyebrow">Lunch Specials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Eight Plates. One Great Price.
          </h2>
          <div className="mt-5 h-[2px] w-14 bg-gold" />
          <p className="mt-6 max-w-md text-ink-soft">
            Weekdays from 11am–2:30pm, choose from eight lunch specials —
            BBQ chicken, garlic chicken, cashew shrimp, and more — each
            served with a side salad and rice for{" "}
            <span className="font-semibold text-green">$17.95</span>.
          </p>
          <a href="/menu#lunch-specials" className="btn btn-outline mt-8">
            View Lunch Menu
          </a>
        </div>
      </div>
    </section>
  );
}
