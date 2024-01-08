import React, { useEffect, useState } from "react";
import axios from "axios";
import { Element } from "react-scroll";
import bikemountain from "../assets/Bike-racers-mountains-two.jpg";

const Photo = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const totalPages = 5; 

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/photos.json?page=${currentPage}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        const data = response.data;
        console.log("Full API response:", response);
        setPhotos(data);
      })
      .catch((error) => console.error("Error fetching photos:", error));
  }, [currentPage]);

  // Add event listeners after each render
  useEffect(() => {
    const images = document.querySelectorAll(".aspect-square img");
    images.forEach((img) => {
      img.addEventListener("load", () =>
        console.log("Image loaded successfully:", img)
      );
      img.addEventListener("error", () =>
        console.error("Error loading image:", img)
      );
    });

    // Cleanup event listeners when the component unmounts or images change
    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", () =>
          console.log("Image loaded successfully:", img)
        );
        img.removeEventListener("error", () =>
          console.error("Error loading image:", img)
        );
      });
    };
  }, [photos]);

  return (
    <Element name="photos-section">
      <div className="bg-[#f59e0b] items-stretch flex flex-col justify-center px-10 py-10 max-md:px-5">
        <div
          className="flex flex-col mt-16 mb-10 pl-16 pr-20 py-12 border-2 border-[#000] items-start max-md:max-w-full max-md:mr-1 max-md:mt-10 max-md:px-5 rounded-3xl"
          style={{
            backgroundImage: `url(${bikemountain})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-black text-5xl font-bold hero-font leading-[58px] w-[768px] max-w-full mt-3.5 max-md:text-4xl max-md:leading-[54px]">
            Boulder Bike Tour
          </div>
          <div className="outline-text-white text-white text-lg leading-7 mt-6 max-md:max-w-full hero-font">
            Once every decade, an exciting, prestigious, and inspiring bike race
            takes place in Colorado at the foot of the Rocky Mountains.
          </div>
          <div className="flex gap-4 mt-6 mb-3.5 pt-4">
            <button className="transition duration-300 border-2 border-[#fff] hover:bg-[#f59e0b] w-[200px] rounded-full font-bold px-3 py-3 text-white flex items-center justify-center">
              Rider Info
            </button>

            <button className="transition duration-300 border-2 border-[#fff] hover:bg-[#f59e0b] w-[200px] rounded-full font-bold px-3 py-3 text-white flex items-center justify-center">
              Learn More
            </button>
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
            {photos.slice(0, 2).map(
              (
                photo,
                index // Adjust this line to slice only the photos you want in the first row
              ) => (
                <div
                  key={index}
                  className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0"
                >
                  <div className="aspect-square object-contain object-center w-full overflow-hidden max-md:mt-8 border-2 border-[#000] rounded-3xl">
                    {photo.url && !photo.url.includes("//_.jpg") ? (
                      <img
                        src={photo.url}
                        alt={photo.title || "Photo"}
                        className="object-contain w-full h-full"
                      />
                    ) : (
                      <div>No image available</div>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="self-stretch mt-20 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            {photos.slice(2, 4).map(
              (
                photo,
                index // Adjust this line to slice only the photos you want in the second row
              ) => (
                <div
                  key={index}
                  className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0"
                >
                  <div className="aspect-square object-contain object-center w-full overflow-hidden max-md:mt-8 border-2 border-[#000] rounded-3xl">
                    {photo.url && !photo.url.includes("//_.jpg") ? (
                      <img
                        src={photo.url}
                        alt={photo.title || "Photo"}
                        className="object-contain w-full h-full"
                      />
                    ) : (
                      <div>No image available</div>
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="flex justify-center mt-8">
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
    </Element>
  );
};

export default Photo;
