import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ImageShowcase = () => {
  const handleDownload = (imageUrl: string, filename: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto px-6">
      <Card className="group relative overflow-hidden bg-gradient-card border-border/40 hover:border-primary/40 transition-all duration-500 hover:shadow-glow aspect-square before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-primary/10 before:to-accent/10 before:blur-xl before:opacity-50 before:-z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
          <span className="text-primary font-medium text-sm md:text-lg tracking-wide">Front</span>
        </div>
        <Button 
          size="sm" 
          variant="secondary"
          className="absolute top-2 right-2 z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => handleDownload("/lovable-uploads/5c9fe2f0-99ef-4822-9410-fec67ca222cb.png", "rx-codex-ai-front.png")}
        >
          <Download className="h-4 w-4" />
          <span className="hidden md:inline ml-2">Download</span>
        </Button>
        <div className="flex items-center justify-center h-full p-6">
          <img 
            src="/lovable-uploads/5c9fe2f0-99ef-4822-9410-fec67ca222cb.png" 
            alt="Rx Codex AI T-shirt Design" 
            className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Card>
      
      <Card className="group relative overflow-hidden bg-gradient-card border-border/40 hover:border-primary/40 transition-all duration-500 hover:shadow-glow aspect-square before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-accent/10 before:to-primary/10 before:blur-xl before:opacity-50 before:-z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
          <span className="text-primary font-medium text-sm md:text-lg tracking-wide">Back</span>
        </div>
        <Button 
          size="sm" 
          variant="secondary"
          className="absolute top-2 right-2 z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => handleDownload("/lovable-uploads/a88b7a49-ed16-4f1d-9da6-eaa6b7a6b1e6.png", "rx-codex-ai-back.png")}
        >
          <Download className="h-4 w-4" />
          <span className="hidden md:inline ml-2">Download</span>
        </Button>
        <div className="flex items-center justify-center h-full p-6">
          <img 
            src="/lovable-uploads/a88b7a49-ed16-4f1d-9da6-eaa6b7a6b1e6.png" 
            alt="Rx Codex AI T-shirt Back Design" 
            className="max-w-full max-h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Card>
    </div>
  );
};

export default ImageShowcase;