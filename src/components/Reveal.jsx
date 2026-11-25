import { useInView } from "../hooks/useInView";

const hidden = {
  up: "translate-y-10",
  down: "-translate-y-10",
  left: "translate-x-10",
  right: "-translate-x-10",
  scale: "scale-95",
  none: "",
};

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  as: Tag = "div",
}) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out will-change-transform ${
        inView
          ? "opacity-100 translate-x-0 translate-y-0 scale-100"
          : `opacity-0 ${hidden[direction]}`
      } ${className}`}
    >
      {children}
    </Tag>
  );
}