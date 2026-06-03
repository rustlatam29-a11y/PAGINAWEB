import React, { useState } from "react";
import { Download, Play, Server } from "lucide-react";

type GameType = "rust" | "dayz";

const Hero: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<GameType>("rust");

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 pb-12">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Tabs */}
        <div className="inline-flex gap-2 p-1 bg-white/5 border border-white/10 rounded-xl mb-12">
          <button 
            className={`px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all ${
              selectedGame === "rust" 
                ? "bg-white/10 text-white" 
                : "text-gray-500 hover:text-gray-300"
            }`}
            onClick={() => setSelectedGame("rust")}
          >
            RUST
          </button>
          <button 
            className={`px-6 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all ${
              selectedGame === "dayz" 
                ? "bg-white/10 text-white" 
                : "text-gray-500 hover:text-gray-300"
            }`}
            onClick={() => setSelectedGame("dayz")}
          >
            DAYZ
          </button>
        </div>

        {/* Rust Content */}
        {selectedGame === "rust" && (
          <div className="space-y-8">
            <div>
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter">
                RUST
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-red-500 leading-none tracking-tighter -mt-2">
                LATAM
              </h1>
            </div>
            
            <p className="text-gray-400 text-lg">
              Servidor echo por ParaguayRAIDER • LATAM
            </p>
            
            {/* Buttons */}
            <div className="flex items-center justify-center gap-4">
              <a href="https://api.whatsapp.com/send?phone=595981144534" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all">
                <Server className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-sm font-bold">SERVIDOR</div>
                  <div className="text-xs opacity-80">Echo por ParaguayRAIDER</div>
                </div>
              </a>
              
              <a href="https://www.youtube.com/watch?v=ZNTfR90nPtg" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/5 border border-white/10 text-white font-bold px-6 py-4 rounded-xl hover:bg-white/10 transition-all">
                <Play className="w-5 h-5" fill="currentColor" />
                <span>Ver Tráiler</span>
              </a>
            </div>
          </div>
        )}

        {/* DayZ Content */}
        {selectedGame === "dayz" && (
          <div className="space-y-8">
            <div>
              <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black text-white leading-none tracking-tighter">
                DAYZ
              </h1>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-red-500 leading-none tracking-tighter -mt-2">
                GRATIS
              </h1>
            </div>
            
            <p className="text-gray-400 text-lg">
              Servidor DayZ • LATAM • 24/7
            </p>
            
            {/* Buttons */}
            <div className="flex items-center justify-center gap-4">
              <a href="https://api.whatsapp.com/send?phone=595981144534" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-all">
                <Server className="w-5 h-5" />
                <div className="text-left">
                  <div className="text-sm font-bold">UNIRSE AL SERVIDOR</div>
                  <div className="text-xs opacity-80">Discord DayZ</div>
                </div>
              </a>
              
              <a href="https://gofile.io/d/ILwOvH" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/5 border border-white/10 text-white font-bold px-6 py-4 rounded-xl hover:bg-white/10 transition-all">
                <Download className="w-5 h-5" />
                <span>Descargar DayZ</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
