import React from "react";

function Home({ name, age, occupation }) {
  return (
    <div id="home" className="p-6 bg-white shadow-md rounded-lg mt-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Home</h1>
      {name && <p className="text-lg text-gray-700">Hello, my name is <span className="font-semibold">{name}</span>!</p>}
      {age && <p className="text-lg text-gray-700">I am <span className="font-semibold">{age}</span> years old.</p>}
      {occupation && <p className="text-lg text-gray-700">I work as a <span className="font-semibold">{occupation}</span>.</p>}
    </div>
  );
}

export default Home;
