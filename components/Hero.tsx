import React, { useEffect } from 'react';
import { Zap, ChevronRight, Play, Signal, Wifi, MicOff, Volume2, PhoneOff } from 'lucide-react';

const Hero: React.FC = () => {
  useEffect(() => {
    // Re-trigger animations if needed when component mounts
    const gsap = (window as any).gsap;
    if (gsap) {
        gsap.utils.toArray('.animate-fade-in-up').forEach((element: any) => {
            gsap.fromTo(element,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 1, ease: "power2.out", overwrite: 'auto' }
            );
        });
    }
  }, []);

  return (
    <section className="min-h-screen w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center px-6 pt-28 pb-12 gap-12 relative z-10">
        
        {/* Left Content */}
        <div className="flex-1 w-full space-y-8 relative z-10 text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand/30 bg-brand/5 backdrop-blur-sm animate-fade-in-up opacity-0" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
                <Zap className="w-3 h-3 text-brand fill-brand" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-brand">V2.0 Available</span>
            </div>
            
            <div className="space-y-2 animate-fade-in-up opacity-0" style={{animationDelay: '0.3s', animationFillMode: 'forwards'}}>
                <p className="text-brand font-medium text-sm tracking-wide">Driven by Science. Built for Contractors.</p>
                <h1 className="text-5xl md:text-7xl font-display font-semibold tracking-tighter leading-[0.95] text-white">
                    Never miss another<br />
                    <span className="text-brand">$1,200</span> call <span className="text-white/30">again.</span>
                </h1>
            </div>
            
            <div className="space-y-6 max-w-lg animate-fade-in-up opacity-0" style={{animationDelay: '0.5s', animationFillMode: 'forwards'}}>
                <p className="text-xl text-white font-medium">
                    Stop losing <span className="text-brand border-b border-brand/30 pb-0.5">revenue</span> to voicemail.
                </p>
                <p className="text-sm md:text-[15px] text-white/50 leading-relaxed font-light">
                    85% of callers won't leave one—they call your competitor instead. Our custom AI employees capture every lead, qualify prospects, and book jobs directly onto your calendar. Perfect for Roofers, HVAC & Plumbers.
                </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4 animate-fade-in-up opacity-0" style={{animationDelay: '0.7s', animationFillMode: 'forwards'}}>
                <button className="group relative inline-flex items-center gap-2 pl-6 pr-5 py-3.5 bg-void border border-brand text-white rounded-full text-sm font-semibold tracking-wide hover:bg-brand hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(249,85,0,0.15)] hover:shadow-[0_0_30px_rgba(249,85,0,0.4)]">
                    Learn More
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                
                <button className="inline-flex items-center gap-3 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium text-white transition-all">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                        <Play className="w-3 h-3 fill-white text-white ml-0.5" />
                    </div>
                    Watch Demo
                </button>
            </div>
        </div>

        {/* Right Content: Phone Mockup */}
        <div className="flex-1 w-full flex justify-center md:justify-end relative z-10 animate-fade-in-up opacity-0" style={{animationDelay: '0.9s', animationFillMode: 'forwards'}}>
            
            {/* Phone Frame */}
            <div className="relative w-[320px] h-[640px] bg-[#0a0a0a] rounded-[40px] border-[6px] border-[#1a1a1a] shadow-[0_0_50px_rgba(0,0,0,0.5),0_0_100px_rgba(249,85,0,0.1)] overflow-hidden">
                {/* Dynamic Island / Notch Area */}
                <div className="absolute top-0 left-0 w-full h-12 flex justify-between items-end px-6 pb-2 z-20">
                    <span className="text-white text-xs font-medium">9:41</span>
                    <div className="flex items-center gap-1.5">
                        <Signal className="w-3 h-3 text-white" />
                        <Wifi className="w-3 h-3 text-white" />
                        <div className="w-4 h-2.5 border border-white/30 rounded-[2px] relative">
                            <div className="absolute inset-0.5 bg-white rounded-[1px]"></div>
                        </div>
                    </div>
                </div>
                
                {/* Screen Content */}
                <div className="absolute inset-0 bg-gradient-to-b from-void via-[#150500] to-[#2a0a00] flex flex-col items-center pt-24 pb-12 px-6">
                    
                    {/* Avatar */}
                    <div className="relative w-24 h-24 mb-6">
                        <div className="absolute inset-0 bg-brand/20 blur-xl rounded-full animate-pulse"></div>
                        <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80" alt="AI Agent" className="w-full h-full object-cover rounded-full border-2 border-white/10 relative z-10" />
                        <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#1a1a1a] rounded-full flex items-center justify-center z-20 border border-white/10">
                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    {/* Info */}
                    <div className="text-center space-y-1 mb-2">
                        <h3 className="text-xl font-semibold text-white">Roys Agent</h3>
                        <p className="text-xs text-brand font-medium tracking-wide uppercase">Ready to demo</p>
                    </div>

                    {/* Live Label */}
                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5 mb-12">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span className="text-[10px] text-white/50">Click to experience <span className="text-white font-medium">Live Demo</span></span>
                    </div>

                    {/* Voice Visualizer */}
                    <div className="flex items-center gap-1.5 h-16 mb-auto">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>

                    {/* Controls */}
                    <div className="w-full grid grid-cols-3 gap-4 mt-auto">
                        <div className="flex flex-col items-center gap-2">
                            <button className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                                <MicOff className="w-6 h-6 text-white" />
                            </button>
                            <span className="text-[10px] text-white/50">Mute</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <button className="w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                                <Volume2 className="w-6 h-6 text-white" />
                            </button>
                            <span className="text-[10px] text-white/50">Speaker</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <button className="w-14 h-14 rounded-full bg-red-500 hover:bg-red-600 flex items-center justify-center transition-colors shadow-lg shadow-red-500/20">
                                <PhoneOff className="w-6 h-6 text-white" />
                            </button>
                            <span className="text-[10px] text-white/50">End</span>
                        </div>
                    </div>

                </div>
                
                {/* Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-30 rounded-[34px]"></div>
            </div>
        </div>
    </section>
  );
};

export default Hero;