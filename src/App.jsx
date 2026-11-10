
import React from 'react'
import Navbar from './components/navbar'
import Landing from './components/landing'

const App = () => {
  return (
    <div className="min-h-screen w-full bg-[#242629] flex flex-col">
      <Navbar />
      <Landing />
    </div>
  )
}

export default App
