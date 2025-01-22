import React from "react";

const OverlapImageButton = ({
  backgroundImageSrc,
  buttonText,
  mainText,
  onClick,
}) => {
  return (
    <div className="relative w-full max-w-5xl mx-auto text-center mb-10">
      {/* Background Image */}
      <img
        src="public/Group 1707478078 (1).png"
        alt="Background"
        className="w-full h-auto rounded-xl"
      />

      {/* Main Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-black px-4">
        <h1 className="text-5xl md:text-5xl font-semibold leading-tight">
          FASTEN AND EASIER YOUR <br></br> TASK WITH UNIPLANE!
        </h1>

        {/* Overlapping Button */}
        <button
          className="mt-6 bg-white text-black px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 font-semibold"
          onClick={onClick}
        >
          Get Started Now
        </button>
      </div>
    </div>
  );
};

export default OverlapImageButton;
