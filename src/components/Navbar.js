import React from "react";
import { scrollToComponent } from "../utils/scrollToComponent";

const Navbar = () => {
  const sections = [
    { name: "home", text: "Home" },
    { name: "projects", text: "Projects" },
    { name: "about", text: "Who I am" },
    { name: "collaborate", text: "Let's collaborate!" },
  ];
  return (
    <div className="w-screen p-3 fixed top-0 z-10">
      <ul className="flex justify-between">
        {sections.map((section, index) => (
          <li key={index} className="text-white/90 md:text-2xl">
            <button onClick={() => scrollToComponent(section.name)}>
              {section.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
