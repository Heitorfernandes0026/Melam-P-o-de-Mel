import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Posso personalizar os pães de mel?',
    answer:
      'Sim! Oferecemos opções de personalização para eventos corporativos, casamentos e festas. Entre em contato pelo WhatsApp para saber mais sobre as possibilidades.',
  },
  {
    question: 'Qual o prazo de produção?',
    answer:
      'O prazo médio é de 3 a 5 dias úteis, dependendo da quantidade solicitada. Para pedidos urgentes ou grandes quantidades, entre em contato para verificarmos a disponibilidade.',
  },
  {
    question: 'Como faço o pagamento?',
    answer:
      'Aceitamos PIX, cartão de crédito e débito. O pagamento pode ser realizado de forma segura após a confirmação do pedido.',
  },
  {
    question: 'Vocês fazem entrega?',
    answer:
      'Sim! Realizamos entregas em São Paulo e região. O valor do frete é calculado de acordo com a localização. Também trabalhamos com retirada no local.',
  },
  {
    question: 'Quanto tempo dura o pão de mel?',
    answer:
      'Nossos pães de mel têm validade de 15 dias quando armazenados corretamente em local fresco e seco, longe da luz solar direta.',
  },
  {
    question: 'Fazem brindes corporativos?',
    answer:
      'Sim! Trabalhamos com brindes corporativos personalizados com a identidade visual da sua empresa. Temos condições especiais para grandes quantidades.',
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-secondary font-medium mb-2">❓ Dúvidas Frequentes</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas sobre nossos produtos e serviços
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 shadow-soft border-none"
              >
                <AccordionTrigger className="text-left font-display text-lg text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12 bg-card rounded-2xl p-8 shadow-soft"
          >
            <h3 className="font-display text-xl text-foreground mb-2">Ainda tem dúvidas?</h3>
            <p className="text-muted-foreground mb-6">
              Fale conosco pelo WhatsApp. Respondemos rápido! 💬
            </p>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex"
            >
              <MessageCircle className="w-5 h-5" />
              Tirar dúvidas no WhatsApp
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
