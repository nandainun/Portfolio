import React from "react";
import p1 from "../components/images/p1.jpg";
import p2 from "../components/images/p2.jpg";
import { FaArrowRight } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";
import { BiChevronDown } from "react-icons/bi";

function Projects() {
  return (
    <div className="max-w-4xl mx-auto justify-center py-7 px-auto" id="pr">
      <p className="text-2xl mb-10 mt-5 text-black text-center sm:text-4xl pt-4 pb-4 font-bold">Projects</p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col justify-center max-w-xs bg-white shadow-xl rounded-xl p-5 mx-5 my-5">
          <div className="">
            <img className="mx-auto shadow-xl drop-shadow-sm rounded-md" src={p1} alt="project 1" />
          </div>
          <div className="text-center mt-5">
            <p className="text-xl sm:text-2xl font-semibold text-gray-900">Project 1</p>
            <p className="mt-6 text-xl sm:text-base text-gray-600 pt-2 pb-4 px-5  inline-block border-b-2">Coming soon</p>
          </div>

          <span className="mt-6 mb-0 mx-16 inline-block w-auto bg-gray-200 font-display text-black font-semibold text-base md:text-xl py-4 px-7 cursor-pointer">
            <div className="flex flex-row items-center">
              <a href="#Home">
                <span className="mr-3 ml-5">Link</span>
              </a>
              <FaArrowRight color="black" />
            </div>
          </span>
        </div>
        <div className="flex flex-col justify-center max-w-xs bg-white shadow-xl rounded-xl p-5 mx-5 my-5">
          <div className="">
            <img className="mx-auto shadow-xl drop-shadow-sm rounded-md" src={p2} alt="project 2" />
          </div>
          <div className="text-center mt-5">
            <p className="text-xl sm:text-2xl text-gray-900">Project 2</p>
            <p className="mt-6 text-xl sm:text-base text-gray-600 pt-2 pb-4 px-5  inline-block border-b-2">Coming soon</p>
          </div>
          <span className="mt-6 mb-0 mx-16 inline-block w-auto bg-gray-200 font-display text-black font-semibold text-base md:text-xl py-4 px-7 cursor-pointer">
            <div className="flex flex-row items-center">
              <a href="#Home">
                <span className="mr-3 ml-5">Link</span>
              </a>
              <FaArrowRight color="black" />
            </div>
          </span>
        </div>
        <div className="flex flex-col justify-center max-w-xs bg-white shadow-xl rounded-xl p-5 mx-5 my-5">
          <div className="">
            <img className="mx-auto shadow-xl drop-shadow-sm rounded-md" src={p1} alt="project 1" />
          </div>
          <div className="text-center mt-5">
            <p className="text-xl sm:text-2xl text-gray-900">Project 3</p>
            <p className="mt-6 text-xl sm:text-base text-gray-600 pt-2 pb-4 px-5  inline-block border-b-2">Coming soon</p>
          </div>
          <span className="mt-6 mb-0 mx-16 inline-block w-auto bg-gray-200 font-display text-black font-semibold text-base md:text-xl py-4 px-7 cursor-pointer">
            <div className="flex flex-row items-center">
              <a href="#Home">
                <span className="mr-3 ml-5">Link</span>
              </a>
              <FaArrowRight color="black" />
            </div>
          </span>
        </div>
        <div className="flex flex-col justify-center max-w-xs bg-white shadow-xl rounded-xl p-5 mx-5 my-5">
          <div className="">
            <img className="mx-auto shadow-xl drop-shadow-sm rounded-md" src={p1} alt="project 1" />
          </div>
          <div className="text-center mt-5">
            <p className="text-xl sm:text-2xl text-gray-900">Project 4</p>
            <p className="mt-6 text-xl sm:text-base text-gray-600 pt-2 pb-4 px-5  inline-block border-b-2">Coming soon</p>
          </div>
          <span className="mt-6 mb-0 mx-16 inline-block w-auto bg-gray-200 font-display text-black font-semibold text-base md:text-xl py-4 px-7 cursor-pointer">
            <div className="flex flex-row items-center">
              <a href="#Home">
                <span className="mr-3 ml-5">Link</span>
              </a>
              <FaArrowRight color="black" />
            </div>
          </span>
        </div>
      </div>
      <ScrollIntoView selector="#tech">
        <div className="mx-auto p-5 mt-8">
          <BiChevronDown className="animate-bounce mx-auto text-3xl text-blue-500 cursor-pointer" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default Projects;
