import React from "react";

const About = () => {
  return (
    <div className="bg-pink-100">
      <h6 className="text-2xl my-10 font-serif text-yellow-700 text-center py-5">
        About Monarch
      </h6>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="p-5">
          <img
            data-aos="flip-right"
            className="lg:w-full h-full border-4 rounded-xl"
            src="https://media.tenor.com/8UkzfzYzRyMAAAAC/princesas-disney.gif"
            alt=""
          />
        </div>
        <div className="my-auto text-justify p-20">
          <p
            data-aos="fade-up"
            className="font-serif lg:text-4xl text-yellow-700"
          >
            {" "}
            There's a place where shopping for that special something is a
            fantastic experience. One that transports you, surprises you, and
            completely dazzles you. Where the act of seeking is almost as unique
            as what you find. Because it's not just the things that last a
            lifetime, but the memories that do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
