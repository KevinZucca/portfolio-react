import React from "react";
import "../css/collaborate.css";

const Collaborate = () => {
  const contactLinks = [
    {
      name: "linkedin-profile",
      src: "https://www.linkedin.com/in/kevin-zucca-a8837b27a/",
      img: "https://th.bing.com/th/id/R.d374b1a974d1afcf8633c39108cbb827?rik=Gvy92ry6CUcUHA&pid=ImgRaw&r=0",
    },
    {
      name: "github-profile",
      src: "https://github.com/KevinZucca",
      img: "https://www.pngall.com/wp-content/uploads/13/Github-Logo.png",
    },
  ];
  return (
    <>
      <div
        className="slide collaborate overflow-hidden grid grid-cols-1 p-10"
        id="collaborate"
      >
        <h1 className="text-6xl md:text-7xl mb-3">Let's collaborate!</h1>
        <h3 className="text-xl md:text-2xl mb-8">
          Send me a message to discuss about it!
        </h3>

        {/* contacts links */}
        <div className="flex justify-center mt-6">
          <ul className="flex gap-6">
            {contactLinks.map((link, index) => (
              <li
                key={index}
                className="w-12 h-12 p-4 sm:w-14 sm:h-14 border border-white/50 rounded-full flex justify-center items-center"
                id="contact-link"
              >
                <a href={link.src}>
                  <img
                    className="w-full h-full object-contain"
                    src={link.img}
                    alt="logo-img"
                  ></img>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-2xl text-yellow-200/60 underline">
          zuccakevin@gmail.com
        </p>
      </div>
    </>
  );
};

export default Collaborate;
