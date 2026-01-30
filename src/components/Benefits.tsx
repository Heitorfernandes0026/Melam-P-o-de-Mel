import { motion } from 'framer-motion';

const benefits = [
  {
    emoji: '🍯',
    title: 'Receita artesanal',
    description: 'Feito à mão com amor',
  },
  {
    emoji: '🍫',
    title: 'Chocolate premium',
    description: 'Alta qualidade',
  },
  {
    emoji: '🎁',
    title: 'Embalagem especial',
    description: 'Ideal para presente',
  },
  {
    emoji: '⏰',
    title: 'Sob encomenda',
    description: 'Sempre fresquinho',
  },
  {
    emoji: '🏢',
    title: 'Corporativo',
    description: 'Brindes exclusivos',
  },
];

export const Benefits = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl sm:text-3xl text-foreground mb-2">
            Por que escolher a Melamô?
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 text-center shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform duration-300">
                  {benefit.emoji}
                </span>
                <h3 className="font-display text-lg text-foreground mb-1">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
