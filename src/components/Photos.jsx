import React, { useEffect, useState } from "react";
import axios from "axios";
import { Element } from "react-scroll";
import bikemountain from "../assets/Bike-racers-mountains-two.jpg";
import fallbackImage from "../assets/Bike-Racers-fallback.png";

const Photo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  // Initialize photosPerPage based on window width
  const initialPhotosPerPage = window.innerWidth < 768 ? 1 : 5;
  const [photosPerPage, setPhotosPerPage] = useState(initialPhotosPerPage);
  const totalPhotos = 40; // Assuming this is static, but could also be dynamic based on data
  const totalPages = Math.ceil(totalPhotos / photosPerPage);

  useEffect(() => {
    const handleResize = () => {
      const newPhotosPerPage = window.innerWidth < 768 ? 1 : 5;
      setPhotosPerPage(newPhotosPerPage);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}/photos.json?page=${currentPage}`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        const data = response.data;
        setPhotos(data);
      })
      .catch((error) => console.error("Error fetching photos:", error));
  }, [currentPage, photosPerPage]); // Add photosPerPage as a dependency

  const startIndex = (currentPage - 1) * photosPerPage;
  const endIndex = startIndex + photosPerPage;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Element name="photos-section">
      <div className="bg-[#f59e0b] items-stretch flex flex-col justify-center px-16 max-md:px-5">
        <div
          className="flex flex-col bg-cover bg-bottom mt-16 mb-10 pl-16 pr-20 py-12 border-2 border-[#000] items-start max-md:max-w-full max-md:mr-1 max-md:mt-10 max-md:px-5 rounded-3xl"
          style={{
            backgroundImage: `url(${bikemountain})`,
            backgroundSize: "cover",
            backgroundPosition: "center 75%",
          }}
        >
          <div className="text-black text-5xl font-bold hero-font leading-[58px] w-[768px] max-w-full mt-3.5 max-md:text-4xl max-md:leading-[54px]">
            Boulder Bike Tour
          </div>
          <div className="outline-text-white text-white text-lg leading-7 mt-6 max-md:max-w-full hero-font">
            Once every decade, an exciting, prestigious, and inspiring bike race
            takes place in Colorado at the foot of the Rocky Mountains.
          </div>
        </div>
      </div>

      <div className="items-center bg-[#f59e0b] flex flex-col px-10 py-3 max-md:px-5">
        <div className="text-black text-center text-5xl font-bold hero-font leading-[58px] max-w-screen-md max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
          Tour Photos
        </div>
        <div className="text-black text-center text-lg leading-7 max-w-screen-md mt-6 max-md:max-w-full hero-font">
          Browse through exciting photos from the Boulder Bike Tour.
        </div>

        <div className="self-stretch mt-20 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            {photos.slice(startIndex, endIndex).map((photo, index) => (
              <div
                key={index}
                className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0"
              >
                <div className="aspect-square object-contain object-center w-full overflow-hidden max-md:mt-8 border-2 border-[#000] rounded-3xl">
                  {photo.url && !photo.url.includes("//_.jpg") ? (
                    <img
                      src={photo.url}
                      alt={photo.title || "Photo"}
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        e.target.onerror = null; // Prevents looping
                        e.target.src = fallbackImage; // Sets the fallback image
                      }}
                    />
                  ) : (
                    <div>No image available</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center mt-8 mb-32">
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
    </Element>
  );
};

export default Photo;
