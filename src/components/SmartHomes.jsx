import Reveal from "./Reveal";

export default function SmartHomes() {
  return (
    <section className="bg-blush/40 px-4 py-14 sm:px-6 sm:py-16">
      <div className="wide-container mx-auto flex flex-col gap-10">
        <div className="lg:flex lg:items-center lg:justify-between lg:gap-10">
          <Reveal direction="right">
            <h2 className="text-3xl font-bold leading-[1.12] sm:text-4xl lg:max-w-[14em] lg:text-5xl">
              Modern Homes Built with Smart Technology
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-5 text-base leading-relaxed lg:max-w-[32em] lg:text-lg">
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