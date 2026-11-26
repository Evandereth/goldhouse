const iconPaths = {
  "map-pin": (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  "building-2": (
    <>
      <path d="M6 22V3h12v19M3 22h18M9 7h2m2 0h2M9 11h2m2 0h2M9 15h2m2 0h2M9 22v-3h6v3" />
    </>
  ),
  "bed-double": (
    <>
      <path d="M3 4v16M21 4v16M3 17h18M3 20h18" />
      <path d="M3 13h18v4H3z" />
      <path d="M6 13V8h4a3 3 0 0 1 3 3v2M13 13v-2a3 3 0 0 1 3-3h2v5" />
    </>
  ),
  "chevron-down": <path d="m6 9 6 6 6-6" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  building: (
    <>
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h.01M15 10h.01M9 14h.01M15 14h.01M10 21v-4h4v4" />
    </>
  ),
  "shield-check": (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  umbrella: (
    <>
      <path d="M12 22a2 2 0 0 0 2-2v-8" />
      <path d="M12 2v2m0 0a10 10 0 0 0-10 10 5 5 0 0 1 10 0 5 5 0 0 1 10 0A10 10 0 0 0 12 4Z" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 7v5h-5M4 17v-5h5" />
      <path d="M5.5 9A7 7 0 0 1 18 6l2 6M4 12l2 6a7 7 0 0 0 12.5-3" />
    </>
  ),
  "chevron-left": <path d="m15 18-6-6 6-6" />,
  "chevron-right": <path d="m9 18 6-6-6-6" />,
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m18 6-12 12M6 6l12 12" />,
};

export default function Icon({ name, size = 24, strokeWidth = 2, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
    >
      {iconPaths[name]}
    </svg>
  );
}
