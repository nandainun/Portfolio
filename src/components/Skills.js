import React from "react";
import { FaReact, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiPhp, SiJavascript } from "react-icons/si";

function Skills() {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl text-black text-center sm:text-4xl pt-4 font-bold">Tech I Use</p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#164e63" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">React</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiTailwindcss color="#22d3ee" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">TailwindCSS</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaBootstrap color="#6366f1" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Bootstrap</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiPhp color="#a78bfa" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">Php</p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiJavascript color="#facc15" className="mx-auto text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">JavaScript</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
