export default function TimeLockLogo() {
  return (
  <svg xmlns="http://www.w3.org/2000/svg" width="280" height="40" viewBox="0 0 560 180" role="img" aria-label="TimeLock logo" className="flex-1">
  <rect width="560" height="180" fill="none"/>

  <rect x="28" y="64" width="104" height="84" rx="18" fill="#539cff"/>
  <path d="M44 64a40 40 0 1 1 80 0" fill="none" stroke="#539cff" strokeWidth="18" strokeLinecap="round"/>
  <circle cx="80" cy="106" r="22" fill="#ffffff"/>
  <path d="M80 106 L80 88" stroke="#539cff" strokeWidth="4" strokeLinecap="round"/>
  <path d="M80 106 L96 106" stroke="#539cff" strokeWidth="4" strokeLinecap="round"/>
  <circle cx="80" cy="84" r="2.6" fill="#539cff"/>
  <circle cx="102" cy="106" r="2.6" fill="#539cff"/>
  <circle cx="80" cy="128" r="2.6" fill="#539cff"/>
  <circle cx="58" cy="106" r="2.6" fill="#539cff"/>

  <g transform="translate(170,38) skewX(-8)">
    <text x="0" y="88"
          fontFamily="Bree Serif,Bree Serif Fallback"
          fontSize="90" fontWeight="700" letterSpacing="1"
          fill="#539cff">
      Time<tspan>Lock</tspan>
    </text>
  </g>
</svg>


  );
}
