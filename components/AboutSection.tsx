import React from 'react';
import { Mic } from 'lucide-react';

const MeetLisa: React.FC = () => {
  return (
    <section id="meet-lisa" className="w-full max-w-5xl mx-auto px-6 py-20 relative z-10 flex flex-col items-center">
        
        <div className="text-center mb-16 space-y-3 animate-fade-in-up opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
            <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tight text-white">Meet Lisa</h2>
            <p className="text-xl md:text-2xl text-white/50 font-light tracking-tight">Your Intelligent AI Digital Employee</p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mb-16 animate-fade-in-up opacity-0" style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}>
            
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300">
                 <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Books Appointments</h3>
                 <p className="text-sm text-white/60 font-light">Schedules directly into your calendar</p>
            </div>
            
            <div className="group p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300">
                 <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Lead Generation</h3>
                 <p className="text-sm text-white/60 font-light">Qualifies and nurtures <span className="text-brand">prospects</span></p>
            </div>

            <div className="group p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300">
                 <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">SMS & Email</h3>
                 <p className="text-sm text-white/60 font-light">Automated confirmations and <span className="text-brand">follow-ups</span></p>
            </div>

            <div className="group p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300">
                 <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Multilingual</h3>
                 <p className="text-sm text-white/60 font-light">Speaks 40+ languages fluently</p>
            </div>

            <div className="group p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300">
                 <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Calendar Integration</h3>
                 <p className="text-sm text-white/60 font-light"><span className="text-brand">Real-time</span> availability checking</p>
            </div>

            <div className="group p-8 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300">
                 <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Programmable</h3>
                 <p className="text-sm text-white/60 font-light">Customized to your business</p>
            </div>
        </div>

        {/* Voice Interaction */}
        <div className="flex flex-col items-center gap-6 animate-fade-in-up opacity-0" style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}>
            <div className="relative group cursor-pointer">
                {/* Glow */}
                <div className="absolute inset-0 bg-brand/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 w-28 h-28 rounded-full border border-white/10 bg-gradient-to-b from-white/5 to-black flex flex-col items-center justify-center gap-2 transition-transform duration-300 group-hover:scale-105 group-hover:border-white/20">
                    <Mic className="w-8 h-8 text-white stroke-[1.5]" />
                </div>
                <div className="absolute -bottom-8 w-full text-center text-[10px] text-white/40 uppercase tracking-widest font-medium">Talk to Lisa</div>
            </div>

            <button className="mt-8 px-10 py-3 rounded-full border border-brand text-brand hover:bg-brand hover:text-white transition-all duration-300 text-sm font-medium tracking-wide">
                Ready to talk
            </button>
        </div>
    </section>
  );
};

export default MeetLisa;