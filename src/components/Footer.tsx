import { MessageCircle, Instagram, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div>
            <a href="#" className="font-display text-3xl text-primary-foreground">
              Melamô
            </a>
            <p className="text-primary-foreground/70 mt-2 text-sm">
              Pão de mel artesanal desde 2021
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/melamo_paodemel/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center text-primary-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/70 text-sm flex items-center justify-center md:justify-end gap-1">
              Feito com <Heart className="w-4 h-4 text-secondary fill-secondary" /> em {currentYear}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
