import React from 'react';
import Navbar from './components/navbar';
import Landing from './components/landing';
import WatchPartyScreen from './components/watchpartyscreen';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-[#242629] flex flex-col">

        <Navbar />

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/watch-party" element={<WatchPartyScreen />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default App;