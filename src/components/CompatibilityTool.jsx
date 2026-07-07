import React, { useState } from 'react';
import { Heart, ChevronLeft, Sparkles, Flame, Droplets, Wind, Globe } from 'lucide-react';
import { getWesternSign, getEasternSign } from '../utils/astrologyEngine';
import { WESTERN_DATA, EASTERN_DATA, PRIMAL_ARCHETYPES } from '../data/zodiacData';

export default function CompatibilityTool({ userWestern, userEastern, onBack }) {
  const [partnerName, setPartnerName] = useState('');
  const [partnerDate, setPartnerDate] = useState('');
  const [compResult, setCompResult] = useState(null);

  const calculateCompatibility = (e) => {
    e.preventDefault();
    if (!partnerDate) return;

    // Calculate partner's astronomical signs
    const [pYear, pMonth, pDay] = partnerDate.split('-');
    const pWest = getWesternSign(pMonth, pDay);
    const pEast = getEasternSign(partnerDate);

    let score = 70; // Baseline compatibility score
    
    // Retrieve elemental traits
    const userWestEl = WESTERN_DATA[userWestern]?.element;
    const partnerWestEl = WESTERN_DATA[pWest]?.element;
    const userEastEl = EASTERN_DATA[userEastern]?.element;
    const partnerEastEl = EASTERN_DATA[pEast]?.element;

    // Apply Western elemental logic (Fire, Air, Earth, Water)
    if (userWestEl === partnerWestEl) {
      score += 10; // Shared elements are harmonious
    } else if (
      (userWestEl === "Fire" && partnerWestEl === "Air") ||
      (userWestEl === "Air" && partnerWestEl === "Fire") ||
      (userWestEl === "Earth" && partnerWestEl === "Water") ||
      (userWestEl === "Water" && partnerWestEl === "Earth")
    ) {
      score += 15; // Complementary elements generate strong passive flow
    } else {
      score -= 5; // Opposing energies cause friction
    }

    // Apply Eastern elemental logic (Generative Wood, Fire, Earth, Metal, Water)
    if (userEastEl === partnerEastEl) {
      score += 10; // Matching lunar elements ground the connection
    } else if (
      (userEastEl === "Wood" && partnerEastEl === "Fire") ||
      (userEastEl === "Fire" && partnerEastEl === "Earth") ||
      (userEastEl === "Earth" && partnerEastEl === "Metal") ||
      (userEastEl === "Metal" && partnerEastEl === "Water") ||
      (userEastEl === "Water" && partnerEastEl === "Wood")
    ) {
      score += 15; // Productive cycles nurture longevity
    }

    // Clamp score safely between 45% and 99%
    score = Math.min(Math.max(score, 45), 99);

    // Create tailored report based on score
    let compText = "";
    if (score >= 85) {
      compText = `An elite cosmic alignment. Your charts share powerful natural elements, offering you both automatic trust and clear-cut, cooperative goals. You nurture each other's hidden vulnerabilities without power struggles.`;
    } else if (score >= 70) {
      compText = `A vibrant connection with heavy chemistry. While your everyday reactions differ slightly, your differences align like matching puzzle pieces. Direct, open communication will solve any minor friction.`;
    } else {
      compText = `A deep learning connection. Though you operate on separate cosmic wavelengths, this relationship offers tremendous growth potential. It requires deliberate listening, but will expand both of your worlds.`;
    }

    setCompResult({
      score,
      partnerWest: pWest,
      partnerEast: pEast,
      archetype: PRIMAL_ARCHETYPES[pWest]?.[pEast] || "The Blend",
      description: compText
    });
  };

  const getElementIcon = (element) => {
    switch(element) {
      case 'Fire': return <Flame className="w-4 h-4 text-orange-400" />;
      case 'Water': return <Droplets className="w-4 h-4 text-blue-400" />;
      case 'Air': return <Wind className="w-4 h-4 text-cyan-400" />;
      default: return <Globe className="w-4 h-4 text-emerald-400" />;
    }
  };

  return (
    <div className="w-full max-w-2xl bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 md:p-10 shadow-2xl relative">
      
      {/* Back button */}
      <button 
        onClick={onBack} 
        className="absolute top-6 left-6 text-xs flex items-center space-x-1 text-slate-400 hover:text-white transition"
      >
        <ChevronLeft className="w-4 h-4" />
        <span>Back to Report</span>
      </button>

      <div className="text-center mb-8 mt-4">
        <div className="inline-flex items-center space-x-2 bg-pink-500/10 border border-pink-500/20 rounded-full px-3 py-1 text-xs text-pink-300 mb-3">
          <Heart className="w-3.5 h-3.5 animate-pulse" />
          <span>Interactive Chemistry</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white">Synergy Match Calculator</h2>
        <p className="text-slate-400 text-xs mt-2">
          Compare elemental structures to evaluate connection score and long-term potential.
        </p>
      </div>

      {!compResult ? (
        <form onSubmit={calculateCompatibility} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Partner's Name */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-slate-400">Partner's Name</label>
              <input 
                type="text" 
                placeholder="E.g., Orion"
                required 
                value={partnerName} 
                onChange={(e) => setPartnerName(e.target.value)}
                className="w-full bg-slate-950/60 border border-slate-800 focus:border-pink-500 rounded-2xl px-4 py-3.5 outline-none transition text-slate-100 placeholder-slate-700 focus:ring-4 focus:ring-pink-500/10"
              />
            </div>

            {/* Partner's Birth Date */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-widest text-slate-400">Partner's Birth Date</label>
              <input 
                type="date" 
                required 
                value={partnerDate} 
                onChange={(e) => setPartnerDate(e.target.value)}
                className="w-full bg-slate-950/60 border border-slate-800 focus:border-pink-500 rounded-2xl px-4 py-3.5 outline-none transition text-slate-100 focus:ring-4 focus:ring-pink-500/10"
              />
            </div>

          </div>
          
          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-500 hover:to-indigo-500 text-white font-bold py-4 rounded-2xl shadow-xl transition flex items-center justify-center space-x-2"
          >
            <Heart className="w-4 h-4" />
            <span>Evaluate Compatibility</span>
          </button>
        </form>
      ) : (
        <div className="space-y-6 text-center animate-fadeIn">
          
          {/* Circular Score Widget */}
          <div className="inline-flex flex-col items-center justify-center p-6 bg-slate-950/60 rounded-full border border-slate-800/80 relative mb-2">
            <div className="w-28 h-28 rounded-full border-4 border-pink-500/25 flex flex-col items-center justify-center relative">
              <span className="text-4xl font-black text-white">{compResult.score}%</span>
              <span className="text-[9px] uppercase tracking-widest text-pink-400 font-bold">Synergy</span>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold text-white mb-1">
              You & {partnerName}
            </h4>
            <p className="text-xs text-indigo-300 uppercase tracking-wider font-semibold">
              Their Archetype: {compResult.archetype} ({compResult.partnerWest} + {compResult.partnerEast})
            </p>
          </div>

          <p className="text-slate-300 text-xs leading-relaxed bg-slate-950/40 p-5 rounded-2xl border border-slate-800 text-left">
            {compResult.description}
          </p>

          <div className="flex gap-3 justify-center">
            <button 
              onClick={() => setCompResult(null)}
              className="px-5 py-2.5 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-900/40 text-xs font-semibold text-slate-300 hover:text-white transition"
            >
              Compare Another
            </button>
            <button 
              onClick={onBack}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white transition"
            >
              View Your Chart
            </button>
          </div>

        </div>
      )}
    </div>
  );
}