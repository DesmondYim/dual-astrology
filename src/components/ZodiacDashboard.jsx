import React from 'react';
import { Sun, Moon, Clock, Sparkles, Heart, Briefcase, RefreshCw, Users, ShieldAlert } from 'lucide-react';
import ZodiacIcon from './ZodiacIcons';
import { WESTERN_DATA, EASTERN_DATA } from '../data/zodiacData';

export default function ZodiacDashboard({ 
  name, 
  westernSign, 
  easternSign, 
  secretAnimal, 
  report, 
  onReset, 
  onNavigateCompat 
}) {
  return (
    <div className="w-full max-w-5xl space-y-8 animate-fadeIn text-slate-100">
      
      {/* Top Minimalist Header Grid */}
      <div className="border border-slate-800/80 bg-slate-950/40 backdrop-blur-xl rounded-3xl p-6 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden">
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-[0.25em] text-indigo-400 font-bold">
            PREPARED EXCLUSIVELY FOR {name || "SEEKER"}
          </p>
          <h3 className="text-4xl font-extrabold tracking-tight font-serif text-white">
            {report.archetype}
          </h3>
          <p className="text-slate-400 text-xs max-w-xl leading-relaxed">
            {report.intro}
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={onNavigateCompat}
            className="w-full md:w-auto flex items-center justify-center space-x-2 px-5 py-3 rounded-xl border border-indigo-500/20 bg-indigo-950/20 hover:bg-indigo-900/40 text-indigo-200 text-xs font-semibold uppercase tracking-wider transition duration-300"
          >
            <Users className="w-4 h-4" />
            <span>Check Synergy Match</span>
          </button>
        </div>
      </div>

      {/* Modern Minimal Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Western Profile Card */}
        <div className="border border-slate-800/80 bg-slate-950/20 backdrop-blur-xl rounded-2xl p-6 relative flex flex-col justify-between hover:border-slate-700/80 transition duration-300">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center">
                <Sun className="w-3.5 h-3.5 mr-2 text-indigo-400" />
                <span>Western Sign</span>
              </span>
              <span className="text-[9px] px-2.5 py-1 bg-slate-900/60 rounded-full text-slate-400 border border-slate-800/60 font-mono">
                {WESTERN_DATA[westernSign]?.quality}
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-indigo-950/30 text-indigo-300 rounded-xl border border-indigo-950/50">
                <ZodiacIcon name={westernSign} className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-2xl font-bold tracking-tight text-white">{westernSign}</h4>
                <p className="text-slate-500 text-xs font-mono">The {WESTERN_DATA[westernSign]?.symbol}</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed font-light">
              {WESTERN_DATA[westernSign]?.desc}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-900/80 grid grid-cols-2 gap-4">
            <div>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 block mb-1">Element</span>
              <span className="text-xs font-semibold text-indigo-300">
                {WESTERN_DATA[westernSign]?.element}
              </span>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 block mb-1">Ruling Planet</span>
              <span className="text-xs font-semibold text-purple-300">
                {WESTERN_DATA[westernSign]?.planet}
              </span>
            </div>
          </div>
        </div>

        {/* Eastern Profile Card */}
        <div className="border border-slate-800/80 bg-slate-950/20 backdrop-blur-xl rounded-2xl p-6 relative flex flex-col justify-between hover:border-slate-700/80 transition duration-300">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center">
                <Moon className="w-3.5 h-3.5 mr-2 text-emerald-400" />
                <span>Eastern Zodiac</span>
              </span>
              <span className="text-[9px] px-2.5 py-1 bg-slate-900/60 rounded-full text-slate-400 border border-slate-800/60 font-mono">
                {EASTERN_DATA[easternSign]?.polarity} Polar
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 bg-emerald-950/30 text-emerald-300 rounded-xl border border-emerald-950/50">
                <ZodiacIcon name={easternSign} className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-2xl font-bold tracking-tight text-white">{easternSign}</h4>
                <p className="text-slate-500 text-xs font-mono">The {easternSign} Sign</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed font-light">
              {EASTERN_DATA[easternSign]?.energy}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-900/80 grid grid-cols-2 gap-4">
            <div>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 block mb-1">Lunar Element</span>
              <span className="text-xs font-semibold text-emerald-300">
                {EASTERN_DATA[easternSign]?.element}
              </span>
            </div>
            <div>
              <span className="text-[9px] uppercase tracking-wider text-slate-500 block mb-1">Empowering Colors</span>
              <span className="text-xs font-semibold text-amber-300">
                {EASTERN_DATA[easternSign]?.luckyColor}
              </span>
            </div>
          </div>
        </div>

        {/* Secret Ascendant Card */}
        <div className="border border-slate-800/80 bg-slate-950/20 backdrop-blur-xl rounded-2xl p-6 relative flex flex-col justify-between hover:border-slate-700/80 transition duration-300 md:col-span-2 lg:col-span-1">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 flex items-center">
                <Clock className="w-3.5 h-3.5 mr-2 text-purple-400" />
                <span>Secret Ascendant</span>
              </span>
              <span className="text-[9px] px-2.5 py-1 bg-slate-900/60 rounded-full text-slate-400 border border-slate-800/60 font-mono">
                {secretAnimal ? secretAnimal.timeRange : "12:00 PM"}
              </span>
            </div>

            {secretAnimal ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-950/30 text-purple-300 rounded-xl border border-purple-950/50">
                    <ZodiacIcon name={secretAnimal.animal} className="w-10 h-10" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold tracking-tight text-white">The {secretAnimal.animal}</h4>
                    <p className="text-slate-500 text-xs font-mono">Inner Shield</p>
                  </div>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed font-light">
                  Governed by your birth hour, this animal is the shield protecting your sub-conscious reactions and private values.
                </p>
              </div>
            ) : (
              <div className="text-center py-8 text-slate-500 text-xs italic">
                No birth hour entered.
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-900/80">
            <span className="text-[9px] uppercase tracking-wider text-slate-500 block mb-2">Dominant Core Trait</span>
            <span className="text-xs font-semibold text-purple-300 block">
              {secretAnimal ? secretAnimal.trait : "Enter birth time to calculate"}
            </span>
          </div>
        </div>

      </div>

      {/* Synthesis Analytical Readings */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Personality Text */}
        <div className="border border-slate-800/80 bg-slate-950/20 backdrop-blur-xl rounded-2xl p-6 md:p-8 lg:col-span-2 space-y-4">
          <h4 className="text-md font-bold text-white flex items-center gap-2 tracking-wide uppercase text-xs text-indigo-400">
            <Sparkles className="w-4 h-4" />
            <span>Character Synthesis</span>
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed italic font-serif border-l-2 border-indigo-500/50 pl-4 py-1">
            "{report.blend}"
          </p>
          <p className="text-slate-400 text-xs leading-relaxed font-light">
            Merging your Western Sun and Eastern Lunar sign results in an outstanding framework of execution. This planetary duality anchors your focus, helping you identify opportunities that align perfectly with your core qualities.
          </p>
        </div>

        {/* Life Spheres Info */}
        <div className="border border-slate-800/80 bg-slate-950/20 backdrop-blur-xl rounded-2xl p-6 md:p-8 space-y-6">
          <div className="space-y-2">
            <h5 className="text-[10px] uppercase tracking-wider text-pink-400 font-bold flex items-center gap-2">
              <Heart className="w-3.5 h-3.5" />
              <span>Synergy Focus</span>
            </h5>
            <p className="text-slate-400 text-xs leading-relaxed font-light">
              {report.relationships}
            </p>
          </div>

          <div className="pt-6 border-t border-slate-900/80 space-y-2">
            <h5 className="text-[10px] uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Vocational Path</span>
            </h5>
            <p className="text-slate-400 text-xs leading-relaxed font-light">
              {report.career}
            </p>
          </div>
        </div>

      </div>

      {/* Restart Button Center */}
      <div className="flex justify-center pt-4">
        <button 
          onClick={onReset}
          className="px-6 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-200 transition flex items-center space-x-1.5"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>New Cosmic Calculation</span>
        </button>
      </div>

    </div>
  );
}