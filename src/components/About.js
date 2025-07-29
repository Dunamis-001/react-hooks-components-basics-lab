import React from "react";
import Links from "./Links"; // Import Links component

function About({ bio, github, linkedin }) {
  return (
    <div id="about" className="p-6 bg-white shadow-md rounded-lg mt-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">About</h1>
      {/* Conditional rendering for bio */}
      {bio && bio.length > 0 && (
        <p className="text-lg text-gray-700">{bio}</p>
      )}
      {/* Render the Links component, passing down the github and linkedin props */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
