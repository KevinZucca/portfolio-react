import React from "react";
import { scrollToComponent } from "../utils/scrollToComponent";

const Navbar = () => {
  return (
    <div className="w-screen text-white text-2xl p-3 fixed top-0 z-10">
      <ul className="flex justify-between">
        <li>
          <button onClick={() => scrollToComponent("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => scrollToComponent("projects")}>
            Projects
          </button>
        </li>
        <li>
          <button onClick={() => scrollToComponent("about")}>Who I am</button>
        </li>
        <li>
          <button onClick={() => scrollToComponent("collaborate")}>
            Let's collaborate!
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
