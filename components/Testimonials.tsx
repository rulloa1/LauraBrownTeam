import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-24 relative z-10">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-void">
            {/* Background Mesh Gradient */}
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-brand/10 rounded-full blur-[128px]"></div>
            
            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-8">
                    <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                            <img className="w-8 h-8 rounded-full ring-2 ring-black grayscale" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80" alt="" />
                        </div>
                        <div className="text-xs text-white/50 ml-2">Trusted by <span className="text-white font-medium">50+ Contractors</span> nationwide</div>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-display font-medium leading-snug tracking-tight">
                        “Roys Company completely changed our business. We went from missing 30% of calls to booking jobs while we sleep.”
                    </h2>
                    
                    <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                        <div>
                            <div className="text-sm font-semibold text-white">Mike Stevens</div>
                            <div className="text-xs text-white/40">Owner, Stevens Roofing & Siding</div>
                        </div>
                    </div>
                </div>
                
                <div className="w-full md:w-80 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 p-6">
                    <div className="text-[10px] font-bold uppercase tracking-widest text-white/30 mb-6">Performance</div>
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <div className="text-3xl font-mono text-brand font-medium tracking-tighter mb-1">100%</div>
                            <div className="text-xs text-white/50">Answer Rate</div>
                        </div>
                        <div className="w-full h-px bg-white/5"></div>
                        <div>
                            <div className="text-3xl font-mono text-brand font-medium tracking-tighter mb-1">&lt; 2min</div>
                            <div className="text-xs text-white/50">Avg Booking Time</div>
                        </div>
                    </div>
                    <button className="w-full mt-6 py-2.5 bg-brand/10 border border-brand/20 hover:bg-brand/20 text-brand text-xs font-semibold rounded-md transition-all">
                        View Case Study
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Testimonials;