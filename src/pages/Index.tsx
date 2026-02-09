import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, MessageCircle, MapPin, Clock, Heart, ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import HistoryCarousel from "@/components/HistoryCarousel";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import FAQSection from "@/components/FAQSection";
import heroVideo from "@/assets/hero-video.mp4";
import logoMelamo from "@/assets/logo-melamo.png";
import historiaBackground from "@/assets/historia-background.jpg";
import produtoKitPresente from "@/assets/produto-kit-presente.png";
import produtoTorreMel from "@/assets/produto-torre-mel.png";
import produtoClassico from "@/assets/produto-classico.png";
import produtoTrifle from "@/assets/produto-trifle.png";
import produtoDoceLeite from "@/assets/produto-doce-leite.png";
import produtoVulcao from "@/assets/produto-vulcao.png";

const navLinks = [
  { href: "#produtos", label: "Produtos" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#historia", label: "Nossa História" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-chocolate-dark/95 backdrop-blur-md border-b border-honey/20"
      >
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <a href="#" className="text-xl md:text-3xl font-script text-cream hover:text-honey transition-colors">
            Melamô
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream/80 hover:text-honey transition-colors font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            {/* CTA Button */}
            <Button variant="honey" size="sm" className="text-xs md:text-sm px-3 md:px-4" asChild>
              <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Pedir agora</span>
                <span className="sm:hidden">Pedir</span>
              </a>
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-cream hover:text-honey transition-colors"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-chocolate-dark/80 backdrop-blur-sm"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-72 bg-chocolate-dark border-l border-honey/20 pt-20 px-6"
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="py-3 px-4 text-cream/90 hover:text-honey hover:bg-honey/10 rounded-lg transition-all font-medium text-lg"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              {/* Mobile Menu CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 pt-6 border-t border-honey/20"
              >
                <Button variant="honey" size="lg" className="w-full" asChild>
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Pedir no WhatsApp
                  </a>
                </Button>

                <div className="flex justify-center gap-4 mt-6">
                  <a
                    href="https://www.instagram.com/melamo_paodemel/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-honey/10 rounded-full text-honey hover:bg-honey/20 transition-colors"
                    onClick={handleLinkClick}
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const HeroSection = () => (
  <section className="relative h-[100svh] flex items-end overflow-hidden">
    {/* Background video - muted, autoplay, loop */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={heroVideo} type="video/mp4" />
    </video>

    {/* Gradient overlay - for text readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-chocolate-dark/80 via-chocolate-dark/40 to-chocolate-dark/10 md:bg-gradient-to-t md:from-chocolate-dark/75 md:via-chocolate-dark/35 md:to-chocolate-dark/10" />

    {/* Content */}
    <div className="container mx-auto px-5 md:px-6 relative z-10 pb-20 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-2xl"
      >
        {/* Logo image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative inline-block mb-1 md:mb-2"
        >
          <div className="p-4 md:p-6"
            style={{
              backdropFilter: 'blur(2px)',
              WebkitBackdropFilter: 'blur(2px)',
              maskImage: 'radial-gradient(ellipse 80% 80% at center, black 55%, transparent 80%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at center, black 55%, transparent 80%)',
              background: 'radial-gradient(ellipse 75% 75% at center, rgba(255,255,255,0.18) 35%, rgba(255,255,255,0) 65%)',
            }}
          >
            <img
              src={logoMelamo}
              alt="Melamô"
              className="h-28 md:h-44 lg:h-52 w-auto object-contain object-bottom"
            />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-3xl leading-[1.2] md:text-5xl lg:text-6xl font-bold text-cream md:leading-tight mb-3 md:mb-5"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Pão de mel é <span className="text-gradient-honey italic">amor</span>
          <span className="block">em forma de <span className="text-gradient-honey italic">doce!</span></span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm md:text-lg text-white max-w-lg mb-5 md:mb-8 font-body leading-relaxed font-bold"
        >
          Especialistas em pães de mel artesanais. Desde 2021 levando sabor e carinho 🤎
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col gap-3 sm:flex-row sm:gap-4"
        >
          <Button variant="hero" size="xl" className="group w-full sm:w-auto min-h-[50px] text-sm md:text-base" asChild>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Pedir agora no WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <Button variant="outline" size="xl" className="w-full sm:w-auto min-h-[50px] text-sm md:text-base border-cream/40 text-cream hover:bg-cream/10" asChild>
            <a href="#produtos">
              Ver Sabores
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </div>

    {/* Decorative honey drip */}
    <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full md:hidden">
        <path
          d="M0 60V36C180 36 180 12 360 12C540 12 540 48 720 48C900 48 900 24 1080 24C1260 24 1260 36 1440 36V60H0Z"
          fill="hsl(35 40% 94%)"
        />
      </svg>
      <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full hidden md:block">
        <path
          d="M0 100V60C120 60 120 20 240 20C360 20 360 80 480 80C600 80 600 30 720 30C840 30 840 70 960 70C1080 70 1080 40 1200 40C1320 40 1320 60 1440 60V100H0Z"
          fill="hsl(35 40% 94%)"
        />
      </svg>
    </div>
  </section>
);

const products = [
  {
    name: "Clássico Doce de Leite",
    description: "Recheio cremoso de doce de leite argentino coberto com chocolate ao leite",
    price: "R$ 9,00",
    image: produtoDoceLeite,
  },
  {
    name: "Vulcão de Caramelo",
    description: "Caramelo cremoso que derrete na boca, com cobertura de chocolate meio amargo",
    price: "R$ 12,00",
    image: produtoVulcao,
  },
  {
    name: "Torre de Mel",
    description: "Degustação com 5 sabores diferentes — perfeito para compartilhar",
    price: "R$ 45,00",
    image: produtoTorreMel,
  },
  {
    name: "Pão de Mel Clássico",
    description: "Receita original com chocolate ao leite e recheio cremoso de ninho",
    price: "R$ 8,00",
    image: produtoClassico,
  },
  {
    name: "Kit Presente",
    description: "5 unidades em embalagem especial — ideal para presentear",
    price: "R$ 55,00",
    image: produtoKitPresente,
  },
  {
    name: "Trifle de Pão de Mel",
    description: "Sobremesa em taça com camadas de pão de mel, creme e frutas",
    price: "R$ 89,00",
    image: produtoTrifle,
  },
];

const ProductsSection = () => (
  <section
    id="produtos"
    className="py-14 md:py-24 bg-white relative overflow-hidden"
  >
    {/* Subtle top border accent */}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-honey/30 to-transparent" />

    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-16"
      >
        <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-honey/15 text-chocolate-dark rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 border border-honey/20">
          🍯 Nossos sabores
        </span>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-chocolate-dark mb-3 md:mb-4">
          Escolha seus <span className="text-gradient-honey">favoritos</span>
        </h2>
        <p className="text-chocolate-dark/60 text-sm md:text-base max-w-xl mx-auto px-2">
          Cada pão de mel é preparado com ingredientes premium e muito carinho
        </p>
      </motion.div>

      {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group bg-cream/50 rounded-xl md:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-honey/10 hover:border-honey/30"
          >
            <div className="relative h-44 md:h-56 overflow-hidden bg-cream">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4 md:p-6 bg-white">
              <h3 className="text-base md:text-lg font-display font-semibold text-chocolate-dark mb-1.5 md:mb-2">{product.name}</h3>
              <p className="text-chocolate-dark/60 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg md:text-xl font-bold text-gradient-honey">{product.price}</span>
                <span className="text-[10px] md:text-xs text-chocolate-dark/40 bg-cream px-2 py-1 rounded-full">unidade</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA secundário - full width on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mt-10 md:mt-14"
      >
        <Button variant="chocolate" size="lg" className="w-full sm:w-auto shadow-lg min-h-[52px]" asChild>
          <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5" />
            Ver todos os sabores e preços
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

const HistorySection = () => (
  <section
    id="historia"
    className="py-14 md:py-24 relative overflow-hidden"
  >
    {/* Background image with warm overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${historiaBackground})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-chocolate-dark/90 via-chocolate-dark/80 to-chocolate-dark/85 md:from-chocolate-dark/85 md:via-chocolate-dark/70 md:to-chocolate-dark/75" />
    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 md:mb-14"
      >
        <span className="inline-block px-3 py-1.5 md:px-4 md:py-2 bg-honey/20 text-honey rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4 border border-honey/30">
          ✨ Nossa história
        </span>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-cream">
          Tradição com <span className="text-gradient-honey">amor</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5 md:space-y-6 order-2 lg:order-1"
        >
          <div className="text-cream/90 space-y-4 md:space-y-5 text-base md:text-lg leading-relaxed font-body">
            <p>
              Em 2021, nascemos com um propósito simples: criar momentos doces em meio aos desafios do dia a dia.
            </p>
            <p>
              De lá para cá, já são mais de <strong className="text-honey">40 mil pãezinhos</strong> entregues, milhares de sorrisos e uma comunidade que cresce junto com a gente.
            </p>
            <p className="hidden md:block">
              Cada encomenda é preparada com o mesmo carinho do primeiro dia — porque acreditamos que o amor é o ingrediente mais importante.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 pt-2 md:pt-4">
            <div className="flex items-start gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-honey/20 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart className="w-5 h-5 md:w-6 md:h-6 text-honey" />
              </div>
              <div>
                <h5 className="font-semibold text-cream text-base md:text-lg">Feito à Mão</h5>
                <p className="text-xs md:text-sm text-cream/60">Cada unidade é única</p>
              </div>
            </div>
            <div className="flex items-start gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-honey/20 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-honey" />
              </div>
              <div>
                <h5 className="font-semibold text-cream text-base md:text-lg">Desde 2021</h5>
                <p className="text-xs md:text-sm text-cream/60">+40 mil unidades</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Photo Carousel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <HistoryCarousel />
        </motion.div>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section
    id="contato"
    className="py-14 md:py-24 bg-gradient-to-b from-cream to-white relative overflow-hidden"
  >
    {/* Decorative elements - hidden on mobile for performance */}
    <div className="hidden md:block absolute top-0 left-1/4 w-64 h-64 bg-honey/10 rounded-full blur-[100px]" />
    <div className="hidden md:block absolute bottom-0 right-1/4 w-80 h-80 bg-honey/8 rounded-full blur-[120px]" />

    <div className="container mx-auto px-4 md:px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto bg-white rounded-2xl md:rounded-3xl p-6 md:p-14 shadow-xl border border-honey/15"
      >
        <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-honey/15 rounded-full mb-4 md:mb-6">
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-honey" />
        </div>

        <h2 className="text-2xl md:text-4xl font-display font-bold text-chocolate-dark mb-3 md:mb-4">
          Faça sua <span className="text-gradient-honey">encomenda</span>
        </h2>
        <p className="text-chocolate-dark/60 text-sm md:text-base mb-6 md:mb-10 px-2">
          Entre em contato pelo WhatsApp ou Instagram para fazer seu pedido personalizado.
        </p>

        <div className="flex flex-col gap-3 md:flex-row md:gap-4 justify-center mb-6 md:mb-10">
          <Button variant="honey" size="lg" className="w-full md:w-auto shadow-lg min-h-[52px]" asChild>
            <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </Button>
          <Button variant="chocolate" size="lg" className="w-full md:w-auto shadow-lg min-h-[52px]" asChild>
            <a href="https://www.instagram.com/melamo_paodemel/" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5" />
              @melamo_paodemel
            </a>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-chocolate-dark/50 text-xs md:text-sm bg-cream/50 px-3 py-2 rounded-full mx-auto w-fit">
          <MapPin className="w-4 h-4 text-honey" />
          <span>Entregamos em toda a região</span>
        </div>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-6 md:py-8 bg-chocolate-dark text-cream">
    <div className="container mx-auto px-4 md:px-6 text-center">
      <h4 className="font-script text-2xl md:text-3xl text-honey mb-1.5 md:mb-2">Melamô</h4>
      <p className="text-cream/60 text-xs md:text-sm mb-3 md:mb-4">Pão de Mel Artesanal — desde 2021</p>
      <p className="text-[10px] md:text-xs text-cream/40">
        © 2024 Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      <HeroSection />
      <BenefitsSection />
      <ProductsSection />
      <HowItWorksSection />
      <HistorySection />
      <TestimonialsSection />
      <FinalCTASection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
