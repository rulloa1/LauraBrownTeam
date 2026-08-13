import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-black py-8 px-6 relative z-10">
      <div className="max-w-6xl mx-auto flex justify-center items-center">
        <div className="text-xs text-white/30 font-medium">
          © {new Date().getFullYear()} Roys Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
