import Logo from "./Logo";
import Reveal from "./Reveal";

const columns = [
  { title: "Quick Links", items: ["Home", "About Us", "Our Team", "Contact Us", "Investment portfolio"] },
  { title: "Company", items: ["How we work", "Capital"] },
  { title: "Support", items: ["FAQs", "Support Centre", "Contact Us"] },
  { title: "Movement", items: ["Whats Real Estate", "Support"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/30 bg-blush px-6 pb-8 pt-14">
      <div className="wide-container mx-auto">
        <Reveal>
          <div className="grid gap-10 md:grid-cols-[1.3fr_repeat(4,1fr)]">
            <div>
              <Logo />
              <p className="mt-4 max-w-[14rem] text-[0.7rem]">
                Our vision is to make all people the best place to live for them.
              </p>
            </div>

            {columns.map((c) => (
              <div key={c.title}>
                <h4 className="text-sm font-medium">{c.title}</h4>
                <ul className="mt-4 space-y-2 text-[0.7rem] text-ink/60">
                  {c.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="transition hover:text-brand">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-ink/10 pt-5 text-[0.65rem] text-ink/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Goldhouse Real Estate. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#">Term &amp; Agreement</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}