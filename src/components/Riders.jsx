import React, { useState } from "react";
import { Element } from "react-scroll";
import ridersData from "../ridersData.json";
import bikemountain from "../assets/Bike-racers-mountains-one.jpg";

const Riders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(ridersData.length / itemsPerPage);

  const getPageRiders = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return ridersData.slice(startIndex, endIndex);
  };

  // const scrollToTop = () => {
  //   scroll.scrollToTop({ duration: 500, smooth: "easeInOutQuart" });
  // };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Element name="riders-section">
      <div className="bg-[#f59e0b] items-stretch flex flex-col justify-center px-16 py-1 max-md:px-5">
        <div
          className="flex flex-col bg-cover bg-bottom mt-16 mb-10 pl-16 pr-20 py-12 border-2 border-[#000] items-start max-md:max-w-full max-md:mr-1 max-md:mt-10 max-md:px-5 rounded-3xl"
          style={{
            backgroundImage: `url(${bikemountain})`,
            backgroundSize: "cover",
            backgroundPosition: "center 75%",
          }}
        >
          <div className="text-black text-6xl hero-font font-bold leading-[67px] grow shrink basis-auto max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            Meet the Riders
          </div>
          <div className="outline-text-white self-stretch text-white text-lg leading-7 grow shrink basis-auto max-md:max-w-full hero-font">
            Get to know the talented riders who will be competing in the race.
            Each rider brings their unique skills and determination, making the
            event even more thrilling and competitive.
          </div>
          <div className="flex gap-4 mt-6 mb-3.5 pt-4">
            <button className="transition duration-300 border-2 border-[#fff] hover:bg-[#f59e0b] w-[200px] rounded-full font-bold px-3 py-3 text-white flex items-center justify-center">
              Rider Info
            </button>
          </div>
        </div>

        <div className="items-center flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="self-center text-black text-center text-5xl hero-font font-bold leading-[58px] max-w-screen-md mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            This Year's Competitors!
          </div>
          <div className="self-center text-black text-center text-lg leading-7 max-w-screen-md mt-6 max-md:max-w-full hero-font">
            Get to know the talented riders participating in the race.
          </div>

          <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10 flex overflow-x-auto space-x-4 rounded-xl">
            {getPageRiders(currentPage).map((rider, index) => (
              <div
                key={index}
                className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0 bg-[#a04008] rounded-xl"
              >
                <img
                  src={rider.image}
                  alt={`${rider["First name"]} ${rider["Last name"]}`}
                  className="aspect-[1.39] object-contain object-center w-full h-[300px] overflow-hidden bg-gray-200 border-2 border-black rounded-t-xl"
                />
                <div
                  className="flex flex-col justify-between flex-grow p-6 items-start max-md:px-5 bg-[#a04008] border-2 border-black rounded-b-xl"
                  style={{ height: "250px" }}
                >
                  <div>
                    <div className="text-black text-2xl font-bold leading-9">
                      {rider["First name"]} {rider["Last name"]} -{" "}
                      {rider["City of origin"]}, {rider["State of origin"]}
                    </div>
                    <div className="text-black text-base leading-6 mt-2">
                      {rider.description}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      window.location.href = `/locations?rider=${encodeURIComponent(
                        JSON.stringify(rider)
                      )}`;
                    }}
                    className="transition duration-300 text-black text-lg font-semibold leading-6 whitespace-nowrap items-stretch bg-gray-200 border-2 border-black px-4 py-2 rounded-3xl hover:border-white hover:bg-[#f59e0b] hover:text-white mt-4 self-stretch"
                  >
                    Location
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            {/* Previous Page Button */}
            <button
              className={`mx-2 px-4 py-2 rounded-full ${
                currentPage === 1
                  ? "bg-gray-300 text-[#a04008] border-2 border-[#a04008]"
                  : "bg-[#a04008] text-white border-2 border-white"
              }`}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`mx-2 px-4 py-2 rounded-full ${
                  currentPage === index + 1
                    ? "bg-white text-[#a04008] border-2 border-[#a04008]"
                    : "bg-gray-300 text-[#a04008] border-2 border-[#a04008]"
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}

            {/* Next Page Button */}
            <button
              className={`mx-2 px-4 py-2 rounded-full ${
                currentPage === totalPages
                  ? "bg-gray-300 text-[#a04008] border-2 border-[#a04008]"
                  : "bg-[#a04008] text-white border-2 border-white"
              }`}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Riders;
