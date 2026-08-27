import Image from "next/image";
import { business } from "@/lib/site-data";

export default function TheGrill() {
  return (
    <section id="about" className="bg-surface py-24">
      <div className="section grid items-center gap-14 md:grid-cols-2">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md md:order-2">
          <Image
            src="/images/real/storefront.png"
            alt="Thai Original BBQ & Restaurant storefront in Chino Hills"
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover"
          />
        </div>
        <div className="md:order-1">
          <span className="eyebrow">About Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Family-Owned. Grilling Since 1998.
          </h2>
          <div className="mt-5 h-[2px] w-14 bg-gold" />
          <p className="mt-6 max-w-md text-ink-soft">
            Thai Original BBQ has served Chino Hills for over 25 years —
            known for great service and family-style dining, from
            charcoal-grilled BBQ chicken and beef satay to lunch specials
            regulars build their week around.
          </p>
          <blockquote className="mt-6 max-w-md border-l-2 border-gold pl-4 font-[family-name:var(--font-display)] text-lg italic text-ink">
            &ldquo;The owners are still as pleasant, hospitable, and
            wonderful as always, and the food has never skipped a
            beat.&rdquo;
          </blockquote>
          <a href={business.phoneHref} className="btn btn-primary mt-8">
            Order by Phone
          </a>
        </div>
      </div>
    </section>
  );
}
