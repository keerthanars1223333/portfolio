import React from 'react';

function Home() {
  return (
    <div className="text-center">
      <img 
        src="https://i.pravatar.cc/150" 
        alt="Profile"
        className="w-28 h-28 mx-auto rounded-full border-2 border-cyan-400 shadow-lg hover:scale-105 transition duration-300" 
      />
      <h1 class="text-3xl font-bold mt-4 text-white">Keerthana</h1>
      <p class="text-cyan-300 font-medium">Frontend Developer (React)</p>
    </div>
  );
}

export default Home;
