import * as React from "react";
import bikemountain from "../assets/Bike-racers-mountains-two.jpg";

const Photo = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 3; // Assuming 3 pages for the example

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="bg-yellow-500 items-stretch flex flex-col justify-center px-16 py-12 max-md:px-5">
        <div
          className="bg-opacity-50 flex flex-col mt-16 mb-10 pl-16 pr-20 py-12 border-solid border-black items-start max-md:max-w-full max-md:mr-1 max-md:mt-10 max-md:px-5 rounded-3xl"
          style={{
            backgroundImage: `url(${bikemountain})`,
            backgroundSize: "cover", // Adjust this property
            backgroundPosition: "center",
          }}
        >
          <div className="text-black text-5xl font-bold hero-font leading-[58px] w-[768px] max-w-full mt-3.5 max-md:text-4xl max-md:leading-[54px]">
            Join the Exciting Bike Race
          </div>
          <div className="text-white text-lg leading-7 mt-6 max-md:max-w-full hero-font">
            Experience the thrill of the Boulder Bike Race.
          </div>
          <div className="flex gap-4 mt-6 mb-3.5 pt-4">
            <button className="transition duration-300 border-2 border-[#fff] hover:bg-yellow-500 w-[200px] rounded-full font-bold px-3 py-3 text-white flex items-center justify-center">
              Register
            </button>

            <button className="transition duration-300 border-2 border-[#fff] hover:bg-yellow-500 w-[200px] rounded-full font-bold px-3 py-3 text-white flex items-center justify-center">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="items-center bg-yellow-500 flex flex-col px-16 py-12 max-md:px-5">
        <div className="text-black text-center text-5xl font-bold hero-font leading-[58px] max-w-screen-md mt-16 max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
          Boulder Bike
        </div>
        <div className="text-black text-center text-lg leading-7 max-w-screen-md mt-6 max-md:max-w-full hero-font">
          Browse through exciting photos from the Boulder Bike Tour.
        </div>
        <div className="self-stretch mt-20 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0"
              >
                {/* Empty Image Placeholder */}
                <div className="aspect-square object-contain object-center w-full overflow-hidden max-md:mt-8 bg-gray-300 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="self-stretch mt-8 mb-10 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            {[4, 5, 6].map((index) => (
              <div
                key={index}
                className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0"
              >
                {/* Empty Image Placeholder */}
                <div className="aspect-square object-contain object-center w-full overflow-hidden max-md:mt-8 bg-gray-300 rounded-3xl"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          {/* Previous Page Button */}
          <button
            className="mr-4 px-4 py-2 bg-[#a04008] text-white border-2 border-white rounded-full"
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
            className="ml-4 px-4 py-2 bg-[#a04008] text-white border-2 border-white rounded-full"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Photo;
