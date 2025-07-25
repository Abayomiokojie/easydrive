"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-24 sm:pt-36 padding-x">
        <h1 className="hero__title leading-[5.3rem]">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyles="bg-red-700 hover:bg-red-800 text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container ">
        {/* <Image
          src="/hero.png"
          alt="hero"
          fill
          priority
          className="object-contain -mt-16 sm:-mt-6"
        /> */}
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero"
            fill
            className="object-contain -mt-16 sm:-mt-6"
            priority
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            // sizes="1200px"
          />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
