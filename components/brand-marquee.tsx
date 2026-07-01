const brands = ["Jordan", "Nike Dunk", "Yeezy", "New Balance", "Air Max", "Travis Scott"];

export default function BrandMarquee() {
  return (
    <div className="overflow-hidden border-y border-neutral-200 bg-white py-5">
      <div className="flex w-max animate-marquee gap-16">
        {[...brands, ...brands].map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="flex items-center gap-3 text-lg font-bold uppercase tracking-wide text-neutral-400"
          >
            {brand}
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          </span>
        ))}
      </div>
    </div>
  );
}
