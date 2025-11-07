import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white via-[#660099]/5 to-white border-t border-slate-200 mt-8 md:mt-12 lg:mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-24 xl:px-40 py-6 sm:py-8 md:py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8">
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-xl font-semibold text-slate-800">Aria resume</span>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-slate-600">
            <a href="#" className="hover:text-[#660099] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#660099] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#660099] transition-colors">Support</a>
          </div>
          
          <p className="text-xs sm:text-sm text-slate-500 text-center sm:text-right">
            © {new Date().getFullYear()} Aria resume. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
