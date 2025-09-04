import ImageShowcase from "@/components/ImageShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6 tracking-tight">
            Rx Codex AI
          </h1>
          <p className="text-2xl md:text-3xl text-primary font-medium mb-2">
            t-shirt design
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full opacity-60" />
        </div>

        {/* Image Showcase Section */}
        <ImageShowcase />
      </div>
    </div>
  );
};

export default Index;
