
import React from 'react';

const WatchPartyScreen = () => {
  return (
    <div className="min-h-screen w-full bg-[#242629] text-white">


      <div className="w-full min-h-[65px] bg-[#292D35] border-b border-white/10
        flex flex-wrap items-center justify-between px-6 md:px-10 py-3 gap-4">

        <div className="flex flex-wrap items-center gap-6">
          <h1 className="font-semibold text-lg">
            Simulation Theory - Neil deGrasse Tyson
          </h1>

          <p className="text-sm text-gray-400">
            Host: <span className="text-white">Swarup S.</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-blue-600 hover:bg-blue-700
            px-4 py-2 rounded-lg text-sm font-medium transition">
            Copy Room ID
          </button>

          <button className="bg-red-600 hover:bg-red-700
            px-4 py-2 rounded-lg text-sm font-medium transition">
            Leave Room
          </button>
        </div>

      </div>


      <div className="flex flex-col lg:flex-row gap-5 p-5 md:p-8">

        <div className="flex-1 min-w-0">

          <div className="w-full aspect-video bg-black rounded-xl
            border border-white/10 overflow-hidden
            flex items-center justify-center">

            <p className="text-gray-500 text-lg">
              Video Player
            </p>

          </div>

   
          <div className="mt-4 bg-[#292D35] rounded-xl p-4
            border border-white/10">

            <h2 className="font-semibold text-lg">
              Simulation Theory
            </h2>

            <p className="text-sm text-gray-400 mt-1">
              Watching together with your friends
            </p>

          </div>

        </div>


        <div className="w-full lg:w-[350px] xl:w-[400px]
          shrink-0 h-[550px] bg-[#292D35] rounded-xl
          border border-white/10 flex flex-col overflow-hidden">

          <div className="p-4 border-b border-white/10">
            <h2 className="font-semibold text-lg">Auditoriam desk</h2>
            <p className="text-xs text-gray-400">
              Chat with everyone watching
            </p>
          </div>


          <div className="flex-1 p-4 overflow-y-auto space-y-4">

            <div>
              <p className="text-blue-400 text-sm font-semibold">
                Swarup S.
              </p>
              <p className="text-sm text-gray-300 mt-1">
                Welcome everyone!
              </p>
            </div>

            <div>
              <p className="text-purple-400 text-sm font-semibold">
                Alex
              </p>
              <p className="text-sm text-gray-300 mt-1">
                This video is interesting!
              </p>
            </div>

          </div>

          <div className="p-3 border-t border-white/10 flex gap-2">

            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 min-w-0 bg-[#1F2228]
                border border-white/10 rounded-lg
                px-3 py-2 text-sm outline-none
                focus:border-blue-500"
            />

            <button className="bg-blue-600 hover:bg-blue-700
              px-4 rounded-lg text-sm font-medium transition">
              Send
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default WatchPartyScreen;
