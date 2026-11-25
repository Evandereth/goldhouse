import Reveal from "./Reveal";

export default function SmartHomes() {
  return (
    <section className="bg-blush/40 px-6 py-16">
      <div className="wide-container mx-auto grid items-center gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Reveal direction="right">
            <h2 className="text-3xl font-medium leading-tight sm:text-4xl">
              Modern Homes Built <br /> with Smart Technology
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-5 max-w-sm text-xs leading-relaxed">
              We specialize in designing and building stylish, durable, and energy-efficient homes.
              Our expert team focuses on quality construction, elegant interiors, and comfortable
              living spaces tailored to your lifestyle.
            </p>
          </Reveal>
        </div>

        <Reveal direction="left" delay={150}>
          <div className="overflow-hidden rounded-3xl">
            <img
              src="/images/waterfront-homes.jpg"
              alt="Waterfront smart homes"
              className="h-56 w-full object-cover transition duration-700 hover:scale-105 sm:h-72"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}