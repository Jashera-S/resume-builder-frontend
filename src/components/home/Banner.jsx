import React from 'react'

const Banner = () => {
  return ( 
    <div className="w-full py-2 sm:py-2.5 font-medium text-xs sm:text-sm text-green-800 text-center bg-gradient-to-r from-[#ABFF7E] to-[#FDFEFF] px-4">
        <p className="flex items-center justify-center gap-2 flex-wrap"><span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-white bg-green-600 text-xs sm:text-sm">New</span><span>AI Feature Added</span></p>
    </div>
  )
}

export default Banner
