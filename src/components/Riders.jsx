import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import ridersData from "../ridersData.json";
import bikemountain from "../assets/Bike-racers-mountains-one.jpg";

const Riders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // Start with default itemsPerPage
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    // Function to dynamically adjust items per page based on viewport width
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) {
        // Tailwind's "sm" breakpoint
        setItemsPerPage(1); // Show only one item on mobile
      } else {
        setItemsPerPage(3); // Show three items on larger screens
      }
    };

    // Call the function on component mount and add listener for resize events
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(ridersData.length / itemsPerPage);

  const getPageRiders = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return ridersData.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Element name="riders-section">
      <div className="bg-[#f59e0b] items-stretch flex flex-col justify-center px-16 max-md:px-5">
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
                  className="aspect-[1.39] object-contain object-center w-full h-[200px] overflow-hidden bg-white border-2 border-black rounded-t-xl"
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
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center mt-6 mb-24">
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
                className={`hidden sm:inline-block mx-2 px-4 py-2 rounded-full ${
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
