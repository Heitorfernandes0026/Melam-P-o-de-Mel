import { motion } from 'framer-motion';

const steps = [
  {
    number: '1',
    title: 'Escolha',
    subtitle: 'seus sabores',
    description: 'Navegue pelo catálogo e escolha suas combinações favoritas',
  },
  {
    number: '2',
    title: 'Fale conosco',
    subtitle: 'pelo WhatsApp',
    description: 'Entre em contato pelo WhatsApp para confirmar seu pedido',
  },
  {
    number: '3',
    title: 'Receba',
    subtitle: 'com carinho',
    description: 'Produzimos e entregamos fresquinho para você',
  },
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-medium mb-2">✨ Simples e rápido</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground">
            Como Funciona
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}

              <div className="relative z-10">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-honey rounded-full flex items-center justify-center shadow-glow">
                  <span className="font-display text-4xl text-secondary-foreground">{step.number}</span>
                </div>
                <h3 className="font-display text-2xl text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-secondary font-medium mb-3">{step.subtitle}</p>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
