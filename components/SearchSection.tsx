import React from 'react';
import { Check, X, Zap, ChevronRight } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="w-full max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tight text-white">Pricing Plans</h2>
            <p className="text-white/50 text-sm md:text-base font-light">Choose the plan that fits your business. No hidden fees. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            
            {/* Starter Plan */}
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] flex flex-col h-full hover:border-white/20 transition-all duration-300">
                <h3 className="text-lg font-medium text-white mb-2">Starter</h3>
                <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-display font-semibold text-white">$297</span>
                    <span className="text-sm text-white/50">/mo</span>
                </div>
                <p className="text-brand text-xs font-medium mb-2">$1,500 setup fee</p>
                <p className="text-white/40 text-xs mb-8">Basic setup to get started</p>

                <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                        <span className="text-xs text-white/80">Lisa answers calls 24/7 (worth $597 alone)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                        <span className="text-xs text-white/80">200 minutes included ($1.50/min after)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                        <span className="text-xs text-white/80">Calendar booking</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                        <span className="text-xs text-white/80">Email call summaries</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                        <span className="text-xs text-white/80">Basic setup</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-red-400">Jack costs $199/mo extra</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-red-400">NO text-back (email only)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <X className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-red-400">NO knowledge base training</span>
                    </li>
                </ul>

                <button className="w-full py-3 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors text-sm font-medium">
                    Get Started
                </button>
            </div>

            {/* Professional Plan */}
            <div className="relative p-8 rounded-2xl border border-brand bg-[#0A0A0A] flex flex-col h-full shadow-[0_0_50px_rgba(249,85,0,0.1)] transform md:-translate-y-4">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-brand/20">
                    <Zap className="w-3 h-3 fill-white text-white" />
                    Most Popular
                </div>

                <h3 className="text-lg font-medium text-white mb-2">Professional</h3>
                <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-display font-semibold text-white">$497</span>
                    <span className="text-sm text-white/50">/mo</span>
                </div>
                <p className="text-brand text-xs font-medium mb-2">$1,500 setup fee</p>
                <p className="text-white/40 text-xs mb-6">The no-brainer choice</p>

                <div className="mb-8 bg-[#1a0f0a] border border-brand/20 rounded-lg p-3 text-center">
                    <p className="text-brand text-xs font-medium">Only $200 more, get $500+ in extra value</p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                        <span className="text-xs text-white/90">Everything in Starter</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                        <span className="text-xs text-white/90">500 minutes (2.5x more!)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                        <span className="text-xs text-white/90">Jack FREE ($199 value)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                        <span className="text-xs text-white/90">Text-back (instant SMS)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                        <span className="text-xs text-white/90">SMS appointment reminders</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                        <span className="text-xs text-white/90">Knowledge base training</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                        <span className="text-xs text-white/90">Fully managed setup</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                        <span className="text-xs text-white/90">Priority support</span>
                    </li>
                </ul>

                <button className="w-full py-3 rounded-lg bg-brand hover:bg-brandDark text-white transition-all shadow-[0_0_20px_rgba(249,85,0,0.3)] text-sm font-semibold flex items-center justify-center gap-2">
                    Get Started
                    <ChevronRight className="w-4 h-4" />
                </button>
            </div>

            {/* Premium Plan */}
            <div className="p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] flex flex-col h-full hover:border-white/20 transition-all duration-300">
                <h3 className="text-lg font-medium text-white mb-2">Premium</h3>
                <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-display font-semibold text-white">$1997</span>
                    <span className="text-sm text-white/50">/mo</span>
                </div>
                <p className="text-brand text-xs font-medium mb-2">$1,500 setup fee</p>
                <p className="text-white/40 text-xs mb-8">For serious operations</p>

                <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                        <span className="text-xs text-white/80">Everything in Professional</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                        <span className="text-xs text-white/80">UNLIMITED MINUTES</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                        <span className="text-xs text-white/80">Multiple locations</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                        <span className="text-xs text-white/80">Dedicated account manager</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                        <span className="text-xs text-white/80">Custom CRM integrations</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-white mt-0.5 shrink-0" />
                        <span className="text-xs text-white/80">VIP support</span>
                    </li>
                </ul>

                <button className="w-full py-3 rounded-lg border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors text-sm font-medium">
                    Get Started
                </button>
            </div>

        </div>
    </section>
  );
};

export default PricingSection;