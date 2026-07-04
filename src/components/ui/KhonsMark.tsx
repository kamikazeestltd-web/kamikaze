export default function KhonsMark({ size = 64, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: "block" }}
    >
      {/* Full disc cradled by a round C-shape crescent moon */}
      <path d="M 56 78 A 66 66 0 1 0 144 78 A 48 48 0 1 1 56 78 Z" fill="currentColor" />
      <circle cx="100" cy="72" r="34" fill="currentColor" />
    </svg>
  );
}
