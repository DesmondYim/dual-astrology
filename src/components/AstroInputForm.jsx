import React from 'react';
import { Sparkles, Clock } from 'lucide-react';

export default function AstroInputForm({ 
  name, 
  setName, 
  birthdate, 
  setBirthdate, 
  birthTime, 
  setBirthTime, 
  onSubmit 
}) {
  return (
    <div className="w-full max-w-2xl bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 md:p-10 shadow-2xl relative">
      <div className="absolute top-0 right-0 p-6 opacity-20 pointer-events-none">
        <Sparkles className="w-24 h-24 text-indigo-400 animate-pulse" />
      </div>

      {}
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 text-xs text-indigo-300 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Unveil Your Dual Destiny</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
          Enter Your Cosmic Coordinates
        </h2>
        <p className="text-slate-400 text-sm mt-2 max-w-md mx-auto">
          Discover how Western Constellations and Eastern Lunar Zodiacs synthesize to create your unique Primal Archetype.
        </p>
      </div>

      {}
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Name Field */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-widest text-indigo-300 flex items-center">
              <span className="mr-1">Your Name</span>
              <span className="text-purple-400 font-bold">*</span>
            </label>
            <input 
              type="text" 
              placeholder="E.g., Celestia" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-950/60 border border-slate-800 focus:border-indigo-500/80 rounded-2xl px-4 py-3.5 outline-none transition text-slate-100 placeholder-slate-600 focus:ring-4 focus:ring-indigo-500/10"
            />
          </div>

          {/* Birthdate Field */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-widest text-indigo-300 flex items-center">
              <span className="mr-1">Birth Date</span>
              <span className="text-purple-400 font-bold">*</span>
            </label>
            <input 
              type="date" 
              required
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              className="w-full bg-slate-950/60 border border-slate-800 focus:border-indigo-500/80 rounded-2xl px-4 py-3.5 outline-none transition text-slate-100 focus:ring-4 focus:ring-indigo-500/10"
            />
          </div>

          {/* Birth Hour Field (Reveals Secret Ascendant) */}
          <div className="space-y-2 md:col-span-2">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold uppercase tracking-widest text-indigo-300 flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
                <span>Birth Time (Optional)</span>
              </label>
              <span className="text-[10px] text-slate-500 italic">Reveals Chinese Inner Secret Animal</span>
            </div>
            <input 
              type="time" 
              value={birthTime}
              onChange={(e) => setBirthTime(e.target.value)}
              className="w-full bg-slate-950/60 border border-slate-800 focus:border-indigo-500/80 rounded-2xl px-4 py-3.5 outline-none transition text-slate-100 focus:ring-4 focus:ring-indigo-500/10"
            />
          </div>

        </div>

        {}
        <button 
          type="submit" 
          className="w-full mt-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-indigo-700 hover:from-purple-500 hover:via-indigo-500 hover:to-indigo-600 text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-purple-900/20 hover:shadow-purple-500/20 hover:-translate-y-0.5 transition active:translate-y-0 flex items-center justify-center space-x-2"
        >
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span>Generate Dual Zodiac Synthesis</span>
        </button>
      </form>
    </div>
  );
}