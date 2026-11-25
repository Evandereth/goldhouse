import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";

const heroStats = [
  { value: "150+", label: "Projects", dim: "opacity-30" },
  { value: "10+", label: "Years of Experience", dim: "opacity-60" },
  { value: "500+", label: "Happy Clients", dim: "opacity-100" },
];

function Select({ icon, label }) {
  return (
    <button className="flex flex-1 items-center justify-between gap-2 rounded-full bg-blush px-4 py-2.5 text-xs text-ink/60 transition hover:bg-blush/70">
      <span className="flex items-center gap-2">
        <Icon name={icon} size={14} /> {label}
      </span>
      <Icon name="chevron-down" size={14} />
    </button>
  );
}

export default function Hero() {
  const [offset, setOffset] = useState(0);

  // subtle parallax on the hero image
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY * 0.15);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blush/70 via-cream to-cream pt-28">
      {/* left stats */}
      <ul className="absolute left-6 top-48 z-10 hidden space-y-6 lg:block xl:left-16">
        {heroStats.map((s, i) => (
          <Reveal as="li" key={s.value} direction="right" delay={400 + i * 150}>
            <div className={`border-b border-ink/20 pb-1 ${s.dim}`}>
              <p className="text-xl">{s.value}</p>
              <p className="text-[0.6rem]">{s.label}</p>
            </div>
          </Reveal>
        ))}
      </ul>

      <div className="y relative z-10 mx-auto px-6 text-center">
        <Reveal>
          <h1 className="font-display text-5xl font-extrabold leading-[1.05] sm:text-7xl">
            Build Your
            <span className="block text-brand">Dream Home</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-8 flex max-w-sm items-center rounded-full bg-white p-1.5 shadow-md"
          >
            <input
              placeholder="with Modern Design"
              className="min-w-0 flex-1 bg-transparent px-4 text-xs outline-none placeholder:text-ink/40"
            />
            <button className="rounded-full bg-ink px-5 py-2 text-xs text-white transition hover:bg-brand">
              Search Now
            </button>
          </form>
        </Reveal>
      </div>

      {/* hero image */}
      <div className="wide-container relative mx-auto -mt-4 px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-t-[2.5rem]">
          <img
            src="/images/hero-house.jpg"
            alt="Modern house"
            style={{ transform: `translateY(${offset}px) scale(1.1)` }}
            className="h-[26rem] w-full object-cover sm:h-[34rem]"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blush/90 to-transparent" />
        </div>

        {/* find properties card */}
        <Reveal delay={300} className="relative z-20 mx-auto -mt-16 max-w-2xl">
          <div className="rounded-3xl bg-cream p-5 shadow-xl">
            <h3 className="text-center text-sm font-semibold">Find Properties</h3>
            <div className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Select icon="map-pin" label="City" />
              <Select icon="building-2" label="Properties" />
              <Select icon="bed-double" label="Bedroom" />
              <button className="grid h-10 w-10 shrink-0 place-items-center self-center rounded-full bg-brand text-white transition hover:scale-110 hover:bg-brand-dark">
                <Icon name="search" size={16} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}