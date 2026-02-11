import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const catalogData: Record<string, { title: string; file: string }> = {
  corporativo: {
    title: "Catálogo Corporativo",
    file: "/catalogos/catalogo-corporativo.pdf",
  },
  tradicional: {
    title: "Catálogo Tradicional",
    file: "/catalogos/catalogo-tradicional.pdf",
  },
};

const CatalogView = () => {
  const { type } = useParams<{ type: string }>();
  const catalog = type ? catalogData[type] : null;

  if (!catalog) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display font-bold text-chocolate-dark mb-4">
            Catálogo não encontrado
          </h1>
          <Button variant="honey" asChild>
            <Link to="/">Voltar para o site</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-chocolate-dark flex flex-col">
      {/* Top bar */}
      <header className="bg-chocolate-dark/95 backdrop-blur-md border-b border-honey/20 px-4 py-3 flex items-center justify-between gap-3 flex-shrink-0">
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="border-cream/30 text-cream hover:bg-cream/10 hover:text-honey"
            asChild
          >
            <Link to="/#catalogos">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Voltar para o site</span>
              <span className="sm:hidden">Voltar</span>
            </Link>
          </Button>
          <h1
            className="text-cream font-semibold text-sm md:text-base truncate"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {catalog.title}
          </h1>
        </div>
        <Button variant="honey" size="sm" className="text-xs md:text-sm flex-shrink-0" asChild>
          <a href="https://wa.me/5531993805082" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-4 h-4" />
            <span className="hidden sm:inline">Pedir agora</span>
            <span className="sm:hidden">Pedir</span>
          </a>
        </Button>
      </header>

      {/* PDF Viewer */}
      <div className="flex-1">
        <iframe
          src={catalog.file}
          title={catalog.title}
          className="w-full h-full border-0"
          style={{ minHeight: "calc(100vh - 57px)" }}
        />
      </div>
    </div>
  );
};

export default CatalogView;
