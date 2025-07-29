import React from "react";

function Links({ github, linkedin }) {
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Links</h3>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-600 hover:underline mb-1"
        >
          {github}
        </a>
      )}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-blue-600 hover:underline"
        >
          {linkedin}
        </a>
      )}
    </div>
  );
}

export default Links;