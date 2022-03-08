import React from "react";
import profile from "../components/images/profile.jpg";
import { FaGithub, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

function Card() {
  return (
    <div className="w-full" id="Home">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm" src={profile} alt="profile card" />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl text-gray-900">Nanda Ilhami</p>
          <p className="text-xl sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">Student / Web Developer</p>

          <div className="flex align-center justify-center mt-4">
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://github.com/nandainun">
              <FaGithub />
              <span class="sr-only">Github</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-600 hover:bg-blue-600 rounded-full hover:text-white transition-colors duration-300" href="https://twitter.com/NandaIlhami12">
              <FaTwitter />
              <span class="sr-only">Twitter</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-red-600 rounded-full hover:text-white transition-colors duration-300" href="https://www.instagram.com/nandainun/">
              <FaInstagram />
              <span class="sr-only">Instagram</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-black-500 hover:bg-green-900 rounded-full hover:text-white transition-colors duration-300" href="mailto:me.nandailhami626@gmail.com">
              <FaEnvelope />
              <span class="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
