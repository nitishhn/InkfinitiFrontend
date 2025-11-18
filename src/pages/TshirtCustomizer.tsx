import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shirt,
  Palette,
  Sticker,
  ShoppingCart,
  RotateCcw,
  Check,
} from "lucide-react";

interface TshirtConfig {
  style: "full-sleeve" | "half-sleeve" | "round-neck" | "v-neck";
  color: string;
  sticker: string | null;
  stickerPosition: { x: number; y: number };
}

const TshirtCustomizer = () => {
  const [config, setConfig] = useState<TshirtConfig>({
    style: "round-neck",
    color: "#374151",
    sticker: null,
    stickerPosition: { x: 50, y: 40 },
  });

  const tshirtStyles = [
    { id: "round-neck", name: "Round Neck", icon: "👕" },
    { id: "v-neck", name: "V-Neck", icon: "🅥" },
    { id: "half-sleeve", name: "Half Sleeve", icon: "👕" },
    { id: "full-sleeve", name: "Full Sleeve", icon: "🧥" },
  ];

  const colors = [
    "#374151",
    "#6B7280",
    "#111827",
    "#1F2937",
    "#DC2626",
    "#EA580C",
    "#D97706",
    "#CA8A04",
    "#059669",
    "#0D9488",
    "#0891B2",
    "#0284C7",
    "#7C3AED",
    "#C026D3",
    "#FFFFFF",
    "#000000",
  ];

  const stickers = [
    { id: "star", emoji: "⭐", name: "Star" },
    { id: "heart", emoji: "❤️", name: "Heart" },
    { id: "smile", emoji: "😊", name: "Smile" },
    { id: "rocket", emoji: "🚀", name: "Rocket" },
    { id: "lightning", emoji: "⚡", name: "Lightning" },
    { id: "tree", emoji: "🌳", name: "Tree" },
    { id: "music", emoji: "🎵", name: "Music" },
    { id: "fire", emoji: "🔥", name: "Fire" },
  ];

  const resetCustomization = () => {
    setConfig({
      style: "round-neck",
      color: "#374151",
      sticker: null,
      stickerPosition: { x: 50, y: 40 },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional T-Shirt Customization
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Design high-quality custom t-shirts with our professional tools.
            Choose from premium styles, colors, and designs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Customization Panel */}
          <div className="space-y-8">
            {/* T-Shirt Style Selection */}
            <Card className="p-8 shadow-card border">
              <div className="flex items-center gap-3 mb-6">
                <Shirt className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Select Style</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {tshirtStyles.map((style) => (
                  <Button
                    key={style.id}
                    variant={config.style === style.id ? "active" : "selection"}
                    className="h-24 flex-col gap-3 text-base"
                    onClick={() =>
                      setConfig((prev) => ({ ...prev, style: style.id as any }))
                    }
                  >
                    <span className="text-2xl">{style.icon}</span>
                    <span>{style.name}</span>
                  </Button>
                ))}
              </div>
            </Card>

            {/* Color Selection */}
            <Card className="p-8 shadow-card border">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Choose Color</h3>
              </div>
              <div className="grid grid-cols-8 gap-3">
                {colors.map((color) => (
                  <button
                    key={color}
                    className={`w-12 h-12 rounded-lg border-2 transition-professional hover-scale ${
                      config.color === color
                        ? "border-primary shadow-card"
                        : "border-border hover:border-primary/50"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setConfig((prev) => ({ ...prev, color }))}
                  >
                    {config.color === color && (
                      <Check
                        className={`w-4 h-4 mx-auto ${
                          color === "#FFFFFF" ? "text-gray-600" : "text-white"
                        }`}
                      />
                    )}
                  </button>
                ))}
              </div>
            </Card>

            {/* Sticker Selection */}
            <Card className="p-8 shadow-card border">
              <div className="flex items-center gap-3 mb-6">
                <Sticker className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Add Design</h3>
              </div>
              <div className="grid grid-cols-4 gap-4 mb-6">
                {stickers.map((sticker) => (
                  <Button
                    key={sticker.id}
                    variant={
                      config.sticker === sticker.id ? "active" : "selection"
                    }
                    className="h-20 flex-col gap-2"
                    onClick={() =>
                      setConfig((prev) => ({
                        ...prev,
                        sticker:
                          prev.sticker === sticker.id ? null : sticker.id,
                      }))
                    }
                  >
                    <span className="text-2xl">{sticker.emoji}</span>
                    <span className="text-xs">{sticker.name}</span>
                  </Button>
                ))}
              </div>
              {config.sticker && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setConfig((prev) => ({ ...prev, sticker: null }))
                  }
                >
                  Remove Design
                </Button>
              )}
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={resetCustomization}
                className="flex-1 h-12"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset Design
              </Button>
              <Button variant="professional" className="flex-1 h-12">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart - $24.99
              </Button>
            </div>
          </div>

          {/* T-Shirt Preview Container */}
          <div className="relative w-80 h-96 mx-auto bg-gray-100 rounded-lg shadow-lg p-4 flex items-center justify-center">
            {/* T-Shirt Base */}
            <div
              className="w-full h-full rounded-2xl flex items-center justify-center relative overflow-hidden transition-professional border-2 border-gray-200"
              style={{ backgroundColor: "transparent" }} // Set to transparent
            >
              {/* T-Shirt Shape Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 300 400" className="w-full h-full">
                  {/* T-Shirt outline based on style */}
                  {config.style === "round-neck" && (
                    <path
                      d="M 100 80 Q 100 50 150 50 Q 200 50 200 80 L 200 120 L 250 120 L 250 380 L 50 380 L 50 120 L 100 120 Z"
                      fill={config.color} // Fill with selected color
                      stroke="rgba(0,0,0,0.1)"
                      strokeWidth="1"
                    />
                  )}
                  {config.style === "v-neck" && (
                    <path
                      d="M 100 80 L 140 100 L 150 120 L 160 100 L 200 80 L 200 120 L 250 120 L 250 380 L 50 380 L 50 120 L 100 120 Z"
                      fill={config.color} // Fill with selected color
                      stroke="rgba(0,0,0,0.1)"
                      strokeWidth="1"
                    />
                  )}
                  {config.style === "half-sleeve" && (
                    <path
                      d="M 80 100 Q 80 70 150 70 Q 220 70 220 100 L 220 140 L 250 140 L 250 380 L 50 380 L 50 140 L 80 140 Z"
                      fill={config.color} // Fill with selected color
                      stroke="rgba(0,0,0,0.1)"
                      strokeWidth="1"
                    />
                  )}
                  {config.style === "full-sleeve" && (
                    <path
                      d="M 40 120 Q 40 90 150 90 Q 260 90 260 120 L 260 160 L 250 160 L 250 380 L 50 380 L 50 160 L 40 160 Z"
                      fill={config.color} // Fill with selected color
                      stroke="rgba(0,0,0,0.1)"
                      strokeWidth="1"
                    />
                  )}
                </svg>
              </div>

              {/* Sticker */}
              {config.sticker && (
                <div
                  className="absolute text-4xl transition-professional hover:scale-110 cursor-move"
                  style={{
                    left: `${config.stickerPosition.x}%`,
                    top: `${config.stickerPosition.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {stickers.find((s) => s.id === config.sticker)?.emoji}
                </div>
              )}

              {/* Style indicator */}
              <div className="absolute bottom-4 left-4">
                <Badge variant="outline" className="text-xs bg-white/90">
                  {config.style.replace("-", " ").toUpperCase()}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TshirtCustomizer;
