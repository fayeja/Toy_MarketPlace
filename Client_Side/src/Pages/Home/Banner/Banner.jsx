import React from "react";

const Banner = () => {
  return (
    <div className="carousel w-full h-96">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://static.independent.co.uk/2022/09/02/10/31225704-d6aede0d-937a-4444-aaba-ca5e268506f3.png?width=1200&height=630&fit=crop"
          className="w-full"
        />
        <div className="absolute invisible md:visible lg:visible w-full h-full pl-24 pt-20 bottom-0 text-white bg-gradient-to-r from-rose-300 to-transparent">
          <h3 className="font-bold text-3xl font-serif">Disney Princess</h3>
          <p className="w-96 text-sm">
            Kids are able to remember the most wonderful adventures with dolls
            and toys inspired by their favorite powerful heroes!
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
          <a href="#slide3" className="btn btn-circle bg-rose-300">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle bg-rose-300">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://bookstr.com/wp-content/uploads/2021/09/disney-princess-1.jpeg"
          className="w-full"
        />
        <div className="absolute invisible md:visible lg:visible w-full h-full pl-24 pt-20 bottom-0 text-white bg-gradient-to-r from-rose-300 to-transparent">
          <h3 className="font-bold text-3xl">Disney Princess</h3>
          <p className="w-96 text-sm">
            Kids are able to remember the most wonderful adventures with dolls
            and toys inspired by their favorite powerful heroes!
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
          <a href="#slide1" className="btn btn-circle bg-rose-300">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle bg-rose-300">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/hb_princess_princessportal2022_688_5e7abaa6.jpeg?region=0%2C0%2C2048%2C878"
          className="w-full"
        />
        <div className="absolute invisible md:visible lg:visible w-full h-full pl-24 pt-20 bottom-0 text-white bg-gradient-to-r from-rose-300 to-transparent">
          <h3 className="font-bold text-3xl">Disney Princess</h3>
          <p className="w-96 text-sm">
            Kids are able to remember the most wonderful adventures with dolls
            and toys inspired by their favorite powerful heroes!
          </p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/3">
          <a href="#slide2" className="btn btn-circle bg-rose-300">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle bg-rose-300">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
