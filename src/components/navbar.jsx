
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const homePage = () => {
        navigate('/');
    };

    const watchPartyPage = () => {
        navigate('/watch-party');
    }
  return (
    <nav className="w-full h-[76px] shrink-0 bg-[#292D35]
      border-b border-white/10 text-[#F1F4FA]
      flex items-center justify-between px-6 md:px-12
      relative z-50">

      <div className="flex items-center gap-3 cursor-pointer">

        <div className="w-10 h-10 rounded-xl
          bg-gradient-to-br from-[#397BFF] to-[#6255E7]
          flex items-center justify-center
          shadow-[0_0_18px_#397BFF45]">

          <span className="text-white font-bold text-lg">G</span>
        </div>

        <div>
          <h1 className="text-xl font-bold tracking-tight text-[#F1F4FA]">
            Gather<span className="text-[#397BFF]">.</span>
          </h1>

          <p className="text-[9px] tracking-[2px]
            text-[#AAB3C2] uppercase -mt-0.5">
            Together, anywhere
          </p>
        </div>

      </div>

      <div className="hidden md:flex items-center gap-2">

     
        <button 
        onClick = {homePage}
        className="relative px-5 py-2.5
          text-sm font-semibold text-white
          rounded-xl bg-[#397BFF]/15
          border border-[#397BFF]/30
          hover:bg-[#397BFF]/20
          transition-all duration-200">

          <span className="flex items-center gap-2">

            <span className="w-1.5 h-1.5 rounded-full
              bg-[#5590FF] shadow-[0_0_8px_#397BFF]"/>

            Homepage

          </span>
        </button>

    
        <button 
        onClick = {watchPartyPage}
        className="px-5 py-2.5 rounded-xl
          text-sm font-medium text-[#AAB3C2]
          hover:text-white hover:bg-white/[0.06]
          transition-all duration-200">

          WatchParty Room

        </button>

      </div>

      <div className="flex items-center gap-4">

       
        <div className="hidden sm:flex items-center gap-2
          text-xs text-[#AAB3C2]">

          <span className="w-2 h-2 rounded-full
            bg-emerald-400 shadow-[0_0_9px_#34d399]" />

          Ready to connect

        </div>

      
        <button className="w-10 h-10 rounded-full
          bg-gradient-to-br from-[#397BFF] to-[#6255E7]
          p-[1.5px] hover:scale-105
          hover:shadow-[0_0_15px_#397BFF50]
          transition-all duration-200">

          <div className="w-full h-full rounded-full
            bg-[#292D35] flex items-center justify-center">

            <svg
              className="w-5 h-5 text-[#DCE5F3]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >

              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.7}
                d="M20 21a8 8 0 0 0-16 0m8-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
              />

            </svg>

          </div>
        </button>

      </div>

    </nav>
  )
}

export default Navbar
