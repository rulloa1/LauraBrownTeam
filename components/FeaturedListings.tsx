import React from 'react';
import { Cpu, PhoneCall, ClipboardCheck, CalendarCheck2 } from 'lucide-react';

const ServicesSection: React.FC = () => {
  return (
    <section id="how-it-works" className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 border-b border-white/5 pb-8">
            <div>
                <h2 className="text-3xl md:text-4xl font-display font-semibold tracking-tight text-white mb-3">
                    How it Works
                </h2>
                <p className="text-white/50 text-sm max-w-md">
                    Automated intake, qualification, and scheduling specifically engineered for trade businesses.
                </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-xs text-brand font-medium border border-brand/20 bg-brand/5 px-3 py-1 rounded-full">
                <Cpu className="w-3 h-3" />
                Powered by Roys Engine
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Card 1: 24/7 Answering */}
            <div className="service-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-brand/50 transition-colors duration-500" data-color="#F95500">
                <div className="relative h-full bg-void rounded-xl p-6 overflow-hidden border border-white/5 group-hover:border-brand/20 transition-colors">
                    <div className="absolute inset-0 bg-glow-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-brand">
                                <PhoneCall className="w-5 h-5" />
                            </div>
                            <span className="font-mono text-xs text-white/30">01</span>
                        </div>
                        
                        <h3 className="text-base font-semibold text-white mb-2 tracking-tight">24/7 Answering</h3>
                        <p className="text-xs text-white/50 leading-relaxed mb-6 flex-grow">
                            Never let a call go to voicemail. Our AI answers instantly, day or night, capturing emergency jobs for Plumbers & HVAC.
                        </p>
                        
                        <div className="h-32 w-full rounded-lg overflow-hidden border border-white/10 relative grayscale group-hover:grayscale-0 transition-all duration-500">
                            <img src="https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Answering" />
                            <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent opacity-80"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 2: Smart Qualification */}
            <div className="service-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-white/40 transition-colors duration-500" data-color="#FFFFFF">
                <div className="relative h-full bg-void rounded-xl p-6 overflow-hidden border border-white/5 group-hover:border-white/20 transition-colors">
                    <div className="absolute inset-0 bg-glow-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-white">
                                <ClipboardCheck className="w-5 h-5" />
                            </div>
                            <span className="font-mono text-xs text-white/30">02</span>
                        </div>
                        
                        <h3 className="text-base font-semibold text-white mb-2 tracking-tight">Smart Qualification</h3>
                        <p className="text-xs text-white/50 leading-relaxed mb-6 flex-grow">
                            Filter out tire-kickers. The AI asks specific questions about roof age, leak locations, or system types before booking.
                        </p>
                        
                        <div className="h-32 w-full rounded-lg overflow-hidden border border-white/10 relative grayscale group-hover:grayscale-0 transition-all duration-500">
                            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Qualification" />
                            <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent opacity-80"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 3: Instant Scheduling */}
            <div className="service-card group relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent hover:from-brand/50 transition-colors duration-500" data-color="#F95500">
                <div className="relative h-full bg-void rounded-xl p-6 overflow-hidden border border-white/5 group-hover:border-brand/20 transition-colors">
                    <div className="absolute inset-0 bg-glow-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-brand">
                                <CalendarCheck2 className="w-5 h-5" />
                            </div>
                            <span className="font-mono text-xs text-white/30">03</span>
                        </div>
                        
                        <h3 className="text-base font-semibold text-white mb-2 tracking-tight">Instant Scheduling</h3>
                        <p className="text-xs text-white/50 leading-relaxed mb-6 flex-grow">
                            Integrates with ServiceTitan, Housecall Pro, and GCal to book estimates directly into your team's available slots.
                        </p>
                        
                        <div className="h-32 w-full rounded-lg overflow-hidden border border-white/10 relative grayscale group-hover:grayscale-0 transition-all duration-500">
                            <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=800&q=80" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Scheduling" />
                            <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent opacity-80"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default ServicesSection;