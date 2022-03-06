import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
function Footer() {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
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
      <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
          Made with{" "}
          <span className="mr-2" role="link" aria-label="heart">
            💙 by{" "}
            <a className="text-blue-500 hover:underline" href="mailto:me.nandailhami626@gmail.com">
              Nanda Ilhami
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
