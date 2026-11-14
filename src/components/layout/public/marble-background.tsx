/**
 * Textura de mármore verde dos painéis escuros (surface-inverse).
 * `id` precisa ser único na página, pois nomeia os gradientes e o filtro do SVG.
 */
export function MarbleBackground({ id }: { id: string }) {
  const band = `${id}-band`;
  const stripes = `${id}-stripes`;
  const marble = `${id}-marble`;
  const shade = `${id}-shade`;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 900 900"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id={band} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0A231C" />
          <stop offset="0.3" stopColor="#173F33" />
          <stop offset="0.46" stopColor="#2D6050" />
          <stop offset="0.55" stopColor="#123329" />
          <stop offset="0.78" stopColor="#030E0B" />
          <stop offset="1" stopColor="#0A231C" />
        </linearGradient>
        <pattern id={stripes} width="900" height="96" patternUnits="userSpaceOnUse">
          <rect width="900" height="96" fill={`url(#${band})`} />
        </pattern>
        <filter id={marble} x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.0022 0.0055" numOctaves="3" seed="11" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="280" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <linearGradient id={shade} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.35" stopColor="#03100C" stopOpacity="0" />
          <stop offset="1" stopColor="#03100C" stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <rect
        x="-250"
        y="-250"
        width="1400"
        height="1400"
        fill={`url(#${stripes})`}
        filter={`url(#${marble})`}
        transform="rotate(-8 450 450)"
      />
      <rect width="900" height="900" fill={`url(#${shade})`} />
    </svg>
  );
}
