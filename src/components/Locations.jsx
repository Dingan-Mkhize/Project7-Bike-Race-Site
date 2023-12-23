import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import ridersData from "../ridersData.json";

const Locations = () => {
  const [riderLocations, setRiderLocations] = useState([]);

  const bicycleIcon = L.divIcon({
    className: "bicycle-icon",
    html: "🚲", // Using a bicycle emoji as the icon
    iconSize: [30, 30], // Size of the icon
    iconAnchor: [15, 15], // Positioning of the icon
  });


  useEffect(() => {
    setRiderLocations(ridersData);
  }, []);

  return (
    <div className="items-start bg-[#f59e0b] flex flex-col px-16 py-12 max-md:px-5">
      <div className="text-black text-5xl hero-font font-bold leading-[58px] w-[768px] max-w-full mt-4 self-start max-md:text-4xl max-md:leading-[54px]">
        Reach Out
      </div>
      <div className="text-black text-lg hero-font leading-7 mt-6 max-md:max-w-full">
        Discover the current rider locations on our interactive map.
      </div>
      <div className="self-stretch mt-20 mb-10 max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[32%] max-md:w-full max-md:ml-0">
            <div className="items-start self-stretch flex grow flex-col max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/564e44c214ad2d5538d55ab1508a39fd047280fac883ed2b56cd4750e8ee1391?apiKey=7eeb7dfa431b4f298828edabf075866d&"
                className="aspect-square object-contain object-center w-8 overflow-hidden max-w-full self-start"
                alt="placeholder"
              />
              <div className="self-stretch text-black text-xl hero-font font-bold leading-7 mt-4">
                Email
              </div>
              <div className="self-stretch text-black text-base leading-6 mt-2">
                Send us a message today!
              </div>
              <div className="self-stretch text-black text-base leading-6 underline mt-2">
                bbr@email.com
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6aae1932b4f31e71b12dc41d8a068d4f41e1bce035052a0d88bf2cb02afc01c1?apiKey=7eeb7dfa431b4f298828edabf075866d&"
                className="aspect-square object-contain object-center w-8 overflow-hidden max-w-full mt-10 self-start"
                alt="placeholder"
              />
              <div className="self-stretch text-black text-xl hero-font font-bold leading-7 mt-4">
                Phone
              </div>
              <div className="self-stretch text-black text-base leading-6 mt-2">
                Call us for more information.
              </div>
              <div className="self-stretch text-black text-base leading-6 underline mt-2">
                +1 (555) 000-0000
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a085e2d5717f986ce06ed7cfa59eb337be0b48fafabe2943d710e99180ce3e50?apiKey=7eeb7dfa431b4f298828edabf075866d&"
                className="aspect-square object-contain object-center w-8 overflow-hidden max-w-full mt-10 self-start"
                alt="placeholder"
              />
              <div className="self-stretch text-black text-xl hero-font font-bold leading-7 mt-4">
                Office
              </div>
              <div className="self-stretch text-black text-base leading-6 mt-2">
                123 Main St, Boulder CO 80302
              </div>
              <div className="justify-center items-stretch flex gap-2 mt-6 px-7 self-start max-md:px-5"></div>
            </div>
          </div>
          <div className="leaflet-container border-2 border-black flex flex-col items-stretch w-[68%] ml-5 max-w-full flex-grow flex-shrink-0 max-md:w-full max-md:ml-0">
            <MapContainer
              center={[40.0, -105.35]}
              zoom={12}
              style={{ height: "600px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {riderLocations.map((rider, index) => {
                const latLng = rider["Placeholder latitude and longitude"]
                  .replace("lat: ", "")
                  .replace("lng: ", "")
                  .split(",");
                const latitude = parseFloat(latLng[0]);
                const longitude = parseFloat(latLng[1]);

                return (
                  <Marker key={index} icon={bicycleIcon} position={[latitude, longitude]}>
                    <Popup>
                      <div>
                        <strong>
                          {rider["First name"]} {rider["Last name"]}
                        </strong>
                        <br />
                        City: {rider["City of origin"]}, State:
                        {rider["State of origin"]}
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locations;
