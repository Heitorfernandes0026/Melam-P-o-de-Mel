import { motion } from 'framer-motion';
import { MessageCircle, Instagram } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Faça sua encomenda
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Entre em contato pelo WhatsApp ou Instagram para fazer seu pedido personalizado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/melamo_paodemel/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 bg-primary text-primary-foreground hover:opacity-90"
            >
              <Instagram className="w-5 h-5" />
              @melamo_paodemel
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
