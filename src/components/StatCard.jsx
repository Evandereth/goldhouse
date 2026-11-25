import { useInView } from "../hooks/useInView";
import { useCountUp } from "../hooks/useCountUp";

export default function StatCard({ end, suffix = "+", pad = 0, label, filled = false }) {
  const [ref, inView] = useInView();
  const n = useCountUp(end, inView);
  const text = String(n).padStart(pad, "0");

  return (
    <div
      ref={ref}
      className={`rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
        filled ? "border-brand bg-brand text-white" : "border-brand/30 bg-white/60 text-brand"
      }`}
    >
      <p className="text-3xl font-medium">
        {text}
        {suffix}
      </p>
      <p className={`mt-5 text-sm ${filled ? "text-white" : "text-ink"}`}>{label}</p>
    </div>
  );
}