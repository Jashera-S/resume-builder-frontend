import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = () => {
  return (
    <div id='cta' className='border-y border-dashed border-slate-200 w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 mt-8 md:mt-12 lg:mt-16'>
            <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-6 sm:gap-8 px-3 sm:px-6 md:px-10 border-x border-dashed border-slate-200 py-12 sm:py-16 md:py-20 -mt-8 sm:-mt-10 -mb-8 sm:-mb-10 w-full">
                <p className="text-lg sm:text-xl font-medium max-w-md text-slate-800">Build a Professional Resume That Helps You Stand Out and Get Hired</p>
                <Link to='/app?state=login' className="flex items-center justify-center gap-2 rounded-full py-2.5 sm:py-3 px-6 sm:px-8 bg-[#660099] hover:bg-[#550088] transition text-white text-sm sm:text-base whitespace-nowrap">
                    <span>Get Started</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-4 sm:size-4.5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
            </div>
        </div>
  )
}

export default CallToAction
