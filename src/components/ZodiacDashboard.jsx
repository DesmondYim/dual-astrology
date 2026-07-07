import React from 'react';
import { Sun, Moon, Clock, Sparkles, Heart, Briefcase, Users } from 'lucide-react';
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
    <div className="w-full space-y-6 animate-fadeIn">
      
      {/* Top Overview Bar */}
      <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div>
          <p className="text-xs uppercase tracking-widest text-indigo-400 font-bold mb-1">
            PREPARED EXCLUSIVELY FOR {name || "SEEKER"}
          </p>
          <h3 className="text-3xl font-black text-white tracking-tight flex items-center gap-2">
            {report.archetype} 
            <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
              Dual Archetype
            </span>
          </h3>
          <p className="text-slate-400 text-sm mt-2 max-w-xl leading-relaxed">
            {report.intro}
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={onNavigateCompat}
            className="w-full md:w-auto flex items-center justify-center space-x-2 px-5 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/10 hover:shadow-indigo-500/20 transition active:translate-y-0.5"
          >
            <Users className="w-4 h-4" />
            <span>Check Synergy Match</span>
          </button>
        </div>
      </div>

      {/* Grid Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Western Profile */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 relative flex flex-col justify-between overflow-hidden">
          <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-tr ${WESTERN_DATA[westernSign]?.color || 'from-indigo-500 to-purple-500'} rounded-full blur-3xl opacity-30`} />
          
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-300 flex items-center">
                <Sun className="w-4 h-4 mr-1.5 text-amber-500 animate-spin" style={{ animationDuration: '20s' }} />
                <span>Western Zodiac</span>
              </span>
              <span className="text-xs px-2.5 py-1 bg-slate-800/60 rounded-full text-slate-300 border border-slate-700/60 font-mono">
                {WESTERN_DATA[westernSign]?.quality}
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline space-x-2">
                <h4 className="text-4xl font-extrabold text-white tracking-tight">{westernSign}</h4>
                <span className="text-indigo-400 text-sm">({WESTERN_DATA[westernSign]?.symbol})</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {WESTERN_DATA[westernSign]?.desc}
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">Elemental Power</span>
              <span className="text-sm font-semibold text-indigo-200 bg-indigo-500/10 px-2.5 py-1 rounded-lg border border-indigo-500/20 inline-block">
                {WESTERN_DATA[westernSign]?.element}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">Ruling Planet</span>
              <span className="text-sm font-semibold text-purple-200 bg-purple-500/10 px-2.5 py-1 rounded-lg border border-purple-500/20 inline-block">
                {WESTERN_DATA[westernSign]?.planet}
              </span>
            </div>
          </div>
        </div>

        {/* Eastern Profile */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 relative flex flex-col justify-between overflow-hidden">
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-300 flex items-center">
                <Moon className="w-4 h-4 mr-1.5 text-indigo-400" />
                <span>Eastern Lunar Zodiac</span>
              </span>
              <span className="text-xs px-2.5 py-1 bg-slate-800/60 rounded-full text-slate-300 border border-slate-700/60 font-mono">
                {EASTERN_DATA[easternSign]?.polarity} Polar
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-baseline space-x-2">
                <span className="text-3xl">{EASTERN_DATA[easternSign]?.icon}</span>
                <h4 className="text-4xl font-extrabold text-white tracking-tight">{easternSign}</h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {EASTERN_DATA[easternSign]?.energy}
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 gap-4">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">Lunar Element</span>
              <span className="text-sm font-semibold text-emerald-200 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 inline-block">
                {EASTERN_DATA[easternSign]?.element}
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">Empowering Colors</span>
              <span className="text-xs font-semibold text-amber-200 block mt-1.5">
                {EASTERN_DATA[easternSign]?.luckyColor}
              </span>
            </div>
          </div>
        </div>

        {/* Secret Animal */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 relative flex flex-col justify-between overflow-hidden">
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-300 flex items-center">
                <Clock className="w-4 h-4 mr-1.5 text-purple-400" />
                <span>Secret Ascendant</span>
              </span>
              <span className="text-xs text-slate-500 font-mono">
                {secretAnimal ? secretAnimal.timeRange : "12:00 PM"}
              </span>
            </div>

            {secretAnimal ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{EASTERN_DATA[secretAnimal.animal]?.icon || "🔮"}</span>
                  <h4 className="text-2xl font-extrabold text-slate-100 tracking-tight">
                    The Secret {secretAnimal.animal}
                  </h4>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Determined strictly by your hour of birth, this animal represents your inner core shield, your sub-conscious reactions, and the persona you keep safe for close allies.
                </p>
                <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                  <span className="text-[10px] uppercase tracking-widest text-purple-400 font-bold block mb-0.5">Inner Dominant Shield Trait</span>
                  <span className="text-xs font-semibold text-purple-200">{secretAnimal.trait}</span>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-slate-500 text-xs italic">
                No birth hour was entered. Run a new calculation with your birth hour to unlock your secret internal ascendant animal!
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Synthesis Readings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Detailed Report Text */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 md:p-8 md:col-span-2 space-y-4">
          <h4 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-400 animate-pulse" />
            <span>The Synthesis Personality Reading</span>
          </h4>
          <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
            <p className="bg-slate-950/40 p-4 rounded-2xl border border-slate-800/60 italic text-slate-400 leading-relaxed">
              "{report.blend}"
            </p>
            <p>
              By weaving together your Western Sun governed by <span className="font-semibold text-indigo-300">{WESTERN_DATA[westernSign]?.planet}</span> and your Lunar path steered by the <span className="font-semibold text-emerald-300">{EASTERN_DATA[easternSign]?.element}</span> element, your personality balances structural mechanics with fluid execution.
            </p>
          </div>
        </div>

        {/* Life Spheres Info */}
        <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-3xl p-6 md:p-8 space-y-6">
          <div>
            <h5 className="text-sm uppercase tracking-wider text-pink-400 font-bold flex items-center gap-2 mb-3">
              <Heart className="w-4 h-4" />
              <span>Romance Synergy</span>
            </h5>
            <p className="text-slate-300 text-xs leading-relaxed">
              {report.relationships}
            </p>
          </div>

          <div className="pt-6 border-t border-slate-800/80">
            <h5 className="text-sm uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4" />
              <span>Career Manifestation</span>
            </h5>
            <p className="text-slate-300 text-xs leading-relaxed">
              {report.career}
            </p>
          </div>
        </div>

      </div>

      {/* Restart Button Center */}
      <div className="flex justify-center pt-4">
        <button 
          onClick={onReset}
          className="px-6 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition flex items-center space-x-1.5"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Generate New Cosmic Profile</span>
        </button>
      </div>

    </div>
  );
}