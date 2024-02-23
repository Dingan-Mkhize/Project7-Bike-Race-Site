import * as React from "react";

const Footer = () => {
  return (
    <div className="items-center bg-[#f59e0b] flex flex-col px-16 py-12 max-md:px-5">
      <h1
        className="flex justify-center outline-text-brown w-full text-4xl font-bold hero-font text-[#a04008]aspect-[2.33] object-contain object-center
      overflow-hidden max-w-full mt-8"
      >
        BBT
      </h1>
      <div className="items-stretch flex justify-between gap-5 mt-8 max-md:justify-center hero-font">
        {/* <div className="text-black text-base font-semibold leading-6 whitespace-nowrap">
          Contact
        </div> */}
        <div className="text-black text-base font-semibold leading-6">FAQ</div>
        <div className="text-black text-base font-semibold leading-6">
          Support
        </div>
        <div className="text-black text-base font-semibold leading-6">
          Terms
        </div>
        <div className="text-black text-base font-semibold leading-6 whitespace-nowrap">
          Privacy
        </div>
      </div>
      <div className="self-stretch bg-black flex shrink-0 h-px flex-col mt-20 max-md:max-w-full max-md:mt-10" />
      <div className="justify-between items-stretch self-stretch flex w-full gap-5 mt-8 mb-8 max-md:max-w-full max-md:flex-wrap">
        <div className="text-black text-sm leading-5 grow whitespace-nowrap">
          © 2023 Boulder Bike Tour. All rights reserved.
        </div>
        <div className="items-stretch flex justify-between gap-5 max-md:justify-center">
          <div className="text-black text-sm leading-5 underline whitespace-nowrap">
            Privacy Policy
          </div>
          <div className="text-black text-sm leading-5 underline">
            Terms and Conditions
          </div>
          <div className="text-black text-sm leading-5 underline whitespace-nowrap">
            Cookie Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
