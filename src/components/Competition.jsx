import * as React from "react";
import bikemountain from "../assets/Bike-Racers-contest.jpg";

const Competition = () => {
  return (
    <div className="flex flex-col items-center bg-yellow-500">
      <div className="items-stretch  self-stretch flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="items-stretch bg-yellow-500 flex justify-between gap-5 mt-16 mb-10 max-md:max-w-full max-md:flex-wrap max-md:mr-1 max-md:mt-10">
          <div className="text-black  text-6xl font-bold hero-font leading-[67px] grow shrink basis-auto max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            Enter the Contest
          </div>
          <div className="text-black text-lg hero-font leading-7 grow shrink basis-auto self-start max-md:max-w-full">
            Do you have a creative slogan idea for the race? Enter our contest
            for a chance to win exciting prizes and have your slogan featured in
            the event!
          </div>
        </div>
      </div>
      <div
        className="flex flex-col mt-16 mb-10 pl-16 pr-20 py-12 border-solid bg-yellow-500 items-start max-md:max-w-full max-md:mr-1 max-md:mt-10 max-md:px-5 rounded-3xl"
        style={{
          backgroundImage: `url(${bikemountain})`,
          backgroundSize: "cover", // Adjust this property
          backgroundPosition: "center",
        }}
      >
        <div className="text-black text-5xl font-bold hero-font leading-[58px] w-[768px] max-w-full mt-3.5 max-md:text-4xl max-md:leading-[54px]">
          Join the Race Slogan Contest
        </div>
        <div className="text-white text-lg hero-font leading-7 mt-6 max-md:max-w-full">
          Submit your creative slogan idea and stand a chance to win exciting
          prizes!
        </div>
        <div className="items-stretch flex gap-4 mt-6 mb-3.5 pt-4">
          <div className="flex gap-4 mt-6 mb-3.5 pt-4">
            <button className="transition duration-300 border-2 border-[#fff] hover:bg-yellow-500 w-[200px] rounded-full font-bold px-3 py-3 text-white flex items-center justify-center">
              Submit
            </button>

            <button className="transition duration-300 border-2 border-[#fff] hover:bg-yellow-500 w-[200px] rounded-full font-bold px-3 py-3 text-white flex items-center justify-center">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="items-center bg-yellow-500 self-stretch flex w-full flex-col justify-center mt-28 px-16 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-[768px] max-w-full flex-col mt-16 mb-10 max-md:mt-10">
          <div className="self-stretch text-black text-center text-5xl hero-font font-bold leading-[58px] mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            Good Luck!
          </div>
          <div className="self-stretch text-black text-center text-lg hero-font leading-7 mt-6 max-md:max-w-full">
            Please fill out the form below and enter your slogan
          </div>
          <div className="text-black text-base hero-font leading-6 mt-20 max-md:max-w-full max-md:mt-10">
            First Name
          </div>
          <div className="text-neutral-600 text-base leading-6 items-stretch self-center border bg-white w-[560px] max-w-full justify-center mt-2 p-3 border-solid border-black max-md:max-w-full rounded-3xl">
            Placeholder
          </div>
          <div className="text-black text-base hero-font leading-6 mt-6 max-md:max-w-full">
            Last Name
          </div>
          <div className="text-neutral-600 text-base leading-6 items-stretch self-center border bg-white w-[560px] max-w-full justify-center mt-2 p-3 border-solid border-black max-md:max-w-full rounded-3xl">
            Placeholder
          </div>
          <div className="text-black text-base hero-font leading-6 mt-6 max-md:max-w-full">
            Email Address
          </div>
          <div className="text-neutral-600 text-base leading-6 items-stretch self-center border bg-white w-[560px] max-w-full justify-center mt-2 p-3 border-solid border-black max-md:max-w-full rounded-3xl">
            Placeholder
          </div>
          <div className="text-black text-base hero-font leading-6 mt-6 max-md:max-w-full">
            Enter your best slogan!
          </div>
          <div className="text-neutral-600 text-base leading-6 items-stretch self-center border bg-white w-[560px] max-w-full mt-2 pt-3 pb-28 px-3 border-solid border-black max-md:max-w-full max-md:pb-10 rounded-3xl">
            Enter your message
          </div>
          <div className="self-center flex gap-2 mt-6 pr-11 pb-3.5 items-start max-md:pr-5"></div>
          <button className="transition duration-300 border-white bg-[#a04008] text-white border-2 hover:bg-yellow-500 w-[200px] rounded-full font-bold my-6 mx-auto py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Competition;
