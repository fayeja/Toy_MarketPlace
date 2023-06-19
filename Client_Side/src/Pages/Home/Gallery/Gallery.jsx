import React from "react";

const Gallery = () => {
  return (
    <div className="border-4 bg-pink-100">
      <h6 className="text-2xl font-serif text-yellow-700 mt-5 text-center py-5">
        Monarch Gallery New Collection
      </h6>
      <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-8">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/2 flex-wrap">
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://wallpapercrafter.com/th8002/799653-jasmine-disney-princess-aladdin-cartoon-desktop.jpg"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRaeR-N9fXOV4PTioMqmADkL4KGpw2Z85NOCYzlvpwBjStpOUXbAIAtQzfqTVLqYv-JQ&usqp=CAU"
              />
            </div>
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://c4.wallpaperflare.com/wallpaper/94/807/704/princess-elsa-animated-movies-movies-disney-wallpaper-preview.jpg"
              />
            </div>
          </div>
          <div class="flex w-1/2 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://c4.wallpaperflare.com/wallpaper/297/405/222/disney-princess-wallpaper-preview.jpg"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://wallpaperaccess.com/full/7835910.jpg"
              />
            </div>
            <div class="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE8WCI1Hquc2UixhH8Gf1im1MbqyHGQBX8ofbjbwHKNkOEF6OcUs0r8Eqbo3dvT-lMoY4&usqp=CAU"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
