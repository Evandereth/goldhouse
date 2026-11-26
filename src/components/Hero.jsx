import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import Icon from "./Icon";

const heroStats = [
  { value: "150+", label: "Projects", dim: "opacity-30" },
  { value: "10+", label: "Years of Experience", dim: "opacity-60" },
  { value: "500+", label: "Happy Clients", dim: "opacity-100" },
];

function PropertySelect({ icon, id, label, children }) {
  return (
    <label
      htmlFor={id}
      className="relative flex min-w-0 flex-1 items-center gap-2 rounded-full bg-blush px-4 py-2.5 text-xs text-ink/60 transition focus-within:ring-2 focus-within:ring-brand/30"
    >
      <Icon name={icon} size={15} className="shrink-0 text-brand" />
      <span className="sr-only">{label}</span>
      <select
        id={id}
        name={id}
        aria-label={label}
        className="min-w-0 flex-1 cursor-pointer appearance-none bg-transparent pr-5 text-xs text-ink/70 outline-none"
      >
        {children}
      </select>
      <Icon name="chevron-down" size={13} className="pointer-events-none absolute right-3 text-ink/50" />
    </label>
  );
}

function PropertyFilters({ prefix }) {
  const submitSearch = (event) => {
    event.preventDefault();
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={submitSearch} className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
      <PropertySelect icon="map-pin" id={`${prefix}-city`} label="City">
        <option value="">City</option>
        <option value="lagos">Lagos</option>
        <option value="abuja">Abuja</option>
        <option value="lekki">Lekki</option>
      </PropertySelect>
      <PropertySelect icon="building-2" id={`${prefix}-property`} label="Property type">
        <option value="">Property type</option>
        <option value="villa">Villa</option>
        <option value="house">House</option>
        <option value="apartment">Apartment</option>
      </PropertySelect>
      <PropertySelect icon="bed-double" id={`${prefix}-bedrooms`} label="Bedrooms">
        <option value="">Bedrooms</option>
        <option value="1">1 bedroom</option>
        <option value="2">2 bedrooms</option>
        <option value="3">3 bedrooms</option>
        <option value="4">4+ bedrooms</option>
      </PropertySelect>
      <button
        type="submit"
        aria-label="Search properties"
        className="grid h-11 w-11 shrink-0 place-items-center self-center rounded-full bg-brand text-white transition hover:scale-110 hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
      >
        <Icon name="search" size={17} strokeWidth={2.2} />
      </button>
    </form>
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
    <section id="home" className="relative overflow-hidden bg-linear-to-b from-blush/70 via-cream to-cream pt-24 sm:pt-28 md:min-h-[820px]">
      {/* left stats */}
      <ul className="absolute left-6 top-48 z-10 hidden w-52 flex-col items-stretch justify-center gap-8 lg:flex lg:left-10 xl:left-28 xl:w-60">
        {heroStats.map((s, i) => (
          <Reveal key={s.value} direction="right" delay={400 + i * 150}>
            <li className={`relative w-full list-none border-b-2 border-ink/50 pb-1 text-right text-4xl xl:text-5xl ${s.dim}`}>
              {s.value}
            </li>
            <p className="w-full text-right text-[0.8rem]">{s.label}</p>

          </Reveal>
        ))}
      </ul>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <Reveal>
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] sm:text-6xl lg:text-7xl xl:text-8xl">
            Build Your
            <span className="block text-brand">Dream Home</span>
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-6 flex w-full max-w-xl items-center rounded-full bg-white px-3 py-2.5 shadow-md sm:mt-8 sm:px-5 sm:py-3"
          >
            <input
              placeholder="...with Modern Design"
              className="min-w-0 flex-1 bg-transparent px-2 text-xs outline-none placeholder:text-ink/40 sm:px-4 sm:text-sm lg:text-base"
            />
            <button className="shrink-0 rounded-full bg-ink px-4 py-2.5 text-xs text-white transition hover:bg-brand sm:px-5 sm:text-sm lg:text-base">
              Search Now
            </button>
          </form>
        </Reveal>
      </div>

      {/* property card over the seamless desktop backdrop */}
      <Reveal delay={300} className="absolute inset-x-0 bottom-8 z-20 hidden px-6 md:block">
        <div className="mx-auto max-w-2xl rounded-3xl bg-cream/95 p-5 shadow-xl backdrop-blur-sm">
          <h3 className="text-center text-sm font-semibold">Find Properties</h3>
          <PropertyFilters prefix="desktop" />
        </div>
      </Reveal>

      {/* seamless desktop hero background */}
      <div className="hero-desktop-backdrop absolute inset-x-0 bottom-0 hidden h-[68%] overflow-hidden md:block">
        <img
          src="/images/hero-house.jpg"
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* hero image and property card for mobile/tablet */}
      <div className="wide-container relative mx-auto -mt-2 px-3 sm:-mt-4 sm:px-6 md:hidden">
        <div className="relative overflow-hidden rounded-t-[2.5rem]">
          <img
            src="/images/hero-house.jpg"
            alt="Modern house"
            style={{ transform: `translateY(${offset}px) scale(1.1)` }}
            className="h-[20rem] w-full object-cover sm:h-[28rem] lg:h-[34rem]"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blush/90 to-transparent" />
        </div>

        {/* find properties card */}
        <Reveal delay={300} className="relative z-20 mx-auto -mt-16 max-w-2xl">
          <div className="rounded-3xl bg-cream p-5 shadow-xl">
            <h3 className="text-center text-sm font-semibold">Find Properties</h3>
            <PropertyFilters prefix="mobile" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}