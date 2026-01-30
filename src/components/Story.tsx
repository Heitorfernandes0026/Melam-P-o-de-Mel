import { motion } from 'framer-motion';
import historiaImg from '@/assets/historia.png';

export const Story = () => {
  return (
    <section id="historia" className="py-20 bg-gradient-warm overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-secondary font-medium mb-2">✨ Nossa história</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
              Tradição com amor
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Em 2021, nascemos com um propósito simples: criar momentos doces em meio aos desafios do dia a dia.
              </p>
              <p>
                De lá para cá, já são mais de <strong className="text-foreground">40 mil pãezinhos</strong> entregues, milhares de sorrisos e uma comunidade que cresce junto com a gente.
              </p>
              <p>
                Cada encomenda é preparada com o mesmo carinho do primeiro dia — porque acreditamos que o amor é o ingrediente mais importante.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <span className="text-secondary text-3xl mb-2 block">🍯</span>
                <h4 className="font-display text-xl text-foreground">Feito à Mão</h4>
                <p className="text-muted-foreground text-sm">Cada unidade é única</p>
              </div>
              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <span className="text-secondary text-3xl mb-2 block">📅</span>
                <h4 className="font-display text-xl text-foreground">Desde 2021</h4>
                <p className="text-muted-foreground text-sm">+40 mil unidades</p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-secondary/10 rounded-3xl blur-2xl" />
            <img
              src={historiaImg}
              alt="Melamô - Nossa história"
              className="relative w-full rounded-3xl shadow-elevated object-cover aspect-[4/5]"
            />
            {/* Floating Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-primary rounded-2xl p-6 shadow-elevated"
            >
              <p className="font-display text-3xl text-secondary">40k+</p>
              <p className="text-primary-foreground text-sm">pãezinhos entregues</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
