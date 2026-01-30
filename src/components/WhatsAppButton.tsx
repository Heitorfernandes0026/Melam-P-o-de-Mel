import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5500000000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-honey rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform duration-300"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-secondary-foreground" />
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-20" />
    </motion.a>
  );
};
