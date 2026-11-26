import Reveal from "./Reveal";
import StatCard from "./StatCard";

export default function Advisors() {
  return (
    <section id="about-us" className="bg-linear-to-b from-cream to-blush/40 px-6 pb-20 pt-24">
      <div className="wide-container mx-auto">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <Reveal direction="right">
            <h2 className="text-3xl font-medium leading-[1.12] sm:text-4xl lg:text-5xl">
              Your Trusted Real <br /> Estate Advisors
            </h2>
          </Reveal>
          <Reveal direction="left" delay={150}>
            <p className="max-w-[40em] text-base leading-relaxed sm:text-lg">
              Find your perfect property with our expert real estate solutions. We help families and
              investors discover modern homes, luxury apartments, and premium living spaces with
              complete trust and transparency.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-8 sm:mt-12 md:grid-cols-2">
          <div className="grid max-w-xl grid-cols-2 gap-4">
            <Reveal delay={0}><StatCard end={30} label="Satisfied Clients" /></Reveal>
            <Reveal delay={100}><StatCard end={5} suffix="k+" label="Happy Customers" /></Reveal>
            <Reveal delay={200}><StatCard end={7} pad={2} label="Years of Experience" /></Reveal>
            <Reveal delay={300}><StatCard end={33} label="Projects Successfully" filled /></Reveal>
          </div>

          <Reveal direction="left" className="relative">
            <div className="grid grid-cols-2 gap-3">
              <img
                src="/images/house-small.jpg"
                alt="House"
                className="col-span-2 h-40 w-full rounded-2xl object-cover sm:h-44"
              />
              <img src="/images/family-1.jpg" alt="Happy family" className="h-36 w-full rounded-2xl object-cover" />
              <img src="/images/family-2.jpg" alt="Happy family" className="h-36 w-full rounded-2xl object-cover" />
            </div>

            <div className="absolute left-1/2 top-[55%] flex h-25 w-25 -translate-x-1/2 -translate-y-1/2 animate-float-slow flex-col items-center justify-center gap-1 rounded-full bg-brand text-center font-semibold text-white shadow-lg">
              <div className="flex flex-col items-center">
                <svg viewBox="0 0 48 32" className="h-8 w-10" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M2 30 L16 6 L26 20 L34 8 L46 30" />
                  <path d="M10 30 L18 16 L26 28" />
                </svg>
                <div className="leading-none">
                  <span className="block text-[0.42rem] font-semibold tracking-[0.18em]">GOLDHOUSE</span>
                  <span className="block text-[0.32rem] tracking-[0.22em]">REAL ESTATE</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}