import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Hero = () => {

    const {user} = useSelector(state => state.auth)

    const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
    <div className="pb-8 md:pb-12 lg:pb-16">
        {/* Navbar */}
        <nav className="z-50 flex items-center justify-between w-full py-3 sm:py-4 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
            <a href="https://prebuiltui.com" className="text-xl sm:text-2xl font-semibold text-slate-800">
                Aria resume
            </a>

            <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
                <a href="#" className="hover:text-[#660099] transition">Home</a>
                <a href="#features" className="hover:text-[#660099] transition">Features</a>
                <a href="#cta" className="hover:text-[#660099] transition">Contact</a>
            </div>

            <div className="flex gap-2">
                <Link to='/app?state=register' className="hidden md:block px-6 py-2 bg-[#660099] hover:bg-[#550088] active:scale-95 transition-all rounded-full text-white" hidden={user}>
                    Get started
                </Link>
                <Link to='/app?state=login' className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900" hidden={user}>
                    Login
                </Link>
                <Link to='/app' className='hidden md:block px-8 py-2 bg-[#660099] hover:bg-[#550088] active:scale-95 transition-all rounded-full text-white' hidden={!user}>
                    Dashboard
                </Link>
            </div>

            <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition" >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" className="lucide lucide-menu" >
                    <path d="M4 5h16M4 12h16M4 19h16" />
                </svg>
            </button>
        </nav>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-[100] bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`} >
            <a href="#" className="text-white">Home</a>
            <a href="#features" className="text-white">Features</a>
            <a href="#cta" className="text-white">Contact</a>
            <button onClick={() => setMenuOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-[#660099] hover:bg-[#550088] transition text-white rounded-md flex" >
                X
            </button>
        </div>

        {/* Hero Section */}
        <div className="relative flex flex-col items-center justify-center text-sm px-4 sm:px-6 md:px-16 lg:px-24 xl:px-40 text-black">
            <div className="absolute top-20 sm:top-28 md:top-32 xl:top-10 -z-10 left-1/4 size-48 sm:size-72 md:size-96 xl:size-120 2xl:size-132 bg-[#660099] blur-[100px] opacity-20"></div>

            {/* Headline + CTA */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold max-w-5xl text-center mt-8 md:mt-12 lg:mt-16 px-4 md:leading-[70px] leading-tight">
                Land your dream job with <span className="bg-gradient-to-r from-[#660099] to-[#7700AA] bg-clip-text text-transparent whitespace-nowrap">AI-powered</span> resumes.
            </h1>

            <p className="max-w-md text-center text-sm sm:text-base my-5 sm:my-7 px-4">Create, edit and download professional resumes with AI-powered assistance.</p>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-4 px-4">
                <Link to='/app?state=login' className="bg-[#660099] hover:bg-[#7700AA] text-white rounded-full px-6 sm:px-9 h-10 sm:h-12 m-1 ring-offset-2 ring-1 ring-[#660099]/30 flex items-center justify-center transition-colors text-sm sm:text-base">
                    Get started
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-1 size-4" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
            </div>

        </div>
    </div>
    <style>
        {`
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

            * {
                font-family: 'Poppins', sans-serif;
            }
        `}
    </style>
    </>
  )
}

export default Hero
