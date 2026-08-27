export default function Story() {
  return (
    <section id="story" className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(217,88,31,0.09),transparent_60%)]" />
      <div className="section relative max-w-2xl text-center mx-auto">
        <span className="eyebrow">Our Story</span>
        <h2 className="mt-3 text-3xl sm:text-4xl">
          Twenty-Six Years at This Location
        </h2>
        <div className="divider mt-6" />

        <blockquote className="mt-10 font-[family-name:var(--font-display)] text-2xl italic leading-relaxed text-ink sm:text-3xl">
          &ldquo;The owners are still as pleasant, hospitable, and wonderful
          as always, and the food has never skipped a beat.&rdquo;
        </blockquote>

        <p className="mx-auto mt-8 max-w-md text-ink-soft">
          Thai Original BBQ has been family-owned and operated in Chino
          Hills since 1998, known for great service and family-style
          dining alongside its charcoal-grilled BBQ specialties.
        </p>
      </div>
    </section>
  );
}
