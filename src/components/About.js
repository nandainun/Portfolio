import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { BiChevronDown } from "react-icons/bi";

function About() {
  return (
    <div className="max-w-4xl mt-20 mx-auto">
      <p className="text-2xl text-black md:text-3xl font-bold text-center">Hey 👋 </p>
      <p className="text-base text-gray-600 sm:text-xl text-center leading-relaxed mt-4">
        I am a Gunadarma University student, I am very interested in web development. Thank you for visiting my website
      </p>
      <ScrollIntoView selector="#pr">
        <div className="mx-auto p-5">
          <BiChevronDown className="animate-bounce mx-auto text-3xl text-blue-500 cursor-pointer" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default About;
