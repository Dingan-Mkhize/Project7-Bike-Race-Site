import React from "react";
import "../index.css";
import Typed from "react-typed";
import backgroundImage from "../assets/BB-Race-Hero.png";
import Countdown from "react-countdown";

const CountdownComponent = () => {
  const targetDate = new Date("2023-12-31T23:59:59"); // Replace with your target date

  return (
    <Countdown
      date={targetDate}
      renderer={({ days, hours, minutes, seconds, completed }) => (
        <div style={{ marginTop: "20px" }} className="countdown-container">
          {completed ? (
            <span
              style={{ fontSize: "2rem", color: "#00df9a", fontWeight: "bold" }}
            >
              Event is live now!
            </span>
          ) : (
            <span style={{ fontSize: "2rem", color: "#fff" }}>
              {days}d {hours}h {minutes}m {seconds}s
            </span>
          )}
        </div>
      )}
    />
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
          <p className="md:text-3xl sm:text-3xl text-xl italic font-bold py-4">
            Are you ready for the big
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl italic font-bold md:pl-4 pl-2"
            strings={["RACE!"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-green-700">
          Come and join us for an exciting race through the scenic streets of Boulder
        </p>
        <button className="border-2 border=[#fff] hover:bg-yellow-500 w-[200px] rounded-full font-bold my-6 mx-auto py-3 text-white">
          Get Started
        </button>
        <CountdownComponent />
      </div>
    </div>
  );
};

export default Hero;
