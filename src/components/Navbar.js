import React from "react";

function NavBar() {
  return (
    <nav className="bg-gray-800 p-4 text-white rounded-t-lg">
      <a href="#home" className="hover:text-gray-300">Home</a>
      <a href="#about" className="ml-4 hover:text-gray-300">About</a>
    </nav>
  );
}

export default NavBar;