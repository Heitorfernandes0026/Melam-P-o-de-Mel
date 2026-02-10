import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marina S.",
    location: "São Paulo",
    text: "O melhor pão de mel que já comi! Todo mundo elogiou no aniversário da minha filha.",
    rating: 5
  },
  {
    name: "Roberto M.",
    location: "Campinas",
    text: "Comprei para presentear clientes da empresa. Sucesso absoluto!",
    rating: 5
  },
  {
    name: "Camila L.",
    location: "Santos",
    text: "O recheio é simplesmente perfeito. Derrete na boca! Virei cliente fiel.",
    rating: 5
  },
  {
    name: "Pedro H.",
    location: "Ribeirão Preto",
    text: "Surpreendi minha esposa com a caixa presente. Ela amou!",
    rating: 5
  }
];

const TestimonialsSection = () => (
  <section id="depoimentos" className="py-14 md:py-24 bg-chocolate-dark relative overflow-hidden">
    {/* Elegant texture overlay */}
    <div className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }}
    />

    {/* Warm accent glows - hidden on mobile for performance */}
    <div className="hidden md:block absolute top-20 left-20 w-64 h-64 bg-honey/10 rounded-full blur-[100px]" />
    <div className="hidden md:block absolute bottom-20 right-20 w-80 h-80 bg-honey/8 rounded-full blur-[120px]" />

    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 md:mb-16"
      >
        <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-honey/20 text-honey rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 border border-honey/30">
          ⭐ Clientes satisfeitos
        </span>
        <h3 className="text-2xl md:text-4xl font-display font-bold text-cream mb-2 md:mb-4">
          O que dizem <span className="text-gradient-honey">sobre nós</span>
        </h3>
        <p className="text-cream/60 text-sm md:text-base max-w-lg mx-auto px-2">
          Mais de 50 mil pãezinhos entregues e muitos sorrisos conquistados
        </p>
      </motion.div>

      {/* Mobile: 2 columns, Desktop: 4 columns */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white/5 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-cream/10 hover:border-honey/40 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-2 md:mb-4">
              <Quote className="w-5 h-5 md:w-8 md:h-8 text-honey/40" />
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-honey text-honey" />
                ))}
              </div>
            </div>

            <p className="text-cream/90 text-xs md:text-sm mb-3 md:mb-6 leading-relaxed line-clamp-3 md:line-clamp-none md:min-h-[72px]">
              "{testimonial.text}"
            </p>

            <div className="border-t border-cream/10 pt-2 md:pt-4">
              <p className="font-semibold text-cream text-sm md:text-base">{testimonial.name}</p>
              <p className="text-[10px] md:text-xs text-cream/50">{testimonial.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
