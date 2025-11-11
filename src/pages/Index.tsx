import { VictoryScene } from "@/components/VictoryScene";

const Index = () => {
  return (
    <div className="relative w-full h-screen bg-background overflow-hidden">
      {/* 3D Scene */}
      <VictoryScene />
      
      {/* Overlay content */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top banner */}
        <div className="absolute top-0 left-0 right-0 p-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-2 animate-pulse-glow">
            🏆 RCB VICTORIOUS! 🏆
          </h1>
          <p className="text-secondary text-xl md:text-2xl font-semibold">
            Champions at Last!
          </p>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-center">
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 inline-block glow-red">
            <p className="text-foreground text-lg mb-2">
              🎉 <span className="text-primary font-bold">Royal Challengers Bangalore</span> 🎉
            </p>
            <p className="text-muted-foreground">
              Drag to rotate • Scroll to zoom • Experience the glory!
            </p>
          </div>
        </div>

        {/* Side badges */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 space-y-4">
          <div className="bg-primary/20 backdrop-blur-sm p-4 rounded-full glow-gold animate-float">
            <span className="text-4xl">🏏</span>
          </div>
        </div>
        
        <div className="absolute right-8 top-1/2 -translate-y-1/2 space-y-4">
          <div className="bg-secondary/20 backdrop-blur-sm p-4 rounded-full glow-gold animate-float" style={{ animationDelay: '1s' }}>
            <span className="text-4xl">⭐</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
