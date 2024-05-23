import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";

const VantaBackground = () => {
  const myRef = useRef(null);

  useEffect(() => {
    const effect = NET({
      el: myRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x3f6cff,
    });
    return () => {
      if (effect) {
        effect.destroy();
      }
    };
  }, []);

  return (
    <div
      id="my-background"
      ref={myRef}
      style={{ position: "fixed", width: "100%", height: "100vh", zIndex: -1 }}
    />
  );
};

export default VantaBackground;
