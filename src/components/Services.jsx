import Reveal from "./Reveal";
import Icon from "./Icon";

const services = [
  { icon: "building", title: "Affordable Property" },
  { icon: "refresh", title: "Fast and Easy Process" },
  { icon: "shield-check", title: "Guaranteed Quality" },
  { icon: "umbrella", title: "Property Insurance" },
];

export default function Services() {
  return (
    <section id="services" className="bg-blush/40 px-4 py-16 sm:px-6 sm:py-20">
      <div className="wide-container mx-auto">
        <Reveal className="text-center">
          <h2 className="text-3xl font-medium sm:text-4xl">Our Services</h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed sm:text-base">
            Enhance your property buying and selling experience with professional real estate
            solutions tailored to your needs.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon, title }, i) => (
            <Reveal key={title} delay={i * 120} direction="scale">
              <div className="group flex min-h-64 h-full flex-col justify-between rounded-3xl bg-brand p-5 text-white transition duration-300 hover:-translate-y-1.5 hover:bg-brand-dark hover:shadow-xl">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-brand transition group-hover:rotate-6">
                  <Icon name={icon} size={30} strokeWidth={1.4} />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">
                    We help you manage property taxes with smart and reliable real estate guidance.
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}