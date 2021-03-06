import { FaArrowRight } from "react-icons/fa";

export default function ContactMe() {
  return (
    <div className="max-w-lg w-full text-center m-auto pt-36 pb-10">
      <h1 className="text-2xl sm:text-4xl">Interested in working together?</h1>
      <a href="mailto:me.nandailhami626@gmail.com">
        <span className="mt-6 inline-block w-auto bg-black font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer">
          <div className="flex flex-row items-center">
            <span className="mr-3">Get in Touch</span>
            <FaArrowRight color="white" />
          </div>
        </span>
      </a>
    </div>
  );
}
