import React, { useState } from "react";

const Riders = () => {
  const ridersData = [
    {
      name: "John Doe",
      location: "Boulder, Colorado",
      description: "An experienced rider from Boulder, Colorado.",
      // image: "https://example.com/john-doe-image.jpg",
    },
    {
      name: "John Doe",
      location: "Boulder, Colorado",
      description: "An experienced rider from Boulder, Colorado.",
      // image: "https://example.com/john-doe-image.jpg",
    },
    {
      name: "John Doe",
      location: "Boulder, Colorado",
      description: "An experienced rider from Boulder, Colorado.",
      // image: "https://example.com/john-doe-image.jpg",
    },
    // Add more rider data objects as needed
    {
      name: "John Doe",
      location: "Boulder, Colorado",
      description: "An experienced rider from Boulder, Colorado.",
      // image: "https://example.com/john-doe-image.jpg",
    },
    {
      name: "John Doe",
      location: "Boulder, Colorado",
      description: "An experienced rider from Boulder, Colorado.",
      // image: "https://example.com/john-doe-image.jpg",
    },
    {
      name: "John Doe",
      location: "Boulder, Colorado",
      description: "An experienced rider from Boulder, Colorado.",
      // image: "https://example.com/john-doe-image.jpg",
    },
    // Add more rider data objects as needed
  ];

  const itemsPerPage = 3;
  const totalPages = Math.ceil(ridersData.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const getPageRiders = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return ridersData.slice(startIndex, endIndex);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-stretch">
      <div className="items-stretch bg-yellow-500 flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="flex justify-between gap-5 mt-16 mb-10 items-start max-md:max-w-full max-md:flex-wrap max-md:mr-1 max-md:mt-10">
          <div className="text-black text-6xl hero-font font-bold leading-[67px] grow shrink basis-auto max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            Meet the Riders
          </div>
          <div className="self-stretch text-black text-lg leading-7 grow shrink basis-auto max-md:max-w-full hero-font">
            Get to know the talented riders who will be competing in the race.
            Each rider brings their unique skills and determination, making the
            event even more thrilling and competitive.
          </div>
        </div>
      </div>
      {/* Riders Intro */}
      <div className="items-center bg-yellow-500 flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="self-center text-black text-center text-5xl hero-font font-bold leading-[58px] max-w-screen-md mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          This Year's Competitors!
        </div>
        <div className="self-center text-black text-center text-lg leading-7 max-w-screen-md mt-6 max-md:max-w-full hero-font">
          Get to know the talented riders participating in the race.
        </div>
        {/* Rider Section */}
        <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10 flex overflow-x-auto space-x-4">
          {getPageRiders(currentPage).map((rider, index) => (
            <div
              key={index}
              className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0"
            >
              <div className="items-stretch border flex grow flex-col w-full border-solid max-md:mt-8 card-info-section custom-bg rounded-xl">
                {/* Card Info Section */}
                <div
                  className="aspect-[1.39] object-contain object-center w-full h-[300px] overflow-hidden bg-gray-200"
                  style={{ borderRadius: "10px" }}
                />
                <div className="flex flex-col p-6 items-start max-md:px-5">
                  <div className="items-stretch flex gap-4">
                    <button className="text-black text-sm font-semibold leading-5 whitespace-nowrap items-stretch bg-zinc-100 aspect-[1.9655172413793103] justify-center px-2 py-1 rounded-3xl">
                      Riders
                    </button>
                    <button className="text-black text-sm font-semibold leading-5 whitespace-nowrap items-stretch bg-zinc-100 aspect-[1.9655172413793103] justify-center px-2 py-1 rounded-3xl">
                      Learn More
                    </button>
                  </div>
                  <div className="self-stretch text-black text-2xl font-bold leading-9 mt-4">
                    {rider.name} - {rider.location}
                  </div>
                  <div className="self-stretch text-black text-base leading-6 mt-2">
                    {rider.description}
                  </div>
                  <div className="justify-center items-stretch flex gap-2 mt-6 px-4">
                    <button className="transition duration-300 text-black text-sm font-semibold leading-5 whitespace-nowrap items-stretch bg-zinc-100 aspect-[1.9655172413793103] justify-center px-2 py-1 rounded-3xl">
                      Button
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Pagination Section */}
        <div className="flex justify-center mt-6">
          <button
            className={`mx-2 px-4 py-2 rounded-full ${
              currentPage === 1
                ? "bg-gray-300 border-2 border-black"
                : "bg-[#a04008] text-white border-2 border-white"
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className="mx-2 px-4 py-2 rounded-full bg-gray-200 text-[#a04008] border-2 border-[#a04008] hover:bg-gray-300 hover:border-[#a04008]"
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className={`mx-2 px-4 py-2 rounded-full ${
              currentPage === totalPages
                ? "bg-gray-300 border-2 border-black"
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
  );
};

export default Riders;