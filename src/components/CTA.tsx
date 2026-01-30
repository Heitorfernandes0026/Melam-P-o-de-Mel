import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-6xl mb-6 block">🍯</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-primary-foreground mb-6">
            Pronto para adoçar seu momento?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Faça sua encomenda agora e descubra o sabor que conquistou milhares de clientes.
          </p>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg inline-flex mb-4"
          >
            <MessageCircle className="w-5 h-5" />
            Fazer meu pedido agora
          </a>

          <p className="text-primary-foreground/60 text-sm">
            Atendimento de segunda a sábado • Resposta rápida
          </p>
        </motion.div>
      </div>
    </section>
  );
};
