import React from "react";
import Form from "./Form";
import "../css/collaborate.css";

const Collaborate = () => {
  return (
    <>
      <div
        className="slide collaborate overflow-hidden grid grid-cols-1 p-10"
        id="collaborate"
      >
        <h1 className="text-6xl md:text-8xl mb-3">Let's collaborate!</h1>
        <h3 className="text-2xl md:text-3xl mb-8">
          Send me a message to discuss about it!
        </h3>
        <Form />
      </div>
    </>
  );
};

export default Collaborate;
