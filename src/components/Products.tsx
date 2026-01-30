import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

import produtoDoceLeite from '@/assets/produto-doce-leite.png';
import produtoVulcao from '@/assets/produto-vulcao.png';
import produtoTorreMel from '@/assets/produto-torre-mel.png';
import produtoClassico from '@/assets/produto-classico.png';
import produtoKitPresente from '@/assets/produto-kit-presente.png';
import produtoTrifle from '@/assets/produto-trifle.png';

const products = [
  {
    name: 'Clássico Doce de Leite',
    description: 'Recheio cremoso de doce de leite argentino coberto com chocolate ao leite',
    price: 'R$ 9,00',
    unit: 'unidade',
    image: produtoDoceLeite,
  },
  {
    name: 'Vulcão de Caramelo',
    description: 'Caramelo cremoso que derrete na boca, com cobertura de chocolate meio amargo',
    price: 'R$ 12,00',
    unit: 'unidade',
    image: produtoVulcao,
    highlight: true,
  },
  {
    name: 'Torre de Mel',
    description: 'Degustação com 5 sabores diferentes — perfeito para compartilhar',
    price: 'R$ 45,00',
    unit: 'unidade',
    image: produtoTorreMel,
  },
  {
    name: 'Pão de Mel Clássico',
    description: 'Receita original com chocolate ao leite e recheio cremoso de ninho',
    price: 'R$ 8,00',
    unit: 'unidade',
    image: produtoClassico,
  },
  {
    name: 'Kit Presente',
    description: '5 unidades em embalagem especial — ideal para presentear',
    price: 'R$ 55,00',
    unit: 'unidade',
    image: produtoKitPresente,
  },
  {
    name: 'Trifle de Pão de Mel',
    description: 'Sobremesa em taça com camadas de pão de mel, creme e frutas',
    price: 'R$ 89,00',
    unit: 'unidade',
    image: produtoTrifle,
  },
];

export const Products = () => {
  return (
    <section id="produtos" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-medium mb-2">🍯 Nossos sabores</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Escolha seus favoritos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada pão de mel é preparado com ingredientes premium e muito carinho
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div
                className={`bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 hover:-translate-y-2 ${
                  product.highlight ? 'ring-2 ring-secondary' : ''
                }`}
              >
                {product.highlight && (
                  <div className="bg-gradient-honey text-secondary-foreground text-center py-2 text-sm font-semibold">
                    ⭐ Mais vendido
                  </div>
                )}
                <div className="p-6">
                  <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl bg-muted">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-2xl text-secondary">{product.price}</span>
                    <span className="text-muted-foreground text-sm">/{product.unit}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg inline-flex"
          >
            <MessageCircle className="w-5 h-5" />
            Ver todos os sabores e preços
          </a>
        </motion.div>
      </div>
    </section>
  );
};
