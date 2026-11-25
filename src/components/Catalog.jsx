import { useRef } from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";

const properties = [
  { name: "Luxury Villa – 77m²", price: "$58,000", img: "/images/prop-1.jpg" },
  { name: "Modern Home – 94m²", price: "$72,000", img: "/images/prop-2.jpg" },
  { name: "Residential House – 65m²", price: "$60,000", img: "/images/prop-3.jpg" },
  { name: "Smart Home – 60m²", price: "$52,000", img: "/images/prop-4.jpg" },
  { name: "Luxury Villa – 77m²", price: "$65,000", img: "/images/prop-1.jpg" },
  { name: "Smart Home – 60m²", price: "$55,000", img: "/images/prop-4.jpg" },
];

export default function Catalog() {
  const track = useRef(null);
  const scrollBy = (dir) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: "smooth" });
  };

  return (
    <section id="projects" className="bg-gradient-to-b from-blush/40 to-blush px-6 py-20">
      <div className="wide-container mx-auto">
        <Reveal>
          <h2 className="text-3xl font-medium sm:text-4xl">Catalog of Our Properties for 2027</h2>
          <p className="mt-3 text-xs">Building premium homes with trusted quality and smart construction.</p>
        </Reveal>

        <Reveal delay={150} className="relative mt-10">
          <div ref={track} className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth">
            {properties.map((p, i) => (
              <article
                key={i}
                className="group relative h-72 w-56 shrink-0 snap-start overflow-hidden rounded-3xl"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 pt-12 text-white">
                  <h3 className="text-xs font-medium">{p.name}</h3>
                  <p className="mt-1 text-[0.6rem] text-white/80">Price: Starting from {p.price}</p>
                </div>
              </article>
            ))}
          </div>

          {/* faded edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-blush/60 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-blush/60 to-transparent" />

          <button
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
            className="absolute left-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-brand text-white transition hover:scale-110"
          >
            <Icon name="chevron-left" size={18} />
          </button>
          <button
            onClick={() => scrollBy(1)}
            aria-label="Next"
            className="absolute right-2 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-brand text-white transition hover:scale-110"
          >
            <Icon name="chevron-right" size={18} />
          </button>
        </Reveal>
      </div>
    </section>
  );
}