import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

const Running = () => {
  const { ref } = useWebAnimations({
    keyframes: [
      { left: "-400px", bottom: "40px", transform: "rotate(0deg)" },
      { left: "100px", bottom: "40px", transform: "rotate(0deg)" },
      { left: "600px", bottom: "190px", transform: "rotate(0deg)" },
      { left: "1100px", bottom: "340px", transform: "rotate(0deg)" },
      { left: "1500px", bottom: "400px", transform: "rotate(0deg)" },
      { left: "1500px", bottom: "400px", transform: "rotateY(180deg)" },
      { left: "1100px", bottom: "340px", transform: "rotateY(180deg)" },
      { left: "600px", bottom: "190px", transform: "rotateY(180deg)" },
      { left: "100px", bottom: "40px", transform: "rotateY(180deg)" },
      { left: "-400px", bottom: "40px", transform: "rotateY(180deg)" },
    ],
    animationOptions: {
      delay: 500, // Start with a 500ms delay
      duration: 14000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "normal", // Run the animation forwards and then backwards
      easing: "ease-in", // Use a fancy timing function
    },
  });
  return (
    <div>
      <img
        ref={ref}
        className="image3"
        src="https://www.animatedimages.org/data/media/169/animated-running-image-0008.gif"
        alt="running"
      />
    </div>
  );
};

export default Running;
