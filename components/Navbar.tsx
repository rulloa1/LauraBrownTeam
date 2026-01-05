import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
        <div className="glass-panel px-6 py-3 rounded-full flex justify-between items-center gap-8 md:gap-12 shadow-[0_0_20px_rgba(0,0,0,0.5)] bg-[rgba(10,10,10,0.8)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)]">
            <Logo />
            
            <div className="hidden md:flex items-center gap-6">
                <a href="#how-it-works" className="text-[11px] font-medium text-white/60 hover:text-white transition-colors">How It Works</a>
                <a href="#meet-lisa" className="text-[11px] font-medium text-white/60 hover:text-white transition-colors">Meet Lisa</a>
                <a href="#pricing" className="text-[11px] font-medium text-white/60 hover:text-white transition-colors">Pricing</a>
                <a href="#faq" className="text-[11px] font-medium text-white/60 hover:text-white transition-colors">FAQ</a>
            </div>

            <a href="#contact" className="hidden md:block text-[10px] font-bold bg-gradient-to-r from-brand to-brandDark text-white px-5 py-2 rounded-full hover:brightness-110 transition-all shadow-[0_0_15px_rgba(249,85,0,0.3)]">
                BOOK A DISCOVERY CALL
            </a>

            <button 
                className="md:hidden text-white/70 hover:text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
            <div className="md:hidden absolute top-20 left-4 right-4 bg-void border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl z-50">
                <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-white/80 hover:text-white">How It Works</a>
                <a href="#meet-lisa" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-white/80 hover:text-white">Meet Lisa</a>
                <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-sm font-medium text-white/80 hover:text-white">Pricing</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-center text-xs font-bold bg-brand text-white px-5 py-3 rounded-full">
                    BOOK A CALL
                </a>
            </div>
        )}
    </nav>
  );
};

export default Navbar;