import React from 'react';
import { Waves } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
        <div className="relative w-8 h-8 flex items-center justify-center bg-white/5 rounded-full border border-white/10">
            <Waves className="w-4 h-4 text-brand" />
        </div>
        <span className="font-display font-bold text-sm tracking-tight text-white uppercase">
            Roys Company
        </span>
    </div>
  );
};

export default Logo;