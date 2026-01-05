import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-8 px-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-white/30 font-medium">
                © 2024 Roys Company. All rights reserved.
            </div>
            <div className="flex gap-6">
                <a href="#" className="text-white/30 hover:text-white transition-colors"><Twitter className="w-4 h-4" /></a>
                <a href="#" className="text-white/30 hover:text-white transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="#" className="text-white/30 hover:text-white transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;