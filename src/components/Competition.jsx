import React, { useState } from "react";
import axios from "axios";
import SuccessModal from "../components/SuccessModal";
import ErrorModal from "../components/ErrorModal";
import bikemountain from "../assets/Bike-Racers-contest.jpg";

const Competition = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [slogan, setSlogan] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitted) return;

    setErrorMessages([]); // Clear existing errors on new submission

    try {
      const response = await axios.post("http://localhost:3000/submissions", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        slogan: slogan,
      });

      if (response.status === 200) {
        setShowSuccessModal(true);
        setFirstName("");
        setLastName("");
        setEmail("");
        setSlogan("");
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      if (error.response && error.response.data.errors) {
        // Flatten all messages into a single array
        const formattedErrors = error.response.data.errors.flatMap(
          (err) => err.messages
        );
        setErrorMessages(formattedErrors);
        setShowErrorModal(true); // Open the error modal
      } else {
        setErrorMessages(["An unexpected error occurred. Please try again."]);
        setShowErrorModal(true); // Open the error modal
      }
    }
};

const handleCloseModal = () => {
  setShowSuccessModal(false);
};

const handleCloseErrorModal = () => {
  setShowErrorModal(false);
  setErrorMessages([]); // Optionally clear errors when the modal is closed
};

  return (
    <div className="bg-[#f59e0b] items-stretch flex flex-col justify-center px-16 py-12 max-md:px-5">
      {/* Error Messages */}
      {errorMessages.length > 0 && (
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
          role="alert"
        >
          <p className="font-bold">Submission Error</p>
          <ul>
            {errorMessages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
      )}

      <div
        className="flex flex-col mt-16 mb-10 pl-16 pr-20 py-12 border-2 border-black items-start max-md:max-w-full max-md:mr-1 max-md:mt-10 max-md:px-5 rounded-3xl"
        style={{
          backgroundImage: `url(${bikemountain})`,
          backgroundSize: "cover",
          backgroundPosition: "center 75%",
        }}
      >
        <div className="text-black text-5xl font-bold hero-font leading-[58px] w-[768px] max-w-full mt-3.5 max-md:text-4xl max-md:leading-[54px]">
          Join the Race Slogan Contest
        </div>
        <div className="outline-text-white text-white text-lg hero-font leading-7 mt-6 max-md:max-w-full">
          Do you have a creative slogan idea for the race? Enter our contest for
          a chance to make your own mark on this years Boulder Bike Tour!
        </div>
        <div className="items-stretch flex gap-4 mt-6 mb-3.5 pt-4">
          <div className="flex gap-4 mt-6 mb-3.5 pt-4">
            <button className="transition duration-300 border-2 border-[#fff] hover:bg-[#f59e0b] w-[200px] rounded-full font-bold px-3 py-3 text-white flex items-center justify-center">
              Submit
            </button>

            <button className="transition duration-300 border-2 border-[#fff] hover:bg-[#f59e0b] w-[200px] rounded-full font-bold px-3 py-3 text-white flex items-center justify-center">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="items-center bg-[#f59e0b] self-stretch flex w-full flex-col justify-center px-10 py-3 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-[768px] max-w-full flex-col mb-10 max-md:mt-10">
          <div className="self-stretch text-black text-center text-5xl hero-font font-bold leading-[58px] mt-3 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            Good Luck!
          </div>
          <div className="self-stretch text-black text-center text-lg hero-font leading-7 mt-6 max-md:max-w-full">
            Please fill out the form below and enter your slogan
          </div>
          <div className="text-black text-base hero-font leading-6 mt-20 max-md:max-w-full max-md:mt-10">
            First Name
          </div>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="text-neutral-600 text-base leading-6 items-stretch self-center border bg-white w-[560px] max-w-full justify-center mt-2 p-3 border-solid border-black max-md:max-w-full rounded-3xl"
          />
          <div className="text-black text-base hero-font leading-6 mt-6 max-md:max-w-full">
            Last Name
          </div>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="text-neutral-600 text-base leading-6 items-stretch self-center border bg-white w-[560px] max-w-full justify-center mt-2 p-3 border-solid border-black max-md:max-w-full rounded-3xl"
          />
          <div className="text-black text-base hero-font leading-6 mt-6 max-md:max-w-full">
            Email Address
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-neutral-600 text-base leading-6 items-stretch self-center border bg-white w-[560px] max-w-full justify-center mt-2 p-3 border-solid border-black max-md:max-w-full rounded-3xl"
          />
          <div className="text-black text-base hero-font leading-6 mt-6 max-md:max-w-full">
            Enter your best slogan!
          </div>
          <input
            type="text"
            value={slogan}
            onChange={(e) => setSlogan(e.target.value)}
            className="text-neutral-600 text-base leading-6 items-stretch self-center border bg-white w-[560px] max-w-full mt-2 pt-3 pb-28 px-3 border-solid border-black max-md:max-w-full max-md:pb-10 rounded-3xl"
          />
          <button
            className="transition duration-300 border-white bg-[#a04008] text-white border-2 hover:bg-[#f59e0b] w-[200px] rounded-full font-bold my-6 mx-auto py-3"
            onClick={handleSubmit}
            disabled={isSubmitted}
          >
            Submit
          </button>
          <SuccessModal isOpen={showSuccessModal} onClose={handleCloseModal} />
          <ErrorModal isOpen={showErrorModal} onClose={handleCloseErrorModal} errors={errorMessages} />
        </div>
      </div>
    </div>
  );
};

export default Competition;
