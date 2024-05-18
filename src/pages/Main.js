import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Projects from "../components/Projects";
import About from "../components/About";
import Collaborate from "../components/Collaborate";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

const Main = () => (
  <>
    <Navbar />
    <ReactFullpage
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000}
      render={({ state, fullpageApi }) => {
        return (
          <div className="text-white w-screen h-screen">
            <ReactFullpage.Wrapper>
              <div className="section horizontal-slide">
                <Home />
                <Projects />
              </div>

              <div className="section horizontal-slide">
                <About />
                <Collaborate />
              </div>
            </ReactFullpage.Wrapper>
          </div>
        );
      }}
    />
  </>
);

export default Main;
