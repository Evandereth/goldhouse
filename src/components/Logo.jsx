export default function Logo({ className = "" }) {
  return (
    <a href="#home" className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 48 32" className="h-8 w-10 text-ink" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M2 30 L16 6 L26 20 L34 8 L46 30" />
        <path d="M10 30 L18 16 L26 28" />
      </svg>
      <span className="leading-none">
        <span className="block text-[0.7rem] font-semibold tracking-[0.25em]">GOLDHOUSE</span>
        <span className="block text-[0.45rem] tracking-[0.3em] text-ink/60">REAL ESTATE</span>
      </span>
    </a>
  );
}