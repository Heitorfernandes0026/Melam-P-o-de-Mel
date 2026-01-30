import { motion } from "framer-motion";

interface BeeTransitionProps {
  className?: string;
}

const BeeTransition = ({ className = "" }: BeeTransitionProps) => {
  const bees = [
    { delay: 0, startX: -100, endX: "100vw", y: 20, duration: 8 },
    { delay: 2, startX: -80, endX: "100vw", y: 60, duration: 10 },
    { delay: 4, startX: -120, endX: "100vw", y: 40, duration: 9 },
  ];

  return (
    <div className={`relative h-24 overflow-hidden pointer-events-none ${className}`}>
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-honey/10 to-cream" />

      {/* Honeycomb pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="honeycomb" x="0" y="0" width="40" height="35" patternUnits="userSpaceOnUse">
              <path
                d="M20 0 L40 10 L40 25 L20 35 L0 25 L0 10 Z"
                fill="none"
                stroke="hsl(40 85% 50% / 0.4)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#honeycomb)" />
        </svg>
      </div>

      {/* Flying bees */}
      {bees.map((bee, index) => (
        <motion.div
          key={index}
          initial={{ x: bee.startX, y: bee.y }}
          animate={{
            x: bee.endX,
            y: [bee.y, bee.y - 15, bee.y + 10, bee.y - 8, bee.y]
          }}
          transition={{
            x: { duration: bee.duration, repeat: Infinity, delay: bee.delay, ease: "linear" },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute"
        >
          <CuteBee />
        </motion.div>
      ))}
    </div>
  );
};

const CuteBee = () => (
  <svg width="32" height="32" viewBox="0 0 64 64" className="drop-shadow-md">
    {/* Wings */}
    <ellipse cx="22" cy="24" rx="10" ry="6" fill="hsl(200 80% 85% / 0.7)" className="animate-pulse" />
    <ellipse cx="42" cy="24" rx="10" ry="6" fill="hsl(200 80% 85% / 0.7)" className="animate-pulse" />

    {/* Body */}
    <ellipse cx="32" cy="36" rx="14" ry="12" fill="hsl(45 100% 50%)" />

    {/* Stripes */}
    <ellipse cx="32" cy="32" rx="12" ry="3" fill="hsl(25 50% 20%)" />
    <ellipse cx="32" cy="40" rx="10" ry="3" fill="hsl(25 50% 20%)" />

    {/* Head */}
    <circle cx="32" cy="20" r="10" fill="hsl(45 100% 50%)" />

    {/* Eyes */}
    <circle cx="28" cy="18" r="3" fill="hsl(25 50% 15%)" />
    <circle cx="36" cy="18" r="3" fill="hsl(25 50% 15%)" />
    <circle cx="29" cy="17" r="1" fill="white" />
    <circle cx="37" cy="17" r="1" fill="white" />

    {/* Smile */}
    <path d="M28 24 Q32 28 36 24" stroke="hsl(25 50% 20%)" strokeWidth="2" fill="none" strokeLinecap="round" />

    {/* Antennae */}
    <path d="M28 12 Q26 6 22 4" stroke="hsl(25 50% 20%)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M36 12 Q38 6 42 4" stroke="hsl(25 50% 20%)" strokeWidth="2" fill="none" strokeLinecap="round" />
    <circle cx="22" cy="4" r="2" fill="hsl(25 50% 20%)" />
    <circle cx="42" cy="4" r="2" fill="hsl(25 50% 20%)" />

    {/* Blush */}
    <ellipse cx="24" cy="22" rx="3" ry="2" fill="hsl(0 60% 70% / 0.5)" />
    <ellipse cx="40" cy="22" rx="3" ry="2" fill="hsl(0 60% 70% / 0.5)" />
  </svg>
);

export default BeeTransition;
