import React from "react";
import "../css/about.css";

const About = () => {
  return (
    <>
      <div
        className="slide about bg-cover bg-center"
        id="about"
        style={{ backgroundImage: "url('/drum.jpg')" }}
      >
        <h1 className="text-6xl md:text-9xl ml-20 text-left">About Me</h1>
        <div className="w-3/4 h-full text-left flex justify-center mt-10">
          <div className="w-3/4 flex">
            <div className="w-full h-full flex flex-col items-start">
              <p className="text-xl md:text-2xl pl-2">
                "Passionate and highly creative individual with a deep love for
                technology and music. Constantly driven by a curiosity to
                explore and master new aspects of both technology and creative
                expression. With a relentless pursuit of innovation, I thrive on
                blending the realms of art and technology to create captivating
                digital experiences. Ready to embrace new challenges"
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
