
import React from 'react'
import bg from "../assets/bg/bg.jpg";

const Landing = () => {
  return (
    <div className="min-h-[calc(100vh-76px)] w-full bg-[#292D35] relative">

      <div className="absolute top-0 left-0 w-full h-[65vh]">
        <img
          src={bg}
          alt="Background"
          className="w-full h-full object-cover object-top"
        />

        <div className="absolute inset-0 bg-gradient-to-b
          from-[#151B29]/10 via-[#202735]/20 to-[#292D35]" />
      </div>

      <div className="relative z-10 pt-[35vh] px-5 lg:px-10 pb-6">

        <div className="relative w-full max-w-[1400px] mx-auto
          bg-[#303640] rounded-2xl
          border border-white/10
          shadow-2xl shadow-black/30
          flex flex-col lg:flex-row
          px-6 lg:px-12 py-6 lg:py-7 gap-5 lg:gap-7">
          <div className="lg:w-[42%] flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#397BFF]
                  shadow-[0_0_12px_#397BFF]" />

                <h1 className="text-[#F1F4FA] text-2xl font-bold">
                  Gather<span className="text-[#397BFF]">.</span>
                </h1>
              </div>

              <p className="text-[#AAB3C2] text-xs">
                Your people. Your space. Your moments.
              </p>
            </div>

            <div className="flex items-stretch border border-white/10
              rounded-xl overflow-hidden bg-[#252B35]
              focus-within:border-[#397BFF]/70
              transition-colors">

              <div className="flex items-center px-4">
                <svg className="w-4 h-4 text-[#AAB3C2]"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                </svg>
              </div>

              <input
                type="text"
                placeholder="Search room ID..."
                className="flex-1 min-w-0 bg-transparent py-3.5 text-sm
                  text-white placeholder:text-[#AAB3C2]/60 outline-none"
              />

              <button className="px-5 py-3.5 bg-[#397BFF]
                text-white text-sm font-semibold
                hover:bg-[#5590FF] transition-colors">
                Join →
              </button>
            </div>

            <div>
              <p className="text-[#F1F4FA] text-xs font-semibold mb-2">
                Popular rooms:
              </p>

              <p className="text-[#AAB3C2] text-xs leading-6">
                Movie Night with Sarah, Lo-fi Study Session,
                Friday Anime Marathon, Game Stream — Round 4,
                Chill Vibes Only
              </p>
            </div>

            <button className="w-fit bg-[#397BFF] hover:bg-[#5590FF]
              text-white text-sm font-semibold px-7 py-3 rounded-xl
              shadow-[0_0_22px_#397BFF35] transition-all
              hover:shadow-[0_0_28px_#397BFF55]
              active:scale-[0.98]">
              + Create Room →
            </button>

          </div>

          <div className="hidden lg:block w-px bg-white/10 self-stretch" />

          <div className="lg:flex-1 flex flex-col gap-5 lg:gap-6">

            <div>
              <h2 className="text-[#F1F4FA] text-xl font-bold mb-2">
                Gather — Watch Together, in Real Time
              </h2>

              <p className="text-[#B8C1CE] text-sm leading-6">
                <span className="text-white font-semibold">Gather</span>
                {' '}is a free watch-party platform where friends can stream
                videos in perfect sync, no matter where they are. With
                frame-synced playback and live chat, being together takes
                just a moment.
              </p>
            </div>

        
            <div>
              <h3 className="text-[#F1F4FA] text-base font-semibold mb-2">
                Is Gather free to use?
              </h3>

              <p className="text-[#B8C1CE] text-sm leading-6">
                Absolutely. Gather is built for everyone. Create a room
                in seconds, invite your people via link, and watch
                together — no account required to join.
              </p>
            </div>

        
            <div>
              <h3 className="text-[#F1F4FA] text-base font-semibold mb-3">
                Why choose Gather for watching together?
              </h3>

              <div className="space-y-2.5">

                {[
                  {
                    label: "Frame-synced playback",
                    desc: "WebSocket-powered sync keeps everyone on the exact same frame, zero drift.",
                  },
                  {
                    label: "Live chat & reactions",
                    desc: "React and comment in real time without ever leaving the room.",
                  },
                  {
                    label: "Any video source",
                    desc: "Paste any URL — stream from wherever your content lives.",
                  },
                ].map((item) => (
                  <p
                    key={item.label}
                    className="text-[#B8C1CE] text-sm leading-5"
                  >
                    <span className="text-[#5590FF] mr-1">✦</span>
                    <span className="text-[#F1F4FA] font-semibold">
                      {item.label}
                    </span>
                    : {item.desc}
                  </p>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
