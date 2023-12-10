import React from "react";
import "../index.css";
import Typed from "react-typed";
import backgroundImage from "../assets/Rocky-Mountains.jpg";
import Countdown from "react-countdown";

const CountdownComponent = () => {
  const targetDate = new Date("2024-04-01T23:59:59"); // Replace with your target date

  return (
    <div className="text-center">
      <h2 className="text-3xl hero-font font-bold text-white mb-4 italic">Only!</h2>
      <Countdown
        date={targetDate}
        renderer={({ days, hours, minutes, seconds, completed }) => (
          <div
            style={{
              width: "400px",
              padding: "10px",
            }}
            className="countdown-container mx-auto"
          >
            {completed ? (
              <span
                style={{
                  fontSize: "2rem",
                  color: "#00df9a",
                  fontWeight: "bold",
                }}
              >
                Event is live now!
              </span>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <div className="text-2xl text-white bg-yellow-500 bg-opacity-75 border-2 border-white px-3 py-1 rounded w-20 text-center">
                  {days} days
                </div>
                <div className="text-2xl text-white bg-yellow-500 bg-opacity-75 border-2 border-white px-3 py-1 rounded w-20 text-center">
                  {hours} hours
                </div>
                <div className="text-2xl text-white bg-yellow-500 bg-opacity-75 border-2 border-white px-3 py-1 rounded w-20 text-center">
                  {minutes} mins
                </div>
                <div className="text-2xl text-white bg-yellow-500 bg-opacity-75 border-2 border-white px-3 py-1 rounded w-20 text-center">
                  {seconds} secs
                </div>
              </div>
            )}
          </div>
        )}
      />
    </div>
  );
};

const Hero = () => {
  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="text-white" style={backgroundStyles}>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 hero-font text-yellow-500">
          BOULDER BIKE RACE
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-3xl text-xl italic hero-font font-bold py-4">
            Are you ready for the big
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl italic font-bold md:pl-4 pl-2 hero-font"
            strings={["RACE"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl hero-font font-bold text-[#a04008]">
          Come and join us for an exciting race through the scenic streets of
          Boulder
        </p>
        <button className="transition duration-300 border-2 border-white hover:bg-yellow-500 w-[200px] rounded-full font-bold my-6 mx-auto py-3 text-white">
          Get Started
        </button>
        <CountdownComponent />
      </div>
    </div>
  );
};

export default Hero;
