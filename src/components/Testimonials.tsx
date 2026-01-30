import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: 'O melhor pão de mel que já comi! Todo mundo elogiou no aniversário da minha filha.',
    author: 'Marina S.',
    location: 'São Paulo',
  },
  {
    content: 'Comprei para presentear clientes da empresa. Sucesso absoluto!',
    author: 'Roberto M.',
    location: 'Campinas',
  },
  {
    content: 'O recheio é simplesmente perfeito. Derrete na boca! Virei cliente fiel.',
    author: 'Camila L.',
    location: 'Santos',
  },
  {
    content: 'Surpreendi minha esposa com a caixa presente. Ela amou!',
    author: 'Pedro H.',
    location: 'Ribeirão Preto',
  },
];

export const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-medium mb-2">⭐ Clientes satisfeitos</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            O que dizem sobre nós
          </h2>
          <p className="text-muted-foreground text-lg">
            Mais de 40 mil pãezinhos entregues e muitos sorrisos conquistados
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-card rounded-2xl p-6 h-full shadow-soft hover:shadow-card transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>

                <div className="mt-auto">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
