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
    <section id="services" className="bg-blush/40 px-6 py-20">
      <div className="wide-container mx-auto">
        <Reveal className="text-center">
          <h2 className="text-3xl font-medium">Our Services</h2>
          <p className="mx-auto mt-3 max-w-sm text-xs">
            Enhance your property buying and selling experience with professional real estate
            solutions tailored to your needs.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map(({ icon, title }, i) => (
            <Reveal key={title} delay={i * 120} direction="scale">
              <div className="group flex h-full flex-col gap-10 rounded-3xl bg-brand p-5 text-white transition duration-300 hover:-translate-y-1.5 hover:bg-brand-dark hover:shadow-xl">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-brand transition group-hover:rotate-6">
                  <Icon name={icon} size={30} strokeWidth={1.4} />
                </div>
                <div>
                  <h3 className="text-base font-medium">{title}</h3>
                  <p className="mt-2 text-[0.7rem] text-white/80">
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