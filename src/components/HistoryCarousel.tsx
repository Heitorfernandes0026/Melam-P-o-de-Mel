import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import historia1 from "@/assets/historia-1.png";
import historia2 from "@/assets/historia-2.png";
import historia3 from "@/assets/historia-3.png";
import historia4 from "@/assets/historia-4.png";
import historia5 from "@/assets/historia-5.png";
import historia6 from "@/assets/historia-6.png";
import historia7 from "@/assets/historia-7.png";

const slides = [
  { image: historia1, alt: "Melamô - Proprietária com mel" },
  { image: historia2, alt: "2021 - O início da jornada" },
  { image: historia3, alt: "2022 - Crescimento no Instagram" },
  { image: historia4, alt: "2023 - Nova identidade visual" },
  { image: historia5, alt: "2024 - Grandes campanhas" },
  { image: historia6, alt: "2025 - Casinha Melamô" },
  { image: historia7, alt: "4 anos de Melamô" },
];

const HistoryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next < 0) next = slides.length - 1;
      if (next >= slides.length) next = 0;
      return next;
    });
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4000);
    return () => clearInterval(timer);
  }, [paginate]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      {/* Main carousel */}
      <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-cream/10">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].alt}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-chocolate-dark/60 via-transparent to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-cream/90 hover:bg-cream rounded-full flex items-center justify-center shadow-lg transition-all duration-200 z-10"
          aria-label="Foto anterior"
        >
          <ChevronLeft className="w-6 h-6 text-chocolate-dark" />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-cream/90 hover:bg-cream rounded-full flex items-center justify-center shadow-lg transition-all duration-200 z-10"
          aria-label="Próxima foto"
        >
          <ChevronRight className="w-6 h-6 text-chocolate-dark" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-honey w-8"
                : "bg-cream/40 hover:bg-cream/60"
            }`}
            aria-label={`Ir para foto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HistoryCarousel;
