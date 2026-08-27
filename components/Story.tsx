const features = [
  {
    title: "Diverse Thai Menu",
    description: "Thirteen menu sections — curries, noodles, soups, and more.",
  },
  {
    title: "Charcoal-Grilled Specialties",
    description: "BBQ chicken, beef satay, and spare ribs grilled to order.",
  },
  {
    title: "Friendly Family Service",
    description: "Family-owned and operated since 1998.",
  },
  {
    title: "Fast, Casual Dining",
    description: "Quick lunch specials, Monday through Friday.",
  },
];

export default function Story() {
  return (
    <section className="bg-surface-cream py-20">
      <div className="section">
        <div className="mx-auto max-w-xl text-center">
          <span className="eyebrow">What We Offer</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">
            Why Chino Hills Chooses Us
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green text-ink-on-dark">
                <span className="font-[family-name:var(--font-display)] text-xl">
                  {f.title.charAt(0)}
                </span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-sm text-ink-soft">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
