"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-3xl sm:text-4xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-800 to-secondary-400">
              Hello I'm {""}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Lucas",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "a Chemical Engineer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB6BE] text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            temporibus earum, deserunt minus in ratione dolore nisi unde.
            Voluptas hic ab delectus provident architecto corporis aliquid ipsum
            dicta vero molestias.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-800 via-primary-500 to-secondary-400 hover:bg-secondary-300 text-white">
              Hire me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mt-3 bg-gradient-to-br from-primary-800 via-primary-500 to-secondary-500 hover:bg-secondary-800 text-white border-white">
              <span className="block bg-[#121212] hover:bg-secondary-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/laptop.png"
              width={300}
              height={300}
              alt="hero-image"
              className="absolute rounded-[50%] transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
