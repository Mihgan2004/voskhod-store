import React, { useState } from 'react';

export const Hero: React.FC = () => {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden mb-24">
      
      {/* 1. Base Poster Layer (Static Background) */}
      <div className="absolute inset-0 bg-graphite z-0">
        <div className="w-full h-full bg-gradient-to-b from-gray-900 via-graphite to-graphite opacity-80" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#121212_90%)]" />
      </div>

      {/* 2. Cinemagraph Video Layer */}
      {/* The mask creates the "partial" visibility, creating the cinemagraph feel */}
      {!videoError && (
        <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen pointer-events-none">
           <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={() => setVideoError(true)}
            style={{
              maskImage: 'linear-gradient(115deg, transparent 20%, black 45%, black 55%, transparent 80%)',
              WebkitMaskImage: 'linear-gradient(115deg, transparent 20%, black 45%, black 55%, transparent 80%)'
            }}
          >
            {/* User replaces this file in /public/hero.mp4 */}
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        </div>
      )}

      {/* Fallback if video missing: Subtle animated gradient mesh */}
      {videoError && (
        <div className="absolute inset-0 bg-gradient-to-tr from-graphite via-gray-900 to-crimson/10 z-0 animate-pulse" />
      )}

      {/* 3. Content Layer */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-end h-full pb-24">
        
        {/* Text Accent */}
        <div className="col-span-12 md:col-span-8">
          <h1 className="text-5xl md:text-8xl font-light uppercase tracking-tighter leading-none text-white mix-blend-overlay opacity-90">
            Internal<br />
            Operations
          </h1>
          <p className="mt-6 text-sm md:text-base text-gray-500 max-w-md font-mono">
            // AUTHORIZED PERSONNEL ONLY <br/>
            EQUIPMENT FOR LOW-ORBIT MANEUVERS AND TERRESTRIAL TRANSIT.
          </p>
        </div>

        {/* Shift Report Card (Glass Panel) */}
        <div className="col-span-12 md:col-span-4 flex justify-start md:justify-end">
          <div className="
            backdrop-blur-sm bg-white/5 border border-white/10 
            p-6 w-full md:w-64 rounded-xl
            hover:border-gold/30 transition-colors duration-500
          ">
            <h3 className="text-xs font-bold text-gold mb-4 uppercase tracking-widest border-b border-white/10 pb-2">
              Shift Report
            </h3>
            <div className="space-y-3 font-mono text-xs text-gray-300">
              <div className="flex justify-between">
                <span>BATCH_02</span>
                <span className="text-green-500">ACCEPTED</span>
              </div>
              <div className="flex justify-between">
                <span>LIMIT</span>
                <span>120 UNITS</span>
              </div>
              <div className="flex justify-between">
                <span>DISPATCH</span>
                <span>24.11</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Very Subtle Edge Glow */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-crimson/5 to-transparent pointer-events-none" />
    </section>
  );
};
