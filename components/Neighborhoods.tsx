import React from 'react';
import { Mail, Phone, ChevronDown } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="w-full bg-[#080808] border-t border-white/5 py-24 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-white mb-6">
                        Book a<br />Discovery Call
                    </h2>
                    <p className="text-white/50 text-sm leading-relaxed mb-8 max-w-sm">
                        Ready to automate your front desk? See if your business qualifies for Roys Company deployment.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-sm text-white/70">
                            <Mail className="w-4 h-4 text-brand" />
                            growth@royscompany.com
                        </div>
                        <div className="flex items-center gap-3 text-sm text-white/70">
                            <Phone className="w-4 h-4 text-brand" />
                            (555) 123-4567
                        </div>
                    </div>

                    <div className="mt-12 p-4 rounded-lg bg-white/5 border border-white/10 inline-flex items-center gap-3">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                        </span>
                        <span className="text-xs font-medium text-white/80">Onboarding 3 new partners this week</span>
                    </div>
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-white/40 uppercase tracking-wide">Name</label>
                            <input type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-white/40 uppercase tracking-wide">Company</label>
                            <input type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all" placeholder="Apex Roofing" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-medium text-white/40 uppercase tracking-wide">Industry</label>
                        <div className="relative">
                            <select className="w-full appearance-none bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all cursor-pointer">
                                <option className="bg-[#111]">Roofing</option>
                                <option className="bg-[#111]">HVAC</option>
                                <option className="bg-[#111]">Plumbing</option>
                                <option className="bg-[#111]">Other Contractor</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-3.5 w-4 h-4 text-white/30 pointer-events-none" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-medium text-white/40 uppercase tracking-wide">Monthly Call Volume</label>
                        <div className="relative">
                            <select className="w-full appearance-none bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all cursor-pointer">
                                <option className="bg-[#111]">0 - 50</option>
                                <option className="bg-[#111]">50 - 200</option>
                                <option className="bg-[#111]">200+</option>
                            </select>
                            <ChevronDown className="absolute right-4 top-3.5 w-4 h-4 text-white/30 pointer-events-none" />
                        </div>
                    </div>

                    <button type="submit" className="w-full py-3.5 bg-brand hover:bg-brandDark text-white font-semibold text-xs uppercase tracking-widest rounded-lg transition-colors duration-300 shadow-[0_0_20px_rgba(249,85,0,0.3)]">
                        Schedule Demo
                    </button>
                </form>
            </div>
        </div>
    </section>
  );
};

export default ContactSection;