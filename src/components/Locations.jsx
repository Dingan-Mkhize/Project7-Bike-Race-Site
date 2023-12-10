import * as React from "react";

const Locations = () => {
  return (
    <div className="items-start bg-yellow-500 flex flex-col px-16 py-12 max-md:px-5">
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
                className="aspect-square object-contain object-center w-8 overflow-hidden max-w-full self-start" alt="placeholder"
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
                className="aspect-square object-contain object-center w-8 overflow-hidden max-w-full mt-10 self-start" alt="placeholder"
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
                className="aspect-square object-contain object-center w-8 overflow-hidden max-w-full mt-10 self-start" alt="placeholder"
              />
              <div className="self-stretch text-black text-xl hero-font font-bold leading-7 mt-4">
                Office
              </div>
              <div className="self-stretch text-black text-base leading-6 mt-2">
                123 Main St, Boulder CO 80302
              </div>
              <div className="justify-center items-stretch flex gap-2 mt-6 px-7 self-start max-md:px-5">
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[68%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a6d1a7b4a86e78d04b13c0061feafc5482f9b79c737f3ba98eb2a0c9873bcba3?apiKey=7eeb7dfa431b4f298828edabf075866d&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6d1a7b4a86e78d04b13c0061feafc5482f9b79c737f3ba98eb2a0c9873bcba3?apiKey=7eeb7dfa431b4f298828edabf075866d&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6d1a7b4a86e78d04b13c0061feafc5482f9b79c737f3ba98eb2a0c9873bcba3?apiKey=7eeb7dfa431b4f298828edabf075866d&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6d1a7b4a86e78d04b13c0061feafc5482f9b79c737f3ba98eb2a0c9873bcba3?apiKey=7eeb7dfa431b4f298828edabf075866d&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6d1a7b4a86e78d04b13c0061feafc5482f9b79c737f3ba98eb2a0c9873bcba3?apiKey=7eeb7dfa431b4f298828edabf075866d&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6d1a7b4a86e78d04b13c0061feafc5482f9b79c737f3ba98eb2a0c9873bcba3?apiKey=7eeb7dfa431b4f298828edabf075866d&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6d1a7b4a86e78d04b13c0061feafc5482f9b79c737f3ba98eb2a0c9873bcba3?apiKey=7eeb7dfa431b4f298828edabf075866d&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a6d1a7b4a86e78d04b13c0061feafc5482f9b79c737f3ba98eb2a0c9873bcba3?apiKey=7eeb7dfa431b4f298828edabf075866d&"
              className="aspect-[1.61] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10 rounded-3xl" alt="Map"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
