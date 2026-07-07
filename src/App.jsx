import React, { useState } from 'react';
import { 
  getWesternSign, 
  getEasternSign, 
  getChineseSecretAnimal, 
  generateDetailedReport 
} from './utils/astrologyEngine';
import AstroInputForm from './components/AstroInputForm';
import ZodiacDashboard from './components/ZodiacDashboard';
import CompatibilityTool from './components/CompatibilityTool';
import { RefreshCw, Compass } from 'lucide-react';

export default function App() {
  const [step, setStep] = useState('input'); // state routes: 'input', 'dashboard', 'compatibility'
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [birthTime, setBirthTime] = useState('12:00');
  
  // Calculated state holders
  const [westernSign, setWesternSign] = useState(null);
  const [easternSign, setEasternSign] = useState(null);
  const [secretAnimal, setSecretAnimal] = useState(null);
  const [report, setReport] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    if (!birthdate) return;

    // Split date to calculate both western sun and lunar signs
    const [year, month, day] = birthdate.split('-');
    const west = getWesternSign(month, day);
    const east = getEasternSign(birthdate);
    const secret = getChineseSecretAnimal(birthTime);
    const finalReport = generateDetailedReport(west, east);

    setWesternSign(west);
    setEasternSign(east);
    setSecretAnimal(secret);
    setReport(finalReport);
    setStep('dashboard');
  };

  const handleReset = () => {
    setName('');
    setBirthdate('');
    setBirthTime('12:00');
    setWesternSign(null);
    setEasternSign(null);
    setSecretAnimal(null);
    setReport(null);
    setStep('input');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans relative overflow-hidden selection:bg-purple-500/30 selection:text-purple-200">
      
      {/* Dynamic Cosmic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-700 rounded-full blur-[150px]" />
        <div className="absolute top-1/2 left-2/3 w-80 h-80 bg-pink-700 rounded-full blur-[130px]" />
      </div>

      {/* Header */}
      <header className="relative z-10 border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={handleReset}>
            <div className="p-2 bg-gradient-to-tr from-purple-600 to-indigo-500 rounded-xl shadow-lg shadow-purple-500/20">
              <Compass className="w-6 h-6 text-white animate-spin" style={{ animationDuration: '40s' }} />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wider bg-gradient-to-r from-purple-300 via-indigo-200 to-white bg-clip-text text-transparent">
                ASTRAL DUALITY
              </h1>
              <p className="text-[10px] uppercase tracking-widest text-indigo-400 font-semibold">Primal Zodiac Engine</p>
            </div>
          </div>
          {step !== 'input' && (
            <button 
              onClick={handleReset}
              className="text-xs flex items-center space-x-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900/50 hover:bg-slate-800 transition text-slate-300 hover:text-white"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Journey</span>
            </button>
          )}
        </div>
      </header>

      {/* Active Component Wrapper */}
      <main className="relative z-10 flex-grow max-w-6xl w-full mx-auto p-4 md:p-8 flex flex-col justify-center items-center">
        {step === 'input' && (
          <AstroInputForm 
            name={name} setName={setName} 
            birthdate={birthdate} setBirthdate={setBirthdate} 
            birthTime={birthTime} setBirthTime={setBirthTime} 
            onSubmit={handleCalculate} 
          />
        )}
        
        {step === 'dashboard' && report && (
          <ZodiacDashboard 
            name={name} 
            westernSign={westernSign} 
            easternSign={easternSign} 
            secretAnimal={secretAnimal} 
            report={report} 
            onReset={handleReset} 
            onNavigateCompat={() => setStep('compatibility')}
          />
        )}

        {step === 'compatibility' && (
          <CompatibilityTool 
            userWestern={westernSign} 
            userEastern={easternSign} 
            onBack={() => setStep('dashboard')} 
          />
        )}
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-900/80 bg-slate-950/80 py-6 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© 2026 Astral Duality. Built with high precision lunar formulas.</p>
          <div className="flex space-x-4">
            <span className="text-slate-500">Primal Astrology Guide</span>
          </div>
        </div>
      </footer>

    </div>
  );
}