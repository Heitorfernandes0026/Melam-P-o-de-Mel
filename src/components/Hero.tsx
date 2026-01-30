import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Pão de mel artesanal"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-24 lg:py-0">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block font-display text-xl sm:text-2xl text-secondary mb-4"
            >
              Melamô
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6"
            >
              O pão de mel artesanal que faz você se apaixonar{' '}
              <span className="text-gradient-honey">sabor premium a cada mordida</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-primary-foreground/80 text-lg sm:text-xl mb-8"
            >
              Feito à mão desde 2021, com ingredientes selecionados e sabor premium.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Pedir agora no WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#produtos" className="btn-outline-cream text-lg">
                Ver Sabores
              </a>
            </motion.div>
          </motion.div>

          {/* Decorative Script Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex flex-col justify-center items-center"
          >
            <div className="relative text-center">
              {/* Main Script Logo */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="font-script text-[120px] xl:text-[140px] leading-none text-chocolate-light tracking-wide"
                style={{ fontFamily: "'Kaushan Script', cursive" }}
              >
                Melamô
              </motion.h2>
              
              {/* Subtitle Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-4 flex items-center justify-center gap-4"
              >
                <span className="h-px w-12 bg-primary-foreground/30" />
                <span 
                  className="text-primary-foreground/90 text-lg tracking-[0.3em] uppercase font-medium"
                >
                  Pão de Mel
                </span>
                <span className="h-px w-12 bg-primary-foreground/30" />
              </motion.div>

              {/* Since Badge */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-4 text-primary-foreground/70 text-sm tracking-widest"
              >
                — desde 2021 —
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 75C480 70 600 80 720 85C840 90 960 90 1080 85C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(40 33% 97%)"
          />
        </svg>
      </div>
    </section>
  );
};
